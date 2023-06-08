/**
 * @module       routes
 * @file         routes.js
 * @description  API Routing
 * @author       Jaswinder Singh
 */

import usercontroller from './user.controller.js'
import { upload } from '../middleware/Uploads.js'
export default app => {
    // api for registration
    app.post('/addUser',upload.single('image'),usercontroller.addUser)
        
    app.delete('/deleteUser/:id', usercontroller.deleteUserbyId);

    app.get('/listOfUser',usercontroller.getUser);

    app.get('/User/:id',usercontroller.getUserById);

    app.put('/updateUser/:id',upload.single('image'),usercontroller.UpdatedUserById)
}