// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
      "name":"Capt. Malcolm Reynolds",
      "photo":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxODM3ODY2Nl5BMl5BanBnXkFtZTgwMzAyMjU2NzE@._V1_UY317_CR20,0,214,317_AL_.jpg",
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
      "name":"River Tam",
      "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Summer_Glau_2016.jpg/220px-Summer_Glau_2016.jpg",
      "scores":[
          3,
          1,
          5,
          3,
          1,
          2,
          5,
          1,
          2,
          4]
    },
    {
      "name":"Inara",
      "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Morena_Baccarin_by_Gage_Skidmore_2.jpg/1200px-Morena_Baccarin_by_Gage_Skidmore_2.jpg",
      "scores":[
          1,
          4,
          5,
          3,
          5,
          5,
          4,
          5,
          1,
          1]
    },
    {
      "name":"Kaylee Frye",
      "photo":"https://images-na.ssl-images-amazon.com/images/M/MV5BZDM1NjYwZWYtOTA2Yi00Zjk0LThlZTYtZDViYWI2NDQ1OTA5XkEyXkFqcGdeQXVyNDYwNjM2OQ@@._V1_UY317_CR131,0,214,317_AL_.jpg",
      "scores":[
          1,
          3,
          4,
          5,
          1,
          2,
          3,
          4,
          5,
          1]
    },
    {
      "name":"Hoban Washburne",
      "photo":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0MzEwNDUxNV5BMl5BanBnXkFtZTcwNTE1MDAzOQ@@._V1_UY317_CR2,0,214,317_AL_.jpg",
      "scores":[
          5,
          4,
          3,
          2,
          1,
          2,
          3,
          4,
          4,
          5]
    },
    {
      "name":"Zoe Washburne",
      "photo":"https://vignette.wikia.nocookie.net/revengeabc/images/e/e9/Gina_Profile.png/revision/latest?cb=20150305224310",
      "scores":[
          1,
          1,
          1,
          5,
          5,
          5,
          5,
          5,
          4,
          4]
    },
    {
      "name":"Jayne Cobb",
      "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Adam_Baldwin_by_Gage_Skidmore_3.jpg/1200px-Adam_Baldwin_by_Gage_Skidmore_3.jpg",
      "scores":[
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4,
          4]
    },
    {
      "name":"Simon Tam",
      "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sean_Maher_by_Gage_Skidmore_3.jpg/1200px-Sean_Maher_by_Gage_Skidmore_3.jpg",
      "scores":[
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3,
          3]
    },
    {
      "name":"Shepherd Book",
      "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Ron_Glass_at_2005_Serenity_Premiere.jpg/220px-Ron_Glass_at_2005_Serenity_Premiere.jpg",
      "scores":[
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2]
    },
    {
      "name":"Saffron",
      "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Christina_Hendricks_at_PaleyFest_2014.jpg/220px-Christina_Hendricks_at_PaleyFest_2014.jpg",
      "scores":[
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          1,
          2,
          1]
    },
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  