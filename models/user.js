//Requires\\
var mongoose = require('mongoose');
//hash passwords\\
var bcrypt = require('bcrypt-nodejs');

//User Schema Attributes\\
var UserSchema = new mongoose.Schema({
    email: {type: String, unique: true, lowercase: true},
    password: String,
    profile:{
        name:{type: String, default: ''},
        picture: {type: String, default: ''}
    },
    address: String,
    history: [{
    date: Date,
    watched: {type: Number, default:0}
}]

});

//Hash password before saving to database\\
UserSchema.pre('save', function(next){
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10, function(err, salt){
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) retun next(err);
            user.password = hash;
            next();
        });

    });
});

//Compare password in the database and the one the user types in\\
UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

model.exports = mongoose.model('User', UserSchema);
