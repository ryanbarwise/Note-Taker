var path = require("path");
var data = require('../db/db.json');
var fs = require('fs');


module.exports = function(app) {
  // retrieve notes
  app.get("/api/notes", function(req, res) {
     res.json(data)
  });

  // add note
  app.post("/api/notes", function(req, res) {
    var id = data.length + 1;
    var newNote = req.body;
    newNote.id = id;
    data.push(req.body);
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    console.log('sending new notes')
    res.json(data); 
  });

  //app.delete("/api/notes/:title")

  // delete note
  app.delete("/api/notes/:id", function(req, res) {
  data = data.filter(item => {
      // return every note in the array
      // that does NOT have the same id
      return item.id !== parseInt(req.params.id) 
    });
    
    console.log(data.length)
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function (err) {
      if (err) throw err;
      console.log('Deleted!');
    });
    res.json(data);

})
}
