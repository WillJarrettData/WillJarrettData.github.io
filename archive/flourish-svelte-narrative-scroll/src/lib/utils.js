import { group } from 'd3-array';

// check if browser prefers reduced motion
export function getMotion() {
  let mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)"); 
	return !mediaQuery || mediaQuery.matches ? false : true; // return true for motion, false for no motion
}

// function to filter data to match selectedName
export function filterDataByName(data, selectedName) {
  return data.filter((d) => d.name === selectedName)
}

// generate all month-year combinations between min and max dates
function generateAllMonths(minDate, maxDate) {
  const months = [];
  let currentDate = new Date(minDate);
  currentDate.setDate(1);

  while (currentDate <= maxDate) {
      const month = currentDate.getMonth() + 1; // fixing for zero-indexed months
      const year = currentDate.getFullYear();
      const monthYear = `${year}-${month.toString().padStart(2, '0')}`;
      months.push(monthYear);
      currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return months;
}

// group data by month and year, ensuring all months are included
export function splitDataByMonthYear(data) {
    const minDate = new Date(Math.min(...data.map(d => new Date(d.date))));
    const maxDate = new Date(Math.max(...data.map(d => new Date(d.date))));
    const allMonths = generateAllMonths(minDate, maxDate);

    // group the data by month and year
    const groupedData = group(data, d => {
        const date = new Date(d.date);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}-${month.toString().padStart(2, '0')}`; // YYYY-MM
    });

    const result = {};
    allMonths.forEach(monthYear => {
        result[`data${monthYear}`] = groupedData.get(monthYear) || []; // empty array if no data
    });

    return result;
}

export function random(min, max, round) {
  const factor = Math.pow(10, round);
  return Math.round((Math.random() * (max - min) + min) * factor) / factor;
}

// change y values to make beeswarm
export class AccurateBeeswarm {
  // courtesy of James Trimble: https://observablehq.com/@jtrim-ons/non-force-directed-beeswarm-of-mobility-version-3-no-union-o
  constructor(items, radiusFun, xFun) {
      this.items = items;
      this.radiusFun = radiusFun;
      this.xFun = xFun;
      this.tieBreakFn = this._sfc32(0x9E3779B9, 0x243F6A88, 0xB7E15162, 4);
      this.maxR = Math.max(...items.map(d => radiusFun(d)));
      this.rng = this._sfc32(1, 2, 3, 4);
  }

  calculateYPositions() {
      let all = this.items
          .map((d, i) => ({
              datum: d,
              originalIndex: i,
              x: this.xFun(d),
              y: null,
              placed: false
          }))
          .sort((a, b) => a.x - b.x);
      
      all.forEach((d, i) => d.index = i);
      all.forEach(d => d.tieBreaker = this.tieBreakFn(d.x));
      
      let allSortedByPriority = [...all].sort((a, b) => {
          let key_a = this.radiusFun(a.datum) + a.tieBreaker;
          let key_b = this.radiusFun(b.datum) + b.tieBreaker;
          return key_b - key_a;
      });

      for (let item of allSortedByPriority) {
          item.placed = true;
          item.y = this._getBestYPosition(item, all);
      }

      all.sort((a, b) => a.originalIndex - b.originalIndex);
      return all.map(d => ({ datum: d.datum, x: d.x, y: d.y }));
  }

  _sfc32(a, b, c, d) {
      let rng = function() {
          a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
          var t = (a + b) | 0;
          a = b ^ (b >>> 9);
          b = (c + (c << 3)) | 0;
          c = (c << 21) | (c >>> 11);
          d = (d + 1) | 0;
          t = (t + d) | 0;
          c = (c + t) | 0;
          return (t >>> 0) / 4294967296;
      };
      for (let i = 0; i < 10; i++) rng();
      return rng;
  }

  _getBestYPosition(item, all) {
      let forbiddenIntervals = [];
      for (let step of [-1, 1]) {
          let xDist;
          let r = this.radiusFun(item.datum);
          for (let i = item.index + step; i >= 0 && i < all.length && (xDist = Math.abs(item.x - all[i].x)) < r + this.maxR; i += step) {
              let other = all[i];
              if (!other.placed) continue;
              let sumOfRadii = r + this.radiusFun(other.datum);
              if (xDist >= sumOfRadii) continue;
              let yDist = Math.sqrt(sumOfRadii * sumOfRadii - xDist * xDist);
              let forbiddenInterval = [other.y - yDist, other.y + yDist];
              forbiddenIntervals.push(forbiddenInterval);
          }
      }

      if (forbiddenIntervals.length == 0) {
          return this.radiusFun(item.datum) * (this.rng() - 0.5);
      }

      let candidatePositions = forbiddenIntervals.flat();
      candidatePositions.push(0);
      candidatePositions.sort((a, b) => Math.abs(a) - Math.abs(b) || a - b);

      for (let position of candidatePositions) {
          if (forbiddenIntervals.every(interval => position <= interval[0] || position >= interval[1])) {
              return position;
          }
      }
  }
}

// remove non-alphanumeric characters from string
export const removeNonAlphaNumeric = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

// turn rgb string into object
export function rgbStringToObject(rgbString) {
    const [r, g, b] = rgbString
        .replace('rgb(', '')
        .replace(')', '')
        .split(',')
        .map(s => parseInt(s.trim()));
    return { r, g, b };
}

export function interpolateColor(startColor, endColor, factor) {
    const r = Math.round(startColor.r + (endColor.r - startColor.r) * factor);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * factor);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * factor);
    return { r, g, b };
}
