const inputText = document.getElementById('input_tache')
const button = document.getElementById('button_ajout')
const toDoList = document.getElementById('todolist')

function ajout(){
    if (inputText.value != ""){
        var paragraph = document.createElement('p')
    }
    else{
        alert("tu n'as pas ajouté de tâche !!")
    }
    paragraph.innerHTML = inputText.value
    paragraph.classList.add('style_para');
    toDoList.appendChild(paragraph)

    paragraph.addEventListener('click', () => {
        paragraph.classList.add('click_para')
    })
    paragraph.addEventListener('dblclick', () => {
        toDoList.removeChild(paragraph)
    })
}