var db;
const request = indexedDB.open("datesDatabase", 1);

request.onupgradeneeded = function(event) {
  db = event.target.result;
  db.createObjectStore("dates", { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;
};

request.onerror = function(event) {
  console.log("Erreur d'ouverture de la base de données", event);
};

self.addEventListener('message', function(event){
    if (event.data === 'getDates') {
      const transaction = db.transaction(["dates"], "readonly");
      const store = transaction.objectStore("dates");
      const request = store.getAll();
  
      request.onsuccess = function() {
        const dates = request.result;
        event.source.postMessage(dates);
      };
    } else {
      const date = event.data;
    
      // Sauvegarder la date dans IndexedDB
      const transaction = db.transaction(["dates"], "readwrite");
      const store = transaction.objectStore("dates");
      store.add(date);
    }
  });