import React, { useEffect, useState } from 'react'
import { Container, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
let instilize = {
  username: "",
  email: "",
  password: ""
}
const User = () => {
  let [user, setUser] = useState(instilize)
  let [login, setLogin] = useState(false)
  let [userdata, setUserdata] = useState([])
  let loch = useNavigate()

  const HandelInput = (e) => {
    let { name, value } = e.target
    setUser((old) => ({ ...old, [name]: value }))
  }
  const HandelSign = (e) => {
    e.preventDefault();
    setUserdata([user, ...userdata])
    alert('sign-up sucesful')
    setLogin(true)
  }
  console.log(userdata);
  useEffect(() => {
    localStorage.setItem("ProdcutList", JSON.stringify(userdata))
  }, [userdata])
  const HandelLogin = (e) => {
    e.preventDefault()

    userdata.map((e) => {
      let ema = 0
      let pas = 0
      if (e.email == user.email) {
        ema = 1
        if (e.password == user.password) {
          pas = 1
        }
      }
      if (ema == 1) {
        if (pas == 1) {
          alert("login suscefuuly")
          loch('/')
        }
        else {
          alert("plese check your possword")
        }

      }
      else {
        alert("check email or first sign up")
      }
    })
  }
  const HandelAccount = (lo) => {
    setLogin(lo)
  }

  return (
    <>
      {/* <Header /> */}
      <section className='bg-app p-100'>
        <Container>
          <div className="row align-items-center">
            <Col sm={12} md={6} className='d-none d-md-block'>
              <div className="banner-content p-0 py-md-5 text-center text-md-start">
                <p className='fs-2 fw-semibold text-uppercase text-secondary'>WELCOME TO YOUR bix</p>
                <p className='fs-1 fw-semibold text-white'>GREAT PERFORMANCE<p>THAT METTERS IN <span className='text-primary'>FUTURE</span></p></p>
                <p className='fs-5 text-white d-none d-md-block'>The glamour of ten decades can be this timeless and modern. This motorcycle was, is and remains a design icon. A statement. This limited edition.</p>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className='find-branch p-3 my-5 text-center'>
                <p className='text-primary font-primary display-2 m-0'>b<span className='text-white'>i</span><span className='text-secondary'>x</span></p>
                <p className='text-white fs-5 text-uppercase fw-semibold'>Two wheels,  bix one love </p>
                {
            login ?
              <Col sm={12} className='p-4 '>
                <form onSubmit={HandelLogin}>
                  <input type="email" className='col-12 border border-2 border-white bg-transparent p-2 rounded text-white mb-4 text-capitalize' onChange={HandelInput}
                    name='email' placeholder='enter your email' />
                  <input type="password" className='col-12 border border-2 border-white bg-transparent p-2 rounded text-white mb-4 text-capitalize' onChange={HandelInput}
                    name='password' placeholder='enter the password' />
                  <input type="submit" className='btn btn-primary text-uppercase col-12' value="login" />
                  <button className='mt-4 bg-transparent text-white text-uppercase border-0' onClick={() => HandelAccount(false)}>don't have any account ?</button>
                </form>
              </Col>
              :
              <Col sm={12} className='p-4' >
                <form onSubmit={HandelSign}>
                  <input type="text" className='col-12 border border-2 border-white bg-transparent p-2 rounded text-white mb-4 text-capitalize' onChange={HandelInput} name='username' placeholder='enter your username' />
                  <input type="email" className='col-12 border border-2 border-white bg-transparent p-2 rounded text-white mb-4 text-capitalize' onChange={HandelInput} name='email' placeholder='enter your email' />
                  <input type="password" className='col-12 border border-2 border-white bg-transparent p-2 rounded text-white mb-4 text-capitalize' onChange={HandelInput} name='password' placeholder='enter the password' />
                  <input type="submit" value="sign-up" className='btn btn-primary text-uppercase col-12' />
                  <button className='mt-4 bg-transparent text-uppercase text-white border-0' onClick={() => HandelAccount(true)}>i have already account ?</button>
                </form>
              </Col>
          }
              </div>
            </Col>
          </div>
        </Container>
      </section>
      {/* <Footer /> */}
    </>
  )
}

export default User