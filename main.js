import "./style.css";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaUxeR9NwWTefheCtmGbd17bhq_i45f_g",
  authDomain: "firstpride-contest.firebaseapp.com",
  projectId: "firstpride-contest",
  storageBucket: "firstpride-contest.appspot.com",
  messagingSenderId: "185367927165",
  appId: "1:185367927165:web:0570085844780606009414",
  measurementId: "G-Q5Q2NQ37V2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const email = document.getElementById("email");
const id = document.getElementById("playerID");
const name = document.getElementById("name");
const phone_number = document.getElementById("phoneNumber");
const receipt = document.getElementById("receipt");
const submitBtn = document.getElementById("submitBtn");

async function addData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: email.value,
      id: id.value,
      name: name.value,
      phone_number: phone_number.value,
      receipt: receipt.value,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addData();
});

