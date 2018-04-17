import { request } from "https";

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
if (!window.indexedDB){
    alert();
}
let request = window.indexedDB.open("MoviesDB", 1),
db,
tx,
store,
index;

request.onupgradeneeded = function (e) {
    let db = request.result,
    store = db.createObjectStore("QuestionsStore", {
     keyPath: ""}),
     index = store.createIndex("questionText", "questionText", {unique: false});

    
};

request.onerror = function(e) { 
    console.log("There was an error: "+e.target.errorCode);
};

request.onsuccess = function (e) {
    db = request.result;
    tx = db.transaction("QuestionStore", "readwrite");
    store = tx.objectStore("QuestionStore");
    index = store.index("questionText");

    db.onerror = function (e) {
        console.log("ERROR"+ e.target.errorCode);
        
    }
    let q1 = store.get(1);
    let qs = index.get("The Movie.");
    q1.onsuccess = function () {
        console.log(q1.request);
    };
    
    tx.oncomplete = function() {
        db.close();
    };
    
}