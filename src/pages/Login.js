import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useContext} from 'react'
import { UserContext } from '../Contexts/User'
// import { useNavigate } from "react-router-dom";
const Login =() => {
    // const user = useContext(UserContext)
    // let navigate = useNavigate();
    const { isLogged, setIsLogged } = useContext(UserContext)

    const formik = useFormik({
        initialValues: {
          username: "",
          password: ""
        },
        onSubmit : values => {
            setIsLogged(true)
            console.log("submit :",isLogged);
            
        },
        validationSchema : Yup.object().shape({
            username : Yup.string()
                .required("Username non rensaigné")
                .max(15, "Username trop long"),
            password : Yup.string()
            .required("Password non renseigné")
            .min(6, "Passwoard trop court")
        }),
        // validateOnChange: false
    })
    const handleLogoutClick = () => {
        setIsLogged(false)
        console.log("click :", isLogged);
    }
    const handleLoginClick = () => {
        // navigate("/")
        console.log('login');
    }
    return(
        <form 
            className="container_login"
            onSubmit={formik.handleSubmit}>
            {/* {!user.isLogged 
                && <> */}
                    <div className="username">
                        <label>Username</label>
                        <input 
                            type= "text"
                            name = "username"
                            value={formik.values.username} 
                            onChange={formik.handleChange}
                            disabled={isLogged && true}
                        />
                        <p className="errors">{formik.errors.username}</p>
                        </div>
                        <div className="Password">
                        <label>Password</label>
                        <input 
                            type = "password"
                            name ="password"
                            value={formik.values.password} 
                            onChange={formik.handleChange}
                            disabled={isLogged && true}
                        />
                        <p className="errors">{formik.errors.password}</p>
                    </div>
                {/* </>
            } */}
            {isLogged && <button type="button" onClick={handleLogoutClick}>log out</button>}
            {!isLogged && <button type="submit" onClick={handleLoginClick}>log in</button>}
        </form>
    )
}
export default Login;