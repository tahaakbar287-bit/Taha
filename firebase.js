// firebase.js - Main website ke liye
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCI7uvdzQPGbmgdf5gz1UEzrELfMbuGkKM",
  authDomain: "taha-portfolio-82701.firebaseapp.com",
  databaseURL: "https://taha-portfolio-82701-default-rtdb.firebaseio.com",
  projectId: "taha-portfolio-82701",
  storageBucket: "taha-portfolio-82701.firebasestorage.app",
  messagingSenderId: "41736884999",
  appId: "1:41736884999:web:8c543d482366d18ac9cbaf"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function loadData(callback){
  onValue(ref(db, 'portfolioData'), (snapshot)=>{
    callback(snapshot.val());
  });
}