import User from '../model/user.model.js'
import validation from '../validation/validation.js'
import { logger } from '../../logger/logger.js'


class Service {
    /**
     * @description: Adds data to the database
     * @param {object} userDetails
     * @method Create registration
    */
    addUser = async (userDetails,path) => {
        const validationResult = validation.ValidationRegister.validate(userDetails)
        if (validationResult.error) {
            console.log("220",validationResult.error);
            logger.error('Failed To Validated Input');
           const error = new Error('Validation Failed');
            error.status=422
            throw error
        }
        const newUser = new User();
        newUser.name=userDetails.name;
        newUser.email = userDetails.email;
        newUser.password = userDetails.password;    
        newUser.phoneNo = userDetails.phoneNo;
        newUser.image = path;
        try{
            return newUser.save()
        }
        catch (error) {
            console.log("222",error);
            const err = new Error('User is Already Exists');
            err.status=404
            throw err
        }
    }

    getUser = async () =>{
         return User.find()
    }

    getUserById = async (id)=>{
        const data = await User.findById(id);
        try {
            if(!data){
                return "there is no data found"
            }
            return data
        } catch (error) {
            console.log("error",error)
            logger.error(error)
            return error
        }
    }

    deleteUserById = async (id)=>{
        const data = await User.findByIdAndRemove(id)   
        console.log("data",data);       
        try {
            return data
        } catch (error) {
            logger.error(error);
            return error
        }
    }

    updateUserDetail =async (req) =>{
        let updetail = await User.findByIdAndUpdate(req.params.id,{ name: req.body.name, password: req.body.password,phoneNo:req.body.phoneNo,email:req.body.email,file:req.file.path }, { new: true })
        try {
            if(!updetail)
                return "User is not their in a list"
            console.log("update---",updetail)
            return updetail
        } catch (error) {
            logger.error(error)
            return error
        }
    }
}
export default new Service();