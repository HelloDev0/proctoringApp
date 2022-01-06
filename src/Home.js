import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()
    return (
        <>
            <div className='container'>
            <h4 className='text-center text-primary m-5'>Welcome to Doctegrity</h4>
                <div className='row'>
                
                    <div className='col-md-5 pr-0'>
                        <img src='https://app.doctegrity.com/static/media/dct-login-banner.7cd95008.jpg' style={{height:'350px', width:'320px'}} className='w-100  ml-0 mr-0'/>
                    </div>
                    <div className='col-md-5 text-center' style={{backgroundColor:'#556ee6', height:'350px',}}>
                        <a className='display-1 text-white d-flex justify-content-center rounded-circle pt-5'
                        style={{fontSize:'15rem',cursor:'pointer' ,textDecoration:'none' , border: '5px solid #7a8de7'}}
                            onClick={() => history.push('/register')}><i class="fas fa-plus"></i></a>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default Home
