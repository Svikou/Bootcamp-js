// On crée un array pour stocker les taches

const todoList = [];


//Créons une var pour afficher notre html then on vas la mettre dans une function to re use it

    function renderTodoList() {
    let todolistHTML = '';

    // On vas loop through notre array. i = index

    for (let i = 0; i < todoList.length; i++) {

      // recurperons les string pour chaque index en créant une var 

      const todo = todoList[i];

      // 1-Then pour chaque todo on vas créer un code html, then le stocker dans la var todolisthtml
      //2-Ajoutons un button sup inside the p

      const html = `  
      <p>
      ${todo} 
      <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
      ">Supprimer</button>
      </p>
      `;

      // Then on vas tout combine tout le html

      todolistHTML += html;

    }
    console.log(todolistHTML);

    //Recuperons la div dans notre html avec 

    document.querySelector('.js-todo-list') 
      .innerHTML = todolistHTML;
    }
// Prendre l'input pour le mettre dans le js 

function addTodo() {
  const inputElement = document.querySelector('.js-name-input')

  //then pour recuperer le contenu o utilise inputElement.value, then on le met dans une variable to re-use it.

  const name = inputElement.value;

  // then on utilise push pour rajouter un element a la fin de l'array 

  todoList.push(name);

  console.log(todoList);

  // pour clean l'input after add on utillise

  inputElement.value = '';

  //Appelons notre fuction pour afficher les todos

  renderTodoList();
}