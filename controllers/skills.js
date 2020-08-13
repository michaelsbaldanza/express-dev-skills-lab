const Skill = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      time: req.time
    });
};

function newSkill(req, res) {
  res.render('skills/new');
};

function create(req, res) {
  console.log(req.body);
  req.body.done = false;
  Skill.create(req.body);
  res.redirect('/skills');
};

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/todos');
};

module.exports = {
    index: index,
    new: newSkill,
    create,
    delete: deleteSkill
};