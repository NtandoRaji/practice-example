const nameTxt = document.getElementById("personName");
const surnameTxt = document.getElementById("personSurname");
const ageTxt = document.getElementById("personAge");
const addPersonBtn = document.getElementById("addPersonbutton");
const personDisplayTxt = document.getElementById("personDisplayTxt");
const displayBtn = document.getElementById("displayPersonButton");
const nameDisplay = document.getElementById("nameDisplay");
const surnameDisplay = document.getElementById("surnameDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const baseUrl = "http://localhost:3000";

addPersonBtn.addEventListener("click", (e) =>{
     addPerson();
 } );

displayBtn.addEventListener("click", (e) =>{
    getPerson();
}
    );

function getPerson(){
    const name = personDisplayTxt.value;
    if (name == ""){
        alert("Please enter a name");
        return;
    }
    const linkUrl = baseUrl + "/persons/" + name;
    fetch(linkUrl)
    .then(r => r.json())
    .then(rDetails => display(rDetails))
    .catch(error => console.log(error));
}

function display(rDetails){
    nameDisplay.innerText = "Name: " + rDetails.name;
    surnameDisplay.innerText = "Surname: " + rDetails.surname;
    ageDisplay.innerText = "Age: " + rDetails.age;
}

function addPerson(){
    const name = nameTxt.value;
    const surname = surnameTxt.value;
    const age = String(ageTxt.value);
    if(name === "" || surname === "" || age === ""){
        alert("Please fill in form correctly");
      return;
    }
    else{
        const linkUrl = baseUrl + "/persons";

        fetch(linkUrl,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"name": name, "surname": surname, "age": age}),
        })
        .then(r => r.json())
        .then(rDetails => notify(rDetails))
        .catch(error => console.log(error));
    }
}

function notify(rDetails){
    alert("This person has been added");
    return;
}
