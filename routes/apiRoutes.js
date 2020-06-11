var path = require("path");
var data = require('../db/db.json');

module.exports = function(app) {
  // retrieve notes
  app.get("/api/notes", function(req, res) {
     res.json(data);
    
  });

  // add note
  app.post("/api/notes", function(req, res) {
    data.push(req.body);
    //res.json({data});
   //res.sendFile(path.join(__dirname, "../public/notes.html"));
   res.json(data);
  });

  // delete note
  app.delete("/api/notes/:id", function(req, res) {
    data.forEach((item, i) => {
      req.params.id = i + 1;
      console.log('Note ID: ', req.params.id)
      // console.log('Note ID: ', req.params.id)
     res.json(data)
});
})
}
