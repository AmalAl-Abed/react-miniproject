import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from '../../redux/userSlice';
import './login.css'

const Login =()=>{
    
    let navigate = useNavigate();
    // const user = useSelector(state=>state);
    // console.log(user);
    const [userData , setUserData] =useState({email:"" , password:""}) 
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        e.preventDefault()
        const value = e.target.value;
        setUserData({
          ...userData,
          [e.target.name]: value
        })
    }
    const handleSubmit=(e)=>{



        e.preventDefault()
        const value = e.target.value;
        setUserData({
            ...userData,
        })
        dispatch(login(userData))

        navigate("/main", { replace: true });
    }
    

    return(
        <div>
    <section class="">

      <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
        <div class="container">
          <div class="row gx-lg-5 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-5 display-3 fw-bold ls-tight"><br />
             <img  
                src='images/carrefour-logo.jpg' alt='image' width={650} heigh={300}/>
              </h1>
        
            </div>
    
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card">
                <div class="card-body py-5 px-md-5">
                    
                  <form onSubmit={handleSubmit}>

                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3" class="form-control" name="email" 
                placeholder="Email" 
                onChange={handleChange}  />
                      <label class="form-label" for="form3Example3">Email address</label>
                    </div>
    
           
                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4" class="form-control"  name="password"  placeholder="Password"    onChange={handleChange}/>
                      <label class="form-label" for="form3Example4">Password</label>
                    </div>
    
            
                    <button type="submit" class="btn btn-primary btn-block mb-4" style={{backgroundColor:" #1d479d"}}>
                        login
                    </button>
    
             
                    <div class="text-center">
    
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-google"></i>
                      </button>
    
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                      </button>
    
                      <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </div>

    )
}

export default Login;