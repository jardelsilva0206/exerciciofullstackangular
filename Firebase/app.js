
  
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

  document.querySelector('body').style.background = "black"
  document.querySelector('body').style.color = "white"
  
  const db = getFirestore(app)
  const movie = collection(db,'movies')
  
  const movieList = document.querySelector('[data-js="movies-list"]')
  
  const querySnapshot = await getDocs(movie);
  
  querySnapshot.forEach((doc) => {    
      const {name, directedBy, studio, createdAt, } = doc.data()
  
      movieList.innerHTML += `
      <li>
          <h5>${name}</h5>
  
          <ul>
              <li>Dirigido por: ${directedBy}</li>
              <li>Produzio por: ${studio}</li>
              <li>${doc.id}</li>
              <li>Adicionado no banco de dados em: 
              ${createdAt.toDate().getFullYear()}</li>
              <img>
          </ul>
          <br>
          <button data-remove="${doc.id}" class="btn" >Remover</button>
      </li>
      `
      
  })
  
  const buttons = document.querySelectorAll(".btn")
  
  buttons.forEach((button)=>{
      button.addEventListener("click",()=>{
          console.log(button.dataset.remove)
          deleteDoc(doc(movie, button.dataset.remove))
      })
  })
  
  console.log(doc(movie,"8eNxACrhsLx1mW3oxFUa"))
  
  
  
  
  const addgame =  document.querySelector('[data-js="add-movie-form"]')
  
  addgame.addEventListener('submit',e =>{
      e.preventDefault();
  
      addDoc(movie,{
          name:e.target.name.value,
          directedBy: e.target.director.value,
          studio: e.target.studio.value,
          createdAt: serverTimestamp()
      }).then(doc=>{console.log("Documento adicionado com sucesso: ", doc.id)})
      
  })
