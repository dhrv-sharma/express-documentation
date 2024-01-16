// object created 
// we can have methods ,varaibles , arrays as an proprty of an object
var student = {
    "name": "Dhruv sharma",
    "reg": "21BCE0703",
    "brach": "Cse Core",
    "skills": ["Dart", ["Flutter", "Java"]],
    16: "player selected"
};

// access data
var skills = student.skills;
console.log(JSON.stringify(skills));

// access data through json methods
var name = student["name"];
console.log(name);

// changing property
student[16] = "player not selected"
console.log(student[16]);

// adding property
student.gender = "male";
console.log(student['gender']);

// to check property
function checkProp(checkProp) {

    // property checking
    if (student.hasOwnProperty(checkProp)) {
        console.log(student[checkProp]);

    } else {
        console.log("such property dont exhist");
    }
};

// call out function
checkProp("name");
checkProp("college");



//   this variable contains the group of the objects created by us 
//  for object creation we use { data is in map : value  }
var myMusic = [
    {
        "artist": "Billy joel",
        "title": "Piano Man",
        "realease year": 2023,
        "format": [
            "CD",
            "pod",
            "LP"

        ]
    },
    {
        "artist": "Last of us",
        "title": "Guestreiveillo",
        "realease year": 2023,
        "format": [
            "CD",
            "pod",
            "LP"
        ]

    }
]


console.log(myMusic[0]["artist"]);
console.log(myMusic[1]["format"][2]);


const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

function updateRecords(id, prop, value) {



    if (value == "") {
        delete recordCollection[id][prop];

    } else if (prop == "tracks") {
        // if recordCollection[id][prop] is empty then var get []

        recordCollection[id]["tracks"] = recordCollection[id][prop] || [];
        recordCollection[id][prop].push(value);

    } else {
        recordCollection[id][prop] = value;
    }


    return recordCollection[id][prop];

};

updateRecords(5439, "tracks", "LIFEO");
console.log(JSON.stringify(updateRecords(5439, "tracks", "ABBA")));







