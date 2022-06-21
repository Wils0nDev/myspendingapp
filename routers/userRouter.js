const { Router } = require("express");
const { check } = require("express-validator");

const {
    userGet,
    userPost,
    userPut,
    userDelete
} =  require('../controllers/userController');
const { roleValidate,existEmail,existUser } = require("../helpers/db_validate");
const validateFields = require("../middlewares/validate_fields");


const router = new Router();

router.get('/information',[
    check('id').custom( existUser),
    validateFields
],userGet)

router.post('/register',[
    check('name','El nombre es requerido').not().isEmpty(),
    check('email','El correo no es válido').isEmail(),
    check('email').custom(existEmail),
    check('password','El password debe tener 6 cacacteres como minimo').isLength({min:6}),
    //check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('role').custom( roleValidate),
    validateFields  
],userPost)

router.put('/update/:id',[
    check('id').custom( existUser),
    check('password','El password debe tener 6 cacacteres como minimo').isLength({min:6}),
    //check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('role').custom( roleValidate),
    validateFields
],userPut)

router.delete('/delete/:id',[
    check('id').custom( existUser),
],userDelete)




module.exports = router