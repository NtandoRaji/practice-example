

document.getElementById("addPersonbutton").addEventListener("click", (event) => {
    addPerson();
});


const updatePlaceHoldert = (id, content) => {
    const placeHolder = document.getElementById(id);
    if (placeHolder){
        placeHolder.innerText = content;
    }
}


const addPerson = () => {
    const personName = document.getElementById("personName").value;
    const personSurname = document.getElementById("personSurname").value;
    const personAge = document.getElementById("personAge").value;

    if (personName == "" || personSurname == "" || personAge == ""){
        alert("Please fill in all delatils!!!");
    }

    console.log(personName + " " + personSurname + " " + personAge);
}


const findPerson = async () => {

}