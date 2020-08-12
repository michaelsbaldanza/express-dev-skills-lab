const devSkills = [
    {id: 1, skill: 'HTML'},
    {id: 2, skill: 'CSS'},
    {id: 3, skill: 'JavaScript'},
    {id: 4, skill: 'NodeJS'},
    {id: 5, skill: 'Mongo'},
    {id: 6, skill: 'Mongoose'},
];

function getAll() {
    return devSkills;
};

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    devSkills.push(skill);
};  

module.exports = {
    getAll,
    create
};