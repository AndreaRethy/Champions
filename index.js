// javascript
// Strech goals:
// Add From and To input fields
// Reverse the order to show the last endorsment on the top
// Add likes (but one user can only like once)
// Make a desktop version

import { initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://playground-for-scrimba-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsmentsInDB = ref(database, "endorsements")

const textareaEl = document.getElementById("textarea")
const publishButtonEl = document.getElementById("publish-btn")
const endorsementList = document.getElementById("endorsement-list")

publishButtonEl.addEventListener("click", function() {

    console.log("button clicked")

    let inputValue = textareaEl.val();

    push(endorsmentsInDB, inputValue)
})