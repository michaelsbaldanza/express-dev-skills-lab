const skills = [
    {id: 1, skill: 'HTML'},
    {id: 2, skill: 'CSS'},
    {id: 3, skill: 'JavaScript'},
    {id: 4, skill: 'NodeJS'},
    {id: 5, skill: 'Mongo'},
    {id: 6, skill: 'Mongoose'},
];

function getAll() {
    return skills;
};

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    devSkills.push(skill);
};  

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
};

module.exports = {
    getAll: getAll,
    create: create,
    deleteOne: deleteOne
};