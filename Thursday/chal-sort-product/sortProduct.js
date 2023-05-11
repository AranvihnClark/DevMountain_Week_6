const sortProduct = (arr) => {
    // We create a copy of the array that is given to us a parameter.
    // This will also be what is outputted in the end.
    let output = arr;

    // We have a second array that keeps track of the product that will determine the new order.
    let value = [];

    // The first thing to do is to figure out the product situation
    for (let i = 1; i <= arr.length; i++) {
        value.push(output[i-1] * i);
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            while (value[i] > value[j]) {
                output.splice(j, 0, output[i]);
                output.splice(i, 1, output[j+1]);
                output.splice(j+1, 1);

                value.splice(j, 0, value[i]);
                value.splice(i, 1, value[j+1]);
                value.splice(j+1, 1);
            }
        }
    }
    console.log(output);
}

sortProduct([23, 2, 3, 4, 5]); // 2, 3, 4, 23, 5
sortProduct([40, 30, 20, 10, 15]); // 40, 10, 20, 30, 15
sortProduct([64, 3, 4, 22, 1, 21, 11, 5, 20]); // 1, 3, 4, 5, 64, 11, 22, 21, 20
