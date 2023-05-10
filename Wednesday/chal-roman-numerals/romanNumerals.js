const toRoman = (num) => {
    // First, we create a copy of the original parameter.
    let original = num;

    // Second, we shall create a variable to hold the romanized version of the parameter.
    let romanized = ``;

    // Then to confirm what we're getting isn't greater than or equal to 1000.
    if (num > 1000) {
        return console.log(`Your number is greater than 1000.`);
    }


    // We need to then convert the number into roman numeral.
    // The simplest way is to create if statements that handle each number place of our parameter.

    let originalStr = ``;
    let tempValue = ``;
    
    if (original === 1000) {
        romanized += `M`;
        return console.log(romanized);
    }
    // console.log(original);

    if (original >= 100) {
        if (original >= 500) {
            original -= 500;
            romanized += `M`
        }

        originalStr = original.toString()
        tempValue = +originalStr[0];

        while (tempValue > 0) {
            romanized += `C`;
            tempValue--;
        }
        original = originalStr.replace(originalStr[0], ``);
    }

    if (original >= 10) {
        if (original >= 50) {
            original -= 50;
            romanized += 'L'
        }

        originalStr = original.toString()
        tempValue = +originalStr[0];

        while (tempValue > 0) {
            romanized += `X`;
            tempValue--;
        }
        original = originalStr.replace(originalStr[0], ``);
    }

    if (original >= 1) {
        if (original >= 5) {
            original -= 5;
            romanized += 'V'
        }
        originalStr = original.toString()
        tempValue = +originalStr[0];

        while (tempValue > 0) {
            romanized += `I`;
            tempValue--;
        }
    }

    // Then we return the answer
    return console.log(romanized);
}

toRoman(99) // 'LXXXXVIIII'
toRoman(5) // 'V'
toRoman(267) // 'CCLXVII'