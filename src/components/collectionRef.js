import { db } from "../config/firebase"
import { collection } from "firebase/firestore";

export const collectionRef = {
    // questions: collection(db, "questions"),
    others: collection(db, "others"),
    ch1: collection(db, "ch1"),
    ch2: collection(db, "ch2"),
    ch3: collection(db, "ch3"),
    ch4: collection(db, "ch4"),
    ch5: collection(db, "ch5"),
    ch6: collection(db, "ch6"),
}