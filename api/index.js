const express = require("express");
const Joi = require("Joi");
const app = express();
const PORT = 3000;

const persons = [
    {   
        id: 1,
        name: "Khalifa",
        surname: "Raji",
        age: 20
    },

    {
        id:2,
        name: "Tania",
        surname: "Bantam",
        age: 21
    }
];

let GlobalPersonCount = persons.length;

app.use(express.json());
app.listen(PORT, () => {
    console.log("[+] Listening on port: ", PORT);
});

app.post("/persons", (request, response) =>{
    const addingPersonScheme = Joi.object({
        name: Joi.string().required(),
        surname: Joi.string().required(),
        age: Joi.number().required()
    });

    const {error, value} = addingPersonScheme.validate(request.body);
    if (error) {
        response.status(400).send(error.details[0].message);
        return;
    }

    const person = {
        id: GlobalPersonCount + 1,
        name: request.body.name,
        surname: request.body.surname,
        age: parseInt(request.body.age)
    }

    persons.push(person);
    GlobalPersonCount++;
    request.status(200).send(car);
});

app.get("/persons/:name", (request, response) => {
    const { name } = request.params;

    const person = persons.find(person => person.name == name);
    if (!person) {
        response.status(404).send("The person with the given name: " + name + " doesn't exist");
    }

    response.status(200).send(person);
});