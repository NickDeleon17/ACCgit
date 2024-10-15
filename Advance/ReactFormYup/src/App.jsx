import { useState } from 'react'
import { useForm } from "react-hook-form"
import { object, string, number } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import './App.css'

function App() {
  const {} = useForm()

  const userSchema = object({
    fname: string()
      .max(5, "Cannot be more than 5 characters")
      .required("This needs to be here"),
    lname: string()
      .min(3, "Gotta be more than 1 character.")
      .max(5, "No more than 5 characters"),
    age: number()
      .positive("Must be positive")
      .lessThan(100, "Not more than 100"),
    email: string()
      .email("Make it proper email format")
      .required("I need it"),
    password: string()
      .max(10, "Make it atleast 10 characters")
      .required("gotta have it.")
      .min(5, "Too short (thats what she said)")

      })
// apply validation, recieve data if successful, set value of a field
  const {register, handleSubmit, setValue, reset, formState: { errors }} = useForm({
    resolver: yupResolver(userSchema),
});

  const onSubmit= (data) => {
    console.log(data)

    reset()
  }

  const handleChange = (event) => {
  setValue(event.target.name, event.target.value)
  }


  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="fname">First Name</label>
      <input type="text" {...register("fname")} id="fname" onChange={handleChange} />
      {errors.fname && <span> {errors.fname.message}</span>}
<br />
      <label htmlFor="lname">Last Name</label>
      <input type="text" {...register("lname")} id="lname" onChange={handleChange} />
      {errors.lname && <span>{errors.lname.message}</span>}
<br />
      <label htmlFor="age">Age</label>
      <input type="number" {...register("age")} id="age" onChange={handleChange} />
      {errors.age && <span>{errors.age.message}</span>}
<br />
      <label htmlFor="email">E-mail</label>
      <input type="email" {...register("email")} id="email" onChange={handleChange} />
      {errors.email && <span>{errors.email.message}</span>}
<br />
      <label htmlFor="email">Password</label>
      <input type="password" {...register("password")} id="password" onChange={handleChange} />
      {errors.password && <span>{errors.password.message}</span>}

<br />
      <button type='submit'>Submit</button> <button type='reset' onClick={()=> reset()}>Cancel</button>
     </form>
    </>
  )
}

export default App
