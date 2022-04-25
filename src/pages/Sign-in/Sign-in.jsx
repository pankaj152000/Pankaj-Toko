import React from "react";
import FormInput from "../../components/form-input/formInput";
import Button from "../../components/Button/button";
import "./Sign-in.scss";

const SignIn = () => {
  return (
      <div>
      <div className="sign"   
      style={{backgroundImage:`url(https://purpletoko.in/wp-content/uploads/2022/02/blog-cover.png)`}}>
      </div>
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form>
      <FormInput
          label='Display Name'
          type='text'
          required
          
          name='displayName'
          value=""
        />

        <FormInput
          label='Email'
          type='email'
          required
          
          name='email'
          value=""
        />

        <FormInput
          label='Password'
          type='password'
          required
         
          name='password'
          value=""
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          
          name='confirmPassword'
          value=""
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
