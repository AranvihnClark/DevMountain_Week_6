 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

  //basic test
  test('should run basic test', () => {
    expect(2).toBe(2);
  });

  //to showcase we can use javascript functions and access data from 'testData' object.
  test('first name should be patten', () => {
    expect(testData.firstName.toLowerCase()).toBe('patten');
  });

  //describe-block for formatTitle -- descripe block simply creates a section of tests to organize your tests
  describe('Format title test', () => {

    test('formatTitle should return a string', () => {
      let formattedTitle = formatTitle(testData.title);
      expect(typeof formattedTitle).toBe('string');
    });

    test('formatTitle should format the string correctly', () => {
      let formattedTitle = formatTitle(testData.title);
      expect(formattedTitle).toBe('Nulla Ac');
    });

  });

  //describe-block for shorten-bio
  describe('Shorten bio tests', ()=> {

    test('shorten-bio actually shortens the string', () => {
      let shortBio = shortenBio(testData.bio);
      expect(shortBio.length).toBeLessThan(testData.bio.length);
    });

    test('shorten-bio add "..." at the end', () => {
      let shortBio = shortenBio(testData.bio);
      expect(shortBio).toContain('...');
    })

  });

  //describe-block for convertLength
  describe('Convert length tests', () => {

    test('convertLength returns an array with 2 indexes', () => {
      let convertedLength = convertLength(testData.length);
      expect(convertedLength).toHaveLength(2);
    });

    test('convertLength can handle numbers below 60', () => {
      let converted = convertLength(40);
      expect(converted[0]).toEqual(0);
      expect(converted[1]).toEqual(40);
    });
  });

  //.toBe and .toEqual examples
  test(`toBe vs toEqual: Round 1`, () => {
    const myObj = {myNum: 4};
    const myObjTwo = {myNum: 4};

    // .toEqual only compares the value of the variable itself - hence a pass
    expect(myObj).toEqual(myObjTwo);
  });
  
  test(`toBe vs toEqual: Round 2`, () => {
    const myObj = {myNum: 4};
    const myObjTwo = {myNum: 4};
    // .toBe compares everything down to the bytes of memory used - hence a failure
    expect(myObj).toBe(myObjTwo);
  
  });
  
  test(`toBe vs toEqual: Round 2`, () => {
    const myObj = {myNum: 4};
    // Hence, as 'myObjThree' is equal to 'myObj' in all aspects, the .toBe below is a pass
    const myObjThree = myObj;
    expect(myObj).toBe(myObjThree);
  });

  // This is important to remember as Objects create a reference to where the information is stored.
  // This is why you can't use .toBe unless the both variables are each other at its core, 
  // not just because they were created with the same keys and properties.
  // In layman's term, is similar (but not the same) to how '==' is different from '==='. 