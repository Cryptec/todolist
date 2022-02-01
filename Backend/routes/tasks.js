const router = require('express').Router()

require('dotenv').config()


// Routes
router.get('/ping', function (req, res) {
    return res.send('pong');
});

router.post('/settask', function(req,res){
  var data = {
    task: req.body.task,
    id: req.body.id
}
  var params = [data.task, data.id]
  db.serialize(()=>{
      db.run('INSERT INTO Tasks (task, id) VALUES (?, ?)', params, function(err){
      if(err){
        res.send("Error encountered while updating");
        return res.status(400).json({ error: true });
      }
      return res.send({success: true});
    });
  });
});

router.post('/settheme', function (req, res) {
  var data = {
    theme: req.body.theme,
    id: req.body.id
  }
  var params = [data.theme, data.id]
  db.serialize(() => {
    db.run('UPDATE Settings SET theme = ? WHERE id = ?', params, function (err) {
      if (err) {
        res.send("Error encountered while updating");
        return res.status(400).json({ error: true });
      }
      return res.send({ success: true });
    });
  });
});

module.exports = router;