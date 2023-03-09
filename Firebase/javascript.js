import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore,deleteField,updateDoc, collection, getDocs, addDoc, serverTimestamp, deleteDoc, doc} from  "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyBl4o8GHw1rkG5fHTf1CG8H56IjiQAIMfY",
  authDomain: "movie-list-6afe0.firebaseapp.com",
  projectId: "movie-list-6afe0",
  storageBucket: "movie-list-6afe0.appspot.com",
  messagingSenderId: "544920447814",
  appId: "1:544920447814:web:b5c916251db18985d89347",
  measurementId: "G-QDXLZH7DV9"
});


  //document.querySelector('body').style.background = "black"
  //document.querySelector('body').style.color = "white"

  const db = getFirestore(app)
  const comida = collection(db,'comida')

  const foodList = document.querySelector('[data-js="food-list"]')

  const querySnapshot = await getDocs(comida);

  querySnapshot.forEach((doc) => { 
    const {nome, Valor } = doc.data()
foodList.innerHTML += `
<li>
<h5>${nome} R$ ${Valor}</h5>
<br>
<button data-remove="${doc.id}" class="btn" >Remover</button>

</li>
`
  })
  
  const buttons = document.querySelectorAll(".btn")
  
  buttons.forEach((button)=>{
      button.addEventListener("click",()=>{
          console.log(button.dataset.remove)
          deleteDoc(doc(comida, button.dataset.remove))
          location.reload;
      })
  })

  const addgame =  document.querySelector('[data-js="add-food-form"]')

  addgame.addEventListener('submit',e =>{
    e.preventDefault();
    

    addDoc(comida,{
        nome:e.target.nome.value,
        Valor: e.target.Valor.value,
      
    }).then(doc=>{console.log("Documento adicionado com sucesso: ", doc.id)})
    location.reload;
    FormData.reload;
    
})