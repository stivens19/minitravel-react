import React,{useContext,useEffect} from "react";
import Input from "./../components/ui/Input";
import { Link, useNavigate } from "react-router-dom";
import useForm from "./../hooks/useForm";
import authContext from "../context/auth/authContext";
import Swal from "sweetalert2";

const Register = () => {
  const [user, handleInputChange, reset] = useForm({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = user;
  const {startRegister,isAuthenticated} = useContext(authContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/user");
    }
  }, [isAuthenticated]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      
      return new Swal("Error!", "All fields are required!", "error");;
    }

    if (password !== confirmPassword) {
      
      return new Swal("Error", "Password and Confirm Password must be same", "error");
    }

    startRegister(user)
    reset()
  };
  return (
    <section
      id="login"
      className="w-full flex items-center flex-col h-full dark:bg-tertiary py-28 sm:py-52"
    >
      <h3 className="text-primary font-extrabold text-lg text-center mt-2 sm:text-3xl dark:text-secondary">
        Registrarse
      </h3>
      <form className="w-2/3 md:w-1/4" onSubmit={handleSubmit}>
        <Input type="text" name="username" value={username} onChange={handleInputChange} placeholder="Nombres:" />
        <Input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email:" />
        <Input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password:" />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirmar Password:"
        />
        <button type="submit" className="text-white font-black w-full bg-secondary py-1 hover:bg-primary transition-all ease-in-out duration-500 mt-5">
          Enviar
        </button>

        <Link to="/login">
          <p className="text-center text-secondary font-black mt-2 dark:text-white">
            ¿Tienes una cuenta? Ingresa
          </p>
        </Link>
      </form>
    </section>
  );
};

export default Register;
