import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {

  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("/api/user/login", user)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("user", JSON.stringify(res.data));
          setAuthUser(res.data.user);
          document.getElementById("my_modal_3").close();
          toast.success(`Successfully Login ${res.data.user.name}`);
          
          setTimeout(() => {
            window.location.reload();
          },1000);

        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(`Error: ${err.response.data.message}`);
          setTimeout(() => {},3000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm absolute right-2 top-2 bg-green-500 text-white hover:text-black hover:bg-white">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="card shrink-0 w-full min-w-screen bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered hover:border-green-500"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered hover:border-green-500"
                  name="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 text-white rounded-md hover:bg-base-100 hover:text-black hover:border-green-500">
                  Login
                </button>
              </div>
              <p>
                Not registered?
                <Link to="/signUp">
                  <span className="text-green-500 cursor-pointer">
                    {" "}
                    SignUp!
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
