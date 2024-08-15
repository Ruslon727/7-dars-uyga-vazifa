import React, { useContext } from 'react'
import { TwitterIcon } from '../../assets/images/Icons'
import { Link } from 'react-router-dom'
import Input from '../../components/input'
import { Context } from '../../context/Context'
const SignIn = () => {
  const { setToken } = useContext(Context)
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    }
    if(data.login == "Ruslan" && data.password == "12345"){
      setToken(data)
      e.target.reset()
    }
    else{
      console.log("Xatolik bor");
    }

  }
  return (
    <form onSubmit={handleSubmitLogin} className='SignIn_form'>
      <Link className='Twitter_Icon' to={'/'}><TwitterIcon /></Link>
      <h1 className='SignIn-text'>Log in to Twitter</h1>
      <Input isRequired={true} placeholder={'Phone number, email address'} type={'text'} name={'login'} />
      <Input isRequired={true} placeholder={'Password'} type={'password'} name={'password'} />
      <button type='submit' className='form_button'>Log In</button>
      <div className='navigation_div'>
        <Link className='navigation' to={'/sign-up'}>Fotgot password?</Link>
        <Link className='navigation' to={"/sign-up"}>Sign up to Twitter</Link>
      </div>
    </form>
  )
}
export default SignIn