
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name:{
		type:String,
		
	},
	email:
	{
		type: String, min: [4, 'Too short, min is 4 characters'], max: [32, 'Too long, max is 32 characters'],
		lowercase: true,
	},
	password:
	{
		type: String, min: [4, 'Too short, min is 4 characters'], max: [32, 'Too long, max is 32 characters'],
	},
	phoneNo:
	{
		type:String,
		unique:true
	},
	image:{
		type:String,
		required:true
	  }
}, {
	timestamps: true,
	versionKey:false
}
);

const user = mongoose.model('User', userSchema)
export default user;