//NOUVEAU TABLEAU
let listPersonne = [];

//qui recevra l'entrée de l'utilisateur et la stockera dans la variable words.
function addUserInfo(){
    let userAdd = document.getElementById('userInput').value;
    //vérifiez si le champ de saisie est vide et ne faites rien.
    if(userAdd!=''){
    listPersonne.push(userAdd);
    showUserInfo();
    }
}

// crée une liste des nom et le rajoute dans la div display pour voir dans le navigateur
function showUserInfo(){
    let showInfo='';
    let counter = 0;
	/*for (var i = 0;i<=12;i++){
		console.log(words[i]);}*/
    listPersonne.forEach(word => 
        showInfo += `
        <li class="list-group-item m-1">
            <p class="display-4">${word}<span class="float-right"><button value="${counter++}" onClick="removeName(this)"  class="btn btn-danger">X</button></span></p>
        </li>
        `
        );
	
        document.getElementById("display").innerHTML=showInfo;
        document.getElementById('userInput').value = null;

		return listPersonne;
		
}


// efface les nom  de la liste
function removeName(btnValue){
	listPersonne.splice(parseInt(btnValue.value),1);
	showUserInfo();
}


/* CREER DES GROUPES*/

//recupere les valeur de mon tableau et la valeur du nombre de groupe a créer
function go() {
	var names = listPersonne;
	var number = document.getElementById("number").value;
	
	var name_list = names;
	var group = [];
	
	for (var i = 0; i < number; i++) {
	  group.push([]);
	
	}
	
	console.log(name_list);
	
	// prend les nom de la liste et les met aleatoirement dans des groupe
	var size = name_list.length;
	var groupID = 0;
	for(var i= 0; i < size; i++) {
	  var rand = Math.floor(Math.random() * name_list.length);
	  group[groupID].push(name_list[rand]);
	  name_list.splice(rand,1);
	  
	  groupID++;
	  /*permet de dispacher les nom dans les occurance*/
	  if(groupID >= number) {
		groupID = 0;
	  }
	}
	
	
	// affiche dans la div result les groupe 
	var htmlresult = "";
	
	for(var i = 0; i < group.length; i++) {
	  htmlresult += "<p> <STRONG> GROUPE " + (i+1) + "</strong></p><ol>";
	  for(var j = 0; j < group[i].length; j++) {
		htmlresult += `<li class="list-group-item m-1">${group[i][j]}</li>`;
	  }
	  htmlresult += "</ol>";
	}
	
	document.getElementById("result").innerHTML = htmlresult;


	/*let a = 0;
	let b = 0
	for(var i = 0; i <= 2;i++){
	 localStorage.setItem(b,JSON.stringify(group));
	 b++;
	 console.log(localStorage);
	}*/

	/*for (var i = 0;0<=a;i++){
         "userInput" += localStorage.setItem("userInput ${a++}" ,JSON.stringify(group));
		console.log(a);
	}*/

	/*localStorage.setItem("userInput",JSON.stringify(group));*/

	/*var compteur = 0;
	let groupStorage = [];
	

	for (var n = 0;compteur<=10;compteur++) {
		groupStorage += localStorage.setItem(`"groupInput"${n+1}`,JSON.stringify(group))++;
		groupStorage++;
		console.log(groupStorage);
	}*/
		
	/*"userInput" += localStorage.setItem([JSON.stringify("userInput")]);*/

	return group;
  }

  clear.onclick = () =>{
	  localStorage.clear();
	  console.log(localStorage);
  }

/* LOCAL STORAGE */
 
/*groupInput.onclick = () => {
	localStorage.setItem("groupInput", );
	console.log(localStorage);
}*/
