var User = require('../../models').User;

module.exports = {
  findActiveClimbers: function(req, res) {
    User.find({climb: true}, function(err, climbers) {
      if (err) console.error(err);
      var result = climbers.map(function(climber) {
        return {
          first: climber.name.first,
          last: climber.name.last,
          zipCode: climber.zipCode,
          gender: climber.gender,
          skillLevel: climber.skillLevel
        };
      });
      res.json(result);
    });
  }
};