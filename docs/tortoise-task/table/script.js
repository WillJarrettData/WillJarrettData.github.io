// import data
fetch('data/data.json')
.then(response => response.json())
.then(data => {

    ///
    /// main
    ///

    // populate the table
    var tableBody = document.querySelector('#table tbody');
    var tableHead = document.querySelector('#table thead');
    populateTable(data, tableBody);

    // make columns sortable
    makeColumnsSortable(tableHead, tableBody);

    // search functionality
    var searchInput = document.querySelector('#search');
    searchInput.addEventListener('keyup', function() {
        searchTable(searchInput, tableBody);
    });

    // create click event on Name column header
    // Note: this is a pretty hacky way of fixing an issue with sorting
    // by name immediately after the load... will go back to this later
    // for more elegant solution
    tableHead.querySelectorAll('th')[1].click();

})
.catch(error => {
    console.error('Error:', error);
});

///
/// functions
///

// function to initialise the table using the json data
function populateTable(data, tableBody) {
    // create rows
    data['data'].forEach(item => {
        var row = document.createElement('tr');
        
        // define desired fields
        var fields = [
            `<div class="image-container"><img class="profile-image" src="images/thumbnails/${item.id}_thumbnail.jpg" alt="${item.name}"></div>`,
            `<div class="member-name">${item.name}</div>`,
            `<div class="member-party"><span class="mobile-script">Party: </span>${item.party}</div>`,
            `<div class="member-constituency"><span class="mobile-script">Constituency: </span>${item.constituency}</div>`,
            `<div class="member-constituency"><span class="mobile-script">Start date: </span>${item.start_date_string}</div>`,
            `<div class="image-container contact-form"><a target="_blank" href="${item.contact}" alt="${item.name}"><span class="mobile-script-contact">Find contact details </span><img class="exit-image" src="images/exit_page.svg"></a></div>`
        ];
        
        // create a cell for each field
        fields.forEach(field => {
            var cell = document.createElement('td');
            cell.innerHTML = field;
            row.appendChild(cell);
        });

        // colour the row based on party_colour
        row.style.backgroundColor = item.party_colour + "33";

        // give each row an id based on the item order
        row.id = item.order;
        
        // append the row to the table
        tableBody.appendChild(row);

    });

}

// function to filter the table based on the search input
function searchTable(searchInput, tableBody) {
    var searchValue = searchInput.value.toLowerCase();
    var rows = tableBody.querySelectorAll('tr');
    var foundAny = false;
    var noResultsMessage = document.querySelector('#no-results');

    rows.forEach(row => { 
        var cells = row.querySelectorAll('td');
        var found = false;
        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchValue)) {
                found = true;
            }
        });
        if (found) {
            row.style.display = '';
            foundAny = true;
        } else {
            row.style.display = 'none';
        }
    });

    noResultsMessage.style.display = foundAny ? 'none' : 'block';
}

// function to make clicking on column headers sort the table
function makeColumnsSortable(tableHead, tableBody) {
    let lastSortedColumnIndex = null;
    var headers = tableHead.querySelectorAll('th');
    
    headers.forEach((header, index) => {
        if (index === 1 || index === 2 || index === 3 || index === 4) { // only Name, Party, Constituency, Start date
            header.style.cursor = 'pointer';
            
            // set sorting order attribute to ascending
            header.setAttribute('data-order', 'asc');
            
            header.addEventListener('click', function() {
                let currentOrder;

                // if clicking the same column, toggle the sorting order
                if (lastSortedColumnIndex === index) {
                    currentOrder = header.getAttribute('data-order') === 'asc' ? 'desc' : 'asc';
                } else {
                    
                    currentOrder = 'asc';
                }
                
                // update the sorting order attribute
                header.setAttribute('data-order', currentOrder);
                sortTableByColumn(tableBody, index, currentOrder === 'asc');
                lastSortedColumnIndex = index;
            });
        }
    });
}

// function to sort the table by a given column
function sortTableByColumn(tableBody, columnIndex, ascending = true) {
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const sortedRows = rows.sort((a, b) => {
        const cellA = a.children[columnIndex].textContent.trim();
        const cellB = b.children[columnIndex].textContent.trim();
        let comparison = 0;

        if (columnIndex === 1) { // Name
            comparison = a.id - b.id;
        } else if (columnIndex === 2 || columnIndex === 3) { // Party or Constituency
            comparison = cellA.localeCompare(cellB);
        } else if (columnIndex === 4) { // Start date
            comparison = parseDate(cellA) - parseDate(cellB);
        }

        return ascending ? comparison : -comparison;
    });

    tableBody.innerHTML = '';
    tableBody.append(...sortedRows);
}

// function to parse date strings into Date objects -- seems necessary for Firefox?
function parseDate(dateString) {
    dateString = dateString.replace('Start date: ', '');
    const [day, month, year] = dateString.replace(',', '').split(' ');
    const months = {
        January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
        July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };
    return new Date(year, months[month], day);
}

// TO DO:
// - finesse sorting functionality (properly fixing the bug where the first click on the Name column doesn't sort)
// - add pagination
// - make sorts consistent when identical values are present within a column