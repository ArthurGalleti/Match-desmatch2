import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {

  getFirestore,
  doc,
  setDoc

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// CONFIG FIREBASE

const firebaseConfig = {

  apiKey: "AIzaSyA_UWA9DlrnbVlSNQrTBkZANiviRO5-vnI",

  authDomain: "match-ou-desmatch.firebaseapp.com",

  projectId: "match-ou-desmatch",

  storageBucket: "match-ou-desmatch.firebasestorage.app",

  messagingSenderId: "256858416779",

  appId: "1:256858416779:web:19c260ba183886a7c2d68e"

};


// INICIALIZA

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


// CADASTRO

const registerSubmit = document.getElementById("registerSubmit");

registerSubmit.addEventListener("click", async () => {

  const nome = document.getElementById("registrarNome").value;

  const email = document.getElementById("registrarEmail").value;

  const password = document.getElementById("registrarSenha").value;

  try{

    const userCredential = await createUserWithEmailAndPassword(

      auth,
      email,
      password

    );

    const user = userCredential.user;


    // SALVA NO FIRESTORE

    await setDoc(doc(db, "users", user.uid), {

      nome: nome,

      email: email,

      uid: user.uid

    });

    window.location.href = "jogar.html";

    console.log(user);

  }catch(error){

    alert(error.message);

    console.log(error);

  }

});


// LOGIN

const loginSubmit = document.getElementById("loginSubmit");

loginSubmit.addEventListener("click", async () => {

  const email = document.getElementById("loginEmail").value;

  const password = document.getElementById("loginSenha").value;

  try{

    const userCredential = await signInWithEmailAndPassword(

      auth,
      email,
      password

    );

    window.location.href = "jogar.html";

    console.log(userCredential.user);

  }catch(error){

    alert(error.message);

    console.log(error);

  }

});