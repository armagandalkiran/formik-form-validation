import { object, string, ref} from 'yup';

    const validations = object({
        email: string().email("Gecerli bir email giriniz.").required("Email alani bos birakilamaz."),
        password: string().min(8).required(),
        confirmPassword: string().oneOf([ref("password")],"Sifreler eslesmiyor").required(),
    });

export default validations;
