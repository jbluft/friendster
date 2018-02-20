// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
      "name":"Wadeprime",
      "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Dwyane_Wade_e1.jpg/1200px-Dwyane_Wade_e1.jpg",
      "scores":[
          5,
          1,
          3,
          4,
          2,
          1,
          2,
          3,
          4,
          5]
    },
    {
      "name":"Zo",
      "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Dwyane_Wade_e1.jpg/1200px-Dwyane_Wade_e1.jpg",
      "scores":[
          1,
          2,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  