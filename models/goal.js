const goals = [
    {id: 125223, goal: 'Graduate College', done: true},
    {id: 127904, goal: 'Finish Flight Training', done: false},
    {id: 139608, goal: 'Finish SEI Bootcamp', done: false}
  ];
  
  module.exports = {
    getAll
  };
  
  function getAll() {
    return goals;
  }