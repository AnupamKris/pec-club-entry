import {
  setDoc,
  doc,
  getFirestore,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
export default defineEventHandler(async (event) => {
  const app = initializeApp({
    apiKey: "AIzaSyAFwipPKdJgWwgsAb9mRWPs0UClw70zuII",
    authDomain: "prathyusha-clubs.firebaseapp.com",
    projectId: "prathyusha-clubs",
    storageBucket: "prathyusha-clubs.appspot.com",
    messagingSenderId: "270917876326",
    appId: "1:270917876326:web:c7ae2a6e8b41414b698ba7",
  });

  const db = getFirestore(app);

  const { name, regno, dept, section, year, email, phone, club } =
    await readBody(event);

  const user = {
    name,
    dept,
    section,
    year,
    email,
    phone,
    club1: "",
    club2: "",
  };

  // check if user exists
  const userRef = doc(db, "users", regno);
  const userDoc = await getDoc(userRef);

  if (userDoc.exists()) {
  } else {
    await setDoc(doc(db, "users", regno), user);
  }

  // check if user is already in club, member: clubs>club>members
  const clubRef = doc(db, "clubs", club);
  const clubDoc = await getDoc(clubRef);

  let members = clubDoc.data().members;
  // if user in members return error or if members >= 100 return error else add user to members
  if (members.includes(regno)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "You are already in the club" }),
    };
  } else if (members.length >= 2) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Club is full" }),
    };
  }

  console.log(userDoc);

  // a user can join max 2 clubs
  if (userDoc.data().club1 !== "" && userDoc.data().club2 !== "") {
    return {
      statusCode: 400,

      body: JSON.stringify({ message: "You've already registered in 2 clubs" }),
    };
  } else if (userDoc.data().club1 !== "" && userDoc.data().club2 === "") {
    // add club to user
    updateDoc(userRef, {
      club2: club,
    });
    // add regno to member in firestore
    updateDoc(clubRef, {
      members: arrayUnion(regno),
    });
  } else {
    // add club to user
    updateDoc(userRef, {
      club1: club,
    });
    // add regno to member in firestore
    updateDoc(clubRef, {
      members: arrayUnion(regno),
    });
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "User registered successfully" }),
  };
});
