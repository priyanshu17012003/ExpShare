import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function SignUp() {

  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) =>{
    const user={
      name:data.name,
      email:data.email,
      password:data.password
    }

    await axios.post("/api/user/signup",user)
    .then((res)=>{

      if(res.data)
      {
          localStorage.setItem("user", JSON.stringify(res.data));
          setAuthUser(res.data.user);
          toast.success('Successfully created!');
          //window.location.href = "/";
          setTimeout(() => {

            navigate("/createProfile");
              
            },2000)
      }
    })
    .catch((err)=>{
      if(err.response)
      {
        toast.error(`Error: ${err.response.data.message}`);

        setTimeout(() => {},3000);
      }
    });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold"><span className="text-green-500">Welcome!😃</span> Thank you for signing up on <span className="text-green-500">ShareExps</span></h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm absolute right-2 top-2 bg-green-500 text-white hover:text-black hover:bg-white">
              ✕
            </Link>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered hover:border-green-500"
                  {...register("name", { required: true })} 
                />
                {errors.name && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered hover:border-green-500"
                  {...register("email", { required: true })} 
                />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered hover:border-green-500"
                  {...register("password", { required: true })} 
                />
                {errors.password && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 text-white rounded-md hover:bg-base-100 hover:text-black hover:border-green-500">
                  SignUp
                </button>
              </div>
              <p>Already registered?<Link to="/"><span className="text-green-500 cursor-pointer"> Login!</span></Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
