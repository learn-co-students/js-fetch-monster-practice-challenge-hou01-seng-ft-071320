document.addEventListener("DOMContentLoaded", () =>{
    init();
})

const init = () =>{
    fetchMonsters();
    monsterCreate();
}

const fetchMonsters = () => {
    fetch('http://localhost:3000/monsters')
    .then(resp => resp.json())
    .then(monsters => loadMonsters(monsters))
}

const loadMonsters = (monsters) => {
    const monsterDiv = document.querySelector('#monster-container')
    
    monsters.forEach(monster => {
        
        const monsterName = document.createElement('h2')
        const monsterAge = document.createElement('h4')
        const monsterDescription = document.createElement('p')

        monsterName.innerText = monster.name
        monsterAge.innerText = monster.age
        monsterDescription.innerText = monster.description 

        monsterDiv.append(monsterName, monsterAge, monsterDescription)
    });
}

const monsterCreate = () => {
    const createMonster = document.querySelector('#create-monster')
    const monsterForm = document.createElement('form')
    
    const monsterNameInput = document.createElement('input')
    monsterNameInput.placeholder = 'Name'
    monsterNameInput.name = 'name'
    
    const monsterAgeInput = document.createElement('input')
    monsterAgeInput.placeholder = 'Age'
    monsterAgeInput.name = 'age'
    
    const monsterDescriptionInput = document.createElement('input')
    monsterDescriptionInput.placeholder = 'Description'
    monsterDescriptionInput.name = 'description'

    const monsterSubmitBtn = document.createElement('input')
    monsterSubmitBtn.type = 'submit'
    
    monsterForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        console.log(monsterForm.name.value)
        fetch('http://localhost:3000/monsters',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name: monsterForm.name.value,
                age: monsterForm.age.value,
                description: monsterForm.description.value
            })
        }).then(resp => resp.json())
        .then(monster => monsterAppend(monster))
    })

    monsterForm.append(monsterNameInput, monsterAgeInput, monsterDescriptionInput, monsterSubmitBtn)
    createMonster.append(monsterForm)
}

const monsterAppend = (monster) => {
        const monsterDiv = document.querySelector('#monster-container')
        const monsterName = document.createElement('h2')
        const monsterAge = document.createElement('h4')
        const monsterDescription = document.createElement('p')

        monsterName.innerText = monster.name
        monsterAge.innerText = monster.age
        monsterDescription.innerText = monster.description 

        monsterDiv.append(monsterName, monsterAge, monsterDescription)
}
