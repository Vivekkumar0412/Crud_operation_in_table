let students = [
  {
    name: "Vivek Kumar",
    maths: 99,
    computer: 97,
    english: 98,
    code: "Javascript",
  },
  { name: "Pranav gupta", maths: 70, computer: 89, english: 78, code: "C++" },
  {
    name: "Sarthak sharma",
    maths: 66,
    computer: 45,
    english: 90,
    code: "Java",
  },
  {
    name: "Shreyansh ranjan",
    maths: 89,
    computer: 89,
    english: 91,
    code: "Node js",
  },
];
let codeArr = [
  "C++",
  "C",
  "Javascript",
  "Node js",
  "React js",
  "Next js",
  "Three js",
];

// function that is responsible to edit the student and store in the arr
let EditStd = (naam) => {
  // let json = {};
  let name = students.find((elem) => {
    return elem.name == naam;
  });

  // let name = document.getElementById("name");
  let maths = document.getElementById("maths");
  let computer = document.getElementById("computer");
  let english = document.getElementById("english");
  let codeLanguage = document.getElementById("codeLanguage");

  // json.name = name.value;
  name.maths = maths.value;
  name.computer = computer.value;
  name.english = english.value;
  name.code = codeLanguage.value;
  showStudentsFunction(students);
};

// function that is responsible to edit the table data

let edit = (data) => {
  console.log(data);
  let j = students.find((elem) => {
    return elem.name == data;
  });
  let jIndex = students.findIndex((elem) => {
    return elem.name == j.name;
  });

  console.log(jIndex);
  //   students[jIndex].name =
  console.log(j);
  let str = `Name : <input type = "text" id = "name" placeholder= "Enter the name " value = "${j.name}"> </br> Maths : <input type = "text" value = "${j.maths}" id = "maths" placeholder= "Enter the Maths marks "> </br> Computers : <input type = "text" value = "${j.computer}" id = "computer" placeholder= "Enter the computer marks "> </br> English : <input type = "text" value = "${j.english}" id = "english" placeholder= "Enter the English marks "> <button onClick = "EditStd('${j.name}')">SAVE EDITED DETAILS</button>`;
  let choices = getChoiceFuntion(codeArr);

  let dataDiv = document.getElementById("dataDiv");
  dataDiv.innerHTML = `<h2>${str}</h2>  ${choices}`;
  //   addStd();
};
// function that sorts the data according to button click
let sortData = (num) => {
  if (num == 0) {
    students.sort((a, b) => {
      return a.maths - b.maths;
    });
  } else if (num == 1) {
    students.sort((a, b) => {
      return a.computer - b.computer;
    });
  } else if (num == 2) {
    students.sort((a, b) => {
      return a.english - b.english;
    });
  }
  showStudentsFunction(students);
};
// remove button function defeinatio here

let removeFromTable = (namee) => {
  let realNameIndex = students.findIndex((elem) => {
    return elem.name == namee;
  });

  students.splice(realNameIndex, 1);
  showStudentsFunction(students);
};

// funtion to show the arrays data in the table form
let showStudentsFunction = (arr) => {
  let header = `<tr> <th>NAME</th> <th onClick = "sortData(0)">MATHS</th> <th onClick = "sortData(1)">COMPUTER</th> <th onClick = "sortData(2)">ENGLISH</th> <th>CODE</th> <th></th> <th></th></tr>`;
  let tData = arr.map((data) => {
    return `<tr> <td>${data.name}</td> <td>${data.maths}</td> <td>${data.computer}</td>  <td>${data.english}</td> <td>${data.code}</td> <td><button onClick = "removeFromTable('${data.name}')">REMOVE</button></td>  <td><button onClick = "edit('${data.name}')">EDIT</button></td></tr>`;
  });

  let finalTable = `<table>${header} ${tData.join("")}</table>`;
  let dataDiv = document.getElementById("dataDiv");
  dataDiv.innerHTML = finalTable;
};
// let showStudents = document.getElementById("showStudents");
// showStudents.addEventListener("click",showStudentsFunction(students));

let showStudents = document.getElementById("showStudents");
// console.log(showStudents);
showStudents.addEventListener("click", function () {
  showStudentsFunction(students);
});

// function that will generate me the optuons of coding choices

let getChoiceFuntion = (data) => {
  let options = data.map((elem) => {
    return `<option>${elem}</option>`;
  });
  let courseDD = `<select id = "codeLanguage"> ${options.join("")}</select>`;
  return courseDD;
};

// function that will add student to the table
let addStd = () => {
  let json = {};
  let name = document.getElementById("name");
  let maths = document.getElementById("maths");
  let computer = document.getElementById("computer");
  let english = document.getElementById("english");
  let codeLanguage = document.getElementById("codeLanguage");

  json.name = name.value;
  json.maths = maths.value;
  json.computer = computer.value;
  json.english = english.value;
  json.code = codeLanguage.value;

  if (json.name == "") {
    alert("PLEASE ENTER THE NAME");
  } else if (json.maths == "") {
    alert("PLEASE ENTER THE MATHS MARKS");
  } else if (json.computer == "") {
    alert("PLEASE ENTER THE COMPUTER MARKS");
  } else if (json.english == "") {
    alert("ENTER THE ENGLISH MARKS");
  } else if (json.code == "") {
    alert("PLEASE SELECT THE OPTIONS");
  } else {
    students.push(json);
    showStudentsFunction(students);
  }
};

// function that will add new student

let addNewStundentFunction = () => {
  let str = `Name : <input type = "text" id = "name" placeholder= "Enter the name "> </br> Maths : <input type = "text" id = "maths" placeholder= "Enter the Maths marks "> </br> Computers : <input type = "text" id = "computer" placeholder= "Enter the computer marks "> </br> English : <input type = "text" id = "english" placeholder= "Enter the English marks "> <button onClick = "addStd()">ADD STUDENT</button>`;
  let choices = getChoiceFuntion(codeArr);

  let dataDiv = document.getElementById("dataDiv");
  dataDiv.innerHTML = `<h2>${str}</h2>  ${choices}`;
};

// button that will add new student
let addStudent = document.getElementById("addStudent");
addStudent.addEventListener("click", () => {
  addNewStundentFunction();
});
