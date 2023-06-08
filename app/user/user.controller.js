

/*************************************************************************
* Purpose : to recieve request from routes and forward it to service layer
*
* @file : user.controller.js
* @author : Jaswinder Singh<jaswinder.singh@quovantis.com>
* @version : 1.0
*
**************************************************************************/
import { logger } from '../../logger/logger.js';
import userservice from './user.service.js';


class UserController {
    /**
     * @description Registering new users
     * @method register is a service class method
     * @method validate validates inputs using Joi
     */
    addUser = async (req, res) => {
        try {
            console.log("")
            const userResult = await userservice.addUser(req.body,req.file.path)
            return res.json(userResult);
        } catch (error) {
            logger.error(error);
            return res.json({ success: false, error: error, message: error.message || 'Something went wrong. Please try again later.' });
        }
    }


    getUser = async (req,res) =>{
        try {
            const getUserList = await userservice.getUser()
            return res.json(getUserList)
        } catch (error) {
            logger.error(error)
            return res.json({msg :"some error ocurred"})
        }
    }

    
    getUserById = async (req,res) =>{
        try {
            const getUserList = await userservice.getUserById(req.params.id)
            return res.json(getUserList)
        } catch (error) {
            logger.error(error)
            return res.json({msg :"some error ocurred" , error:error})
        }
    }

    deleteUserbyId = async (req,res) =>{
        try {
            const deleteUser = await userservice.deleteUserById(req.params.id)
            return res.json(deleteUser)
        } catch (error) {
            logger.error(error)
            return res.json({msg :"some error ocurred" , error:error})
        }
    }

    UpdatedUserById = async (req,res) =>{
        console.log("222",req.body,req.file.path)
        try{
            const updateUser = await userservice.updateUserDetail(req)
            return res.json(updateUser)
        }
        catch (error){
            logger.error(error)
            return error
        }
    }
}
    export default new UserController;