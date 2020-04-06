export const fakeData = () => {
  const names = [
    "Liam",
    "Noah",
    "William",
    "James",
    "Oliver",
    "Benjamin",
    "Elijah",
    "Lucas",
    "Mason",
    "Logan",
    "Alexander",
    "Ethan",
    "Jacob",
    "Michael",
    "Daniel",
    "Henry",
    "Jackson",
    "Sebastian",
    "Aiden",
    "Matthew",
    "Samuel",
    "David",
    "Joseph",
    "Carter",
    "Owen",
    "Wyatt",
    "John",
    "Jack",
    "Luke",
    "Jayden",
    "Dylan",
    "Grayson",
    "Levi",
    "Isaac",
    "Gabriel",
    "Julian",
    "Mateo",
    "Anthony",
    "Jaxon",
    "Lincoln",
    "Joshua",
    "Christopher",
    "Andrew",
    "Theodore",
    "Caleb",
    "Ryan",
    "Asher",
    "Nathan",
    "Thomas",
    "Leo",
    "Isaiah",
    "Charles",
    "Josiah",
    "Hudson",
    "Christian",
    "Hunter",
    "Connor",
    "Eli",
    "Ezra",
    "Aaron",
    "Landon",
    "Adrian",
    "Jonathan",
    "Nolan",
    "Jeremiah",
    "Easton",
    "Elias",
    "Colton",
    "Cameron",
    "Carson",
    "Robert",
    "Angel",
    "Maverick",
    "Nicholas",
    "Dominic",
    "Jaxson",
    "Greyson",
    "Adam",
    "Ian",
    "Austin",
    "Santiago",
    "Jordan",
    "Cooper",
    "Brayden",
    "Roman",
    "Evan",
    "Ezekiel",
    "Xavier",
    "Jose",
    "Jace",
    "Jameson",
    "Leonardo",
    "Bryson",
    "Axel",
    "Everett",
    "Parker",
    "Kayden",
    "Miles",
    "Sawyer",
    "Jason",
    "Declan",
    "Weston",
    "Micah",
    "Ayden",
    "Wesley",
    "Luca",
    "Vincent",
    "Damian",
    "Zachary",
    "Silas",
    "Gavin",
    "Chase",
    "Kai",
    "Emmett",
    "Harrison",
    "Nathaniel",
    "Kingston",
    "Cole",
    "Tyler",
    "Bennett",
    "Bentley",
    "Ryker",
    "Tristan",
    "Brandon",
    "Kevin",
    "Luis",
    "George",
    "Ashton",
    "Rowan",
    "Braxton",
    "Ryder",
    "Gael",
    "Ivan",
    "Diego",
    "Maxwell",
    "Max",
    "Carlos",
    "Kaiden",
    "Juan",
    "Maddox",
    "Justin",
    "Waylon",
    "Calvin",
    "Giovanni",
    "Jonah",
    "Abel",
    "Jayce",
    "Jesus",
    "Amir",
    "King",
    "Beau",
    "Camden",
    "Alex",
    "Jasper",
    "Malachi",
    "Brody",
    "Jude",
    "Blake",
    "Emmanuel",
    "Eric",
    "Brooks",
    "Elliot",
    "Antonio",
    "Abraham",
    "Timothy",
    "Finn",
    "Rhett",
    "Elliott",
    "Edward",
    "August",
    "Xander",
    "Alan",
    "Dean",
    "Lorenzo",
    "Bryce",
    "Karter",
    "Victor",
    "Milo",
    "Miguel",
    "Hayden",
    "Graham",
    "Grant",
    "Zion",
    "Tucker",
    "Jesse",
    "Zayden",
    "Joel",
    "Richard",
    "Patrick",
    "Emiliano",
    "Avery",
    "Nicolas",
    "Brantley",
    "Dawson",
    "Myles",
    "Matteo",
    "River",
    "Steven",
    "Thiago",
    "Zane",
    "Matias",
    "Judah",
    "Messiah",
    "Jeremy",
    "Preston",
    "Oscar",
    "Kaleb",
    "Alejandro",
    "Marcus",
    "Mark",
    "Peter",
    "Maximus",
    "Barrett",
    "Jax",
    "Andres",
    "Holden",
    "Legend",
    "Charlie",
    "Knox",
    "Kaden",
    "Paxton",
    "Kyrie",
    "Kyle",
    "Griffin",
    "Josue",
    "Kenneth",
    "Beckett",
    "Enzo",
    "Adriel",
    "Arthur",
    "Felix",
    "Bryan",
    "Lukas",
    "Pau",
    "Brian",
    "Colt",
    "Caden",
    "Leon",
    "Archer",
    "Omar",
    "Israel",
    "Aidan",
    "Theo",
    "Javier",
    "Remington",
    "Jaden",
    "Bradley",
    "Emilio",
    "Rile",
    "Colin ",
  ];

  const surnames = [
    "Haak",
    "Haank",
    "Haars",
    "Haartman",
    "Haartmans",
    "Habink",
    "Hack",
    "Hackenbroeck",
    "Hackenbroick",
    "Hackenfort",
    "Haddick",
    "Haecke",
    "Haecken",
    "Haeffkens",
    "Haeffkes",
    "Haefkes",
    "Haege",
    "Haerteminck",
    "Haertman",
    "Haertmans",
    "Haevekes",
    "Haeverkamp",
    "Haeveste",
    "Hafkenscheidt",
    "Hafmam",
    "Jaackers",
    "Jaasink",
    "Jackman",
    "Jacob",
    "Jacobi",
    "Jacobs",
    "Jacobsen",
    "Jaesink",
    "Jaessinck",
    "Jager",
    "Jagerinck",
    "Jagering",
    "Jagerink ",
    "Jammat",
    "anien",
    "Janknecht ",
    "Janknechts",
    "Janni",
    "Jannij",
    "Jannink",
    "Jannisse",
    "Jans",
    "Jansdr.",
    "Jansen ",
    "Jansink",
  ];
  const individuals = [];
  for (let i = 0; i < 100; i++) {
    let firstName =
      names[Math.ceil(Math.random() * names.length) - 1];
    let surname =
      surnames[
        Math.ceil(Math.random() * surnames.length) - 1
      ];
    let meetingDate = new Date(
      2020,
      Math.ceil(Math.random() * 12),
      Math.ceil(Math.random() * 30),
      Math.ceil(Math.random() * 12),
      Math.ceil(Math.random() * 60)
    );
    let genderRandom = Math.random();
    let gender = genderRandom > 0.5 ? "male" : "female";

    individuals.push({
      id: i,
      name: firstName,
      surname: surname,
      meetingDate: meetingDate,
      gender: gender,
    });
  }
  return individuals;
};
