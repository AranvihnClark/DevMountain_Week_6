const createTower = num => {
    // We create a temp variale to hold our parameter in case we need to mess with it.
    let row = num;

    // This will be the final output
    let tower = [];

    // Count the rows
    for (let i = 1; i <= num; i++) {
        // We need variable to hold the string that makes up each row.
        let line = ``;

        // The variables below are used as counters for spaces and stars respectively.
        let spaceCount = 0;
        let starCount = (2 * i) - 1;

        // Count the front space(s) and add them to our line string.
        while ((row-1) > spaceCount) {
            line += ` `;
            spaceCount++
        }

        // Count the star(s) and add them to our line string.
        for (let s = 1; s <= starCount; s++) {
            line += `*`;
        }

        // Count the back space(s) and add them to our line string.
        spaceCount = 0;
        while ((row-1) > spaceCount) {
            line += ` `;
            spaceCount++
        }

        // We decrease the row count so that we can correctly add the spaces.
        row--

        // Then we push the line string into our tower array.
        tower.push(line);
    }
    return console.log(tower);
}

createTower(6);