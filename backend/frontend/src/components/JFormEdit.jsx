import React from "react";
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function JFormEdit() {

  const [authUser, setAuthUser] = useAuth();

  const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    
    const {id} = useParams();

    const onSubmit =async (data) =>{

      const item={
        name:data.name,
        email:data.email,
        company:data.company,
        type:data.type,
        exps:data.exps,
        experience:data.experience,
        img:data.img
      }

      await axios.put(`/api/list/update/${id}`,item)
      .then((res)=>{
        if(res.data)
        {
          toast.success('Successfully updated!');
          setTimeout(() => {
            navigate("/profile");
          },3000);
        }
      })
      .catch((err)=>{
        if(err.response)
        {
          toast.error(`Error: ${err.response.data.message}`);
        }
      });
    }
  
  return (
    <div className="mx-auto max-w-screen-2xl container px-5 md:px-5">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Share your <span className="text-green-500">Journey😃</span> with others!!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={authUser.user.name}
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
                  type="text"
                  placeholder="email"
                  name="email"
                  value={authUser.user.email}
                  className="input input-bordered hover:border-green-500"
                  {...register("email", { required: true })} 
                />
                {errors.email && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company</span>
                </label>
                <input
                  type="text"
                  placeholder="company"
                  name="company"
                  className="input input-bordered hover:border-green-500"
                  {...register("company", { required: true })} 
                />
                {errors.company && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="text"
                  placeholder="job or Internship"
                  name="type"
                  className="input input-bordered hover:border-green-500"
                  {...register("type", { required: true })} 
                />
                {errors.type && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <input
                  type="text"
                  placeholder="short description"
                  name="exps"
                  className="input input-bordered hover:border-green-500"
                  {...register("exps", { required: true })} 
                />
                {errors.exps && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Long description</span>
                </label>
                <textarea className="textarea textarea-accent"
                 placeholder="description" name="experience" {...register("experience", { required: true })} >
                 </textarea>
                {errors.experience && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile image</span>
                </label>
                <input
                  type="text"
                  placeholder="profile image url"
                  name="img"
                  value="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1718279448~exp=1718283048~hmac=c8f69237246c4edaed512b0eee5b8c202a23c13f6a00716aca2bb63f272f9634&w=826"
                  className="input input-bordered hover:border-green-500"
                  {...register("img", { required: true })} 
                />
                {errors.img && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-500 text-white rounded-md hover:bg-base-100 hover:text-black hover:border-green-500">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JFormEdit;
