// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
      "name":"Capt. Malcolm Reynolds",
      "photo":"https://upload.wikimedia.org/wikipedia/en/1/13/MalReynoldsFirefly.JPG",
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
          5],
          "motto": "I aim to misbehave"
    },
    {
      "name":"River Tam",
      "photo":"http://i111.photobucket.com/albums/n130/JJ9437/River%20Tam/Objects%20in%20Space/r_jt_pink_top.jpg",
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
          4],
          "motto": "Also? I can kill you with my brain"
    },
    {
      "name":"Inara",
      "photo":"https://vignette.wikia.nocookie.net/firefly/images/c/c3/Inara02.jpg/revision/latest?cb=20080301063009",
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
          1],
          "motto": "No one likes the idea of hearing what you're thinking."
    },
    {
      "name":"Kaylee Frye",
      "photo":"https://vignette.wikia.nocookie.net/firefly/images/5/55/Kaylee.jpg/revision/latest?cb=20100426173058",
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
          1],
          "motto": "Yes sir, Captain Tightpants"
    },
    {
      "name":"Hoban Washburne",
      "photo":"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-firefly-alan-tudyk.jpg",
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
          5],
          "motto": "I'm a leaf on the wind."
    },
    {
      "name":"Zoe Washburne",
      "photo":"https://static.comicvine.com/uploads/original/2/26925/1252935-serenity11a.jpg",
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
          4],
          "motto": "First rule of battle, little one ... don't ever let them know where you are."
    },
    {
      "name":"Jayne Cobb",
      "photo":"https://vignette.wikia.nocookie.net/firefly/images/7/76/Ff_jayne.jpg/revision/latest?cb=20060514192910",
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
          4],
          "motto": "Let's go be bad guys"
    },
    {
      "name":"Simon Tam",
      "photo":"https://vignette.wikia.nocookie.net/firefly/images/6/63/Simon2.jpg/revision/latest?cb=20080308044029",
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
          3],
          "motto": "Are you always this sentimental?"
    },
    {
      "name":"Shepherd Book",
      "photo":"http://images.fanpop.com/images/image_uploads/Shepherd-Book-firefly-62634_247_300.jpg",
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
          2],
          "motto": " I am a Shepherd. Folks like a man of God."
    },
    {
      "name":"Saffron",
      "photo":"https://ewedit.files.wordpress.com/2015/01/firefly-christina-hendricks_320.jpg?w=320",
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
          1],
        "motto": "Please, nobody died last time."
    },
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  