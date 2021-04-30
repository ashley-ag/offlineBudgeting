const indexDB = window.indexedDB.open("budgetTracker", 1);
let db;

indexDB.onsuccess = (event) => {
  console.log(event.result);
};

indexDB.onupgradeneeded = ({ target }) => {
  db = target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

indexDB.onerror = ({ target }) => {
  console.log(error);
};

// save transaction to pending
function saveRecord(record) {
    // open a transaction on the pending object store in the budget db with readwrite access
    const transaction = db.transaction(["pending"], "readwrite");
    // access your pending object store
    const store = transaction.objectStore("pending");
    // add record to your store with add method.
    store.add(record);
  };


  // TO DO:
  // function that checks the pending object store 
  // call the pending object's .getAll method 
  // {this will return another object} = storedData
  // assign function to .onsucess property
  // // will check if the result.length of storedData
  // // length is greater than 0, call fetch to call: "/api/transaction/bulk"
  // // body = result (result is an array of pending objects / a property of storedData)
  // // if = 0 there is nothing in indexDB
  /////// using .getAll = let storedData = { result: [] };
  // if transactions were successfully posted, clear objectStore by using .clear() (or similar) to clear storage