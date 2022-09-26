import React from 'react'
import axios from 'axios';




const Extra = () => {

  const submitHandler = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const checkMe = event.target.checkMe.value;

    const data = { email, password, checkMe };
    const responsr =axios
        .post('https://jsonplaceholder.typicode.com/posts', data)
        .then((response) => {
          console.log(response);
          // event.target.reset();
        })
        .catch((error) => {
          console.log(error);
        })
  }


  return (
    <div>


      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name={'password'} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <div className="form-group form-check">
          <input name='checkMe' type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>



    </div>
  )
}

export default Extra
