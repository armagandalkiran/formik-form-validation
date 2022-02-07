import { useFormik } from 'formik';
import validationSchema from './validations';

const Signup = () => {
    const {handleChange,handleSubmit,handleBlur,values,errors,touched} = useFormik({
             initialValues: {
               email: '',
               password:'',
               confirmPassword:'',
             },
             onSubmit: values => {
               console.log(values);
             },
             validationSchema,
           });
           return (
             <form onSubmit={handleSubmit}>
               <br/><br/>
               <label htmlFor="email">Email Address</label>
               <input
                 id="email"
                 name="email"
                 type="email"
                 onChange={handleChange}
                 value={values.email}
                 onBlur={handleBlur}
               />
               {errors.email && touched.email && (<div>{errors.email}</div>)}
               <br/><br/>
               <label htmlFor="password">Password:</label>
               <input
                 id="password"
                 name="password"
                 type="text"
                 onChange={handleChange}
                 value={values.password}
                 onBlur={handleBlur}
               />
               {errors.password && touched.password && (<div>{errors.password}</div>)}
               <br/><br/>
               <label htmlFor="confirmPassword">Confirm Password:</label>
               <input
                 id="confirmPassword"
                 name="confirmPassword"
                 type="text"
                 onChange={handleChange}
                 value={values.confirmPassword}
                 onBlur={handleBlur}
               />
               {errors.confirmPassword && touched.confirmPassword && (<div>{errors.confirmPassword}</div>)}
               <br/><br/>
               <button type="submit">Submit</button>

               <br/><br/>

               <code>{JSON.stringify(values)}</code>
             </form>
           );
};

export default Signup;
