var db;
// create datesDatabase in index db
const request = indexedDB.open("datesDatabase", 1);

request.onupgradeneeded = function(event) {
  db = event.target.result;
  db.createObjectStore("dates", { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;
};

request.onerror = function(event) {
  console.log("Erreur on open dataBase", event);
};

// listen to message from main thread
self.addEventListener('message', function(event){
    if (event.data.action === 'delete') {
        deleteDate(event);
        getAllData(event);
    }else if (event.data.action === 'get') {
      getAllData(event);
    } else if(event.data.action === 'add') {
      insertData(event);
      getAllData(event);
    }
  });

// get all dates from index db
  function getAllData(event) {
    const transaction = db.transaction(["dates"], "readonly");
      const store = transaction.objectStore("dates");
      const getAllDaterequest = store.getAll();
      const getAllKeysRequest = store.getAllKeys();


      getAllDaterequest.onsuccess = function() {
        var dates = getAllDaterequest.result;
        getAllKeysRequest.onsuccess = function() {
          var keys = getAllKeysRequest.result;
          var dateWithKeys = dates.map((date, index) => {
            return {
              date: date,
              key: keys[index]
            };
          });
          event.source.postMessage(dateWithKeys);
      
        };
        
      };
  }

  // insert date in index db
  function insertData(event) {
    const date = event.data.date;
      const transaction = db.transaction(["dates"], "readwrite");
      const store = transaction.objectStore("dates");
      store.add(date);
  }

  // delete date from index db
  function deleteDate(event) {
    const key = event.data.key;
    const transaction = db.transaction(["dates"], "readwrite");
    const store = transaction.objectStore("dates");
    const request = store.delete(key);

    request.onerror = function() {
      console.log("Error deleting date", event);
    };

    request.onsuccess = function() {

    };

  }