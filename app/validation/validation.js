import Joi from 'joi';

class Validation {
    emailRegex='^[a-zA-z]{3}([+-_ .]*[a-zA-Z0-9]+)*[@][a-zA-z0-9]+(.[a-z]{2,3})*$'
    passwordRegex=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    phoneNoRegex=/^(\+91[\-]?)?[0]?(91)?[789]\d{9}$/
    ValidationRegister = Joi.object({
        name:Joi.string()
            .required(),
        email: Joi.string()
            .pattern(new RegExp(this.emailRegex))
            .required(),

        password: Joi.string()
            .pattern(new RegExp(this.passwordRegex))
            .required(),

        phoneNo: Joi.string()
            .regex(/^(\+91[\-]?)?[0]?(91)?[789]\d{9}$/)
            .required(),
    });
}
export default new Validation;