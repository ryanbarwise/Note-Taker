var path = require("path");

module.exports = function(app) {
  // retrieve notes
  app.get("/api/notes", function(req, res) {
    res.json({});
  });

  // add note
  app.post("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // delete note
  app.delete("/api/notes/:id", function(req, res) {
    console.log('Note ID: ', req.params.id)
    res.json({})
});
};
