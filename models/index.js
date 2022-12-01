const User = require('./User');
const Character = require('./Character');

Character.hasOne(User, {
    forieignKey: 'user_id',
});

Character.belongsTo(User, {
    foreignKey: "user_id",
});

User.hasMany(Character, {
    foreignKey: "user_id",
    OnDelete: "CASCADE",
})

module.exports = { User, Character };