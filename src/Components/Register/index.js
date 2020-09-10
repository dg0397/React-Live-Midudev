import React, {useState} from 'react';
import registerService from 'services/register'
import { useForm } from 'react-hook-form';
 
export default function Register() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const [registered , setRegistered] = useState(false);
  const [isSubmitting,setIsSubmitting] = useState(false)

  const onSubmit = values => {
    console.log(values);
    setIsSubmitting(true)
    registerService(values)
      .then(() =>  {
        setRegistered(true)
        setIsSubmitting(false)
      })
  };

  if(registered){
    return <h4>Congratulation <span role = 'img' aria-label = 'check icon'>✅</span>! You've been successfully registered!</h4>
  }
 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className = 'Form' >
      <input 
        className={errors.username ? 'error' : ''} 
        name="username" 
        ref={register({ required: true })} 
        placeholder='Put here the username'  /> {/* register an input */}
      
      {errors.username && <span className = 'form-error' >{'Username is Required.'}</span>}

      <input 
        className={errors.password ? 'error' : ''} 
        name="password" 
        ref={register({ required: true , minLength: 3})} 
        placeholder='Put here the password' 
        type = 'password'/>

      {errors.password && <span className = 'form-error' >{'Password is Required.'}</span>}
      
      <button disabled={isSubmitting} >Register</button>
    </form>
  );
}