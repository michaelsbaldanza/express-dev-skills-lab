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

module.exports = {
    index: index,
    new: newSkill,
};