const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  email: {
    type: String,
    required: [true, 'please enter your email'],
    unique: true,
    lowercase : true,
    validate: [validator.isEmail, 'Please enter a valid email.']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: 8
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
        validator: function(val){
            return val == this.password;
        },
        message: 'Password and confirm password does not match'
    }
  }
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.confirmPassword = undefined;
    next();
});


userSchema.methods.comparePasswordInDB = async (pswd, pswdDB)=>{
  return await bcrypt.compare(pswd, pswdDB);
}

const user = mongoose.model('User', userSchema);

module.exports = user;
