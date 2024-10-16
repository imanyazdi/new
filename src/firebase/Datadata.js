import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig1 = {
  apiKey: "AIzaSyBBzNeM5WQBX5UBK8o1f7ZkqNwsvj79ydE",
  authDomain: "food-4db49.firebaseapp.com",
  projectId: "food-4db49",
  storageBucket: "food-4db49.appspot.com",
  messagingSenderId: "1008332780572",
  appId: "1:1008332780572:web:7bfe8da346ec042b421bd9"
};
let app1;
if (!getApps().length) {
  app1 = initializeApp(firebaseConfig1)
}else{
  app1=getApps()[0]
}
const db1 = getFirestore(app1)
/////////////////////////////////////////////////////////////////////

const firebaseConfig2 = {
  apiKey: "AIzaSyBjw4CHbY0zAMOsFKbdHmxqL3V_kVeKz28",
  authDomain: "img-site-8cd3c.firebaseapp.com",
  projectId: "img-site-8cd3c",
  storageBucket: "img-site-8cd3c.appspot.com",
  messagingSenderId: "980062523305",
  appId: "1:980062523305:web:2d3a0489d358396ddbfeb8"
};

const app2 = initializeApp(firebaseConfig2,"app2");
const storage = getStorage(app2);
const db2 = getFirestore(app2);
export { db1, db2, storage }
