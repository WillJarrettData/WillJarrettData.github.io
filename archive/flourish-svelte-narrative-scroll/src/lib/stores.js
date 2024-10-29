import { writable } from "svelte/store";

// global stores
export const narrativeStore = writable("narrative1");
export const scrollPositionStore = writable(0);
export const balloonPositionStore = writable({left: 50, top: 20});
export const animationTriggerStore = writable(null);
export const balloonJourneyLoadedStore = writable(false);

// timeline stores
export const chartTimelineExploreStore = writable(false);
export const chartTimelineSearchTerm = writable("");
export const chartTimelineSelectedData = writable(null);
export const chartTimelineSelectedCircle = writable(null);

