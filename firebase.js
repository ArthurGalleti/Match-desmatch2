import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "SUA_API_KEY",

  authDomain: "match-ou-desmatch.firebaseapp.com",

  projectId: "match-ou-desmatch",

  storageBucket: "match-ou-desmatch.firebasestorage.app",

  messagingSenderId: "256858416779",

  appId: "1:256858416779:web:19c260ba183886a7c2d68e"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };