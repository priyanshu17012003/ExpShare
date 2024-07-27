import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import axios from 'axios';

function CreateProfile() {

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =async(data) =>{

    try{
    const user={
        name:data.name,
        email:data.email,
        pronouns:data.pronouns,
        Llink:data.Llink,
        bio:data.bio,
        img:data.img
    }

    await axios.post("/api/profile/createProfile",user)
    .then((res)=>{
        toast.success("Profile created successfully");

        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
    })

    }
    catch(error){
        toast.error(error.message);
        console.log(error.message);
    }
  }

return (
  <div className="mx-auto max-w-screen-2xl container px-5 md:px-5">
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">You are almost ready to dive into <span className="text-green-500">ShareExps 😃</span></h1>
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
                placeholder="fullname"
                name="name"
                className="input input-bordered hover:border-green-500"
                {...register("name", { required: true })} 
              />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Id</span>
              </label>
              <input
                type="email"
                placeholder="email Id"
                name="email"
                className="input input-bordered hover:border-green-500"
                {...register("email", { required: true })} 
              />
              {errors.email && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pronouns</span>
              </label>
              <input
                type="text"
                placeholder="pronouns"
                name="pronouns"
                className="input input-bordered hover:border-green-500"
                {...register("pronouns", { required: true })} 
              />
              {errors.pronouns && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn</span>
              </label>
              <input
                type="text"
                placeholder="LinkedIn profile url"
                name="Llink"
                className="input input-bordered hover:border-green-500"
                {...register("Llink", { required: true })} 
              />
              {errors.Llink && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bio</span>
              </label>
              <textarea className="textarea textarea-accent"
               placeholder="bio" name="bio" {...register("bio", { required: true })} >
               </textarea>
              {errors.bio && <span className="text-red-600">This field is required</span>}
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

export default CreateProfile