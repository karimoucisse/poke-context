import { useFormik } from 'formik'
import * as Yup from 'yup'
const Login =() => {
    const formik = useFormik({
        initialValues: {
          username: "",
          password: ""
        },
        onSubmit: values => {
          console.log(values)
        },
        validationSchema: Yup.object().shape({
          username: Yup.string()
            .min(5, "Username est trop court")
            .required("Username est requis"),
          password: Yup.string()
            .min(3, "password trop court")
            .max(10, "password trop long")
        }),
        // validateOnChange: false
      })
    return(
        // <form className="container_login" onSubmit={formik.handleSubmit}>
        //     <div className="username">
        //         <label>Username</label>
        //         <input value={formik.values.username} onChange={formik.handleChange}/>
        //     </div>
        //     <div className="Password">
        //         <label>Password</label>
        //         <input value={formik.values.password} onChange={formik.handleChange}/>
        //     </div>
        //     <button type="submit">Submit</button>
        // </form>
        <h1>Login</h1>
    )
}
export default Login;