import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()
    // const crtro='10px';
    // const colorDoct = '#556ee6'
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center d-flex text-primary m-5'>
                    <h4 className='pr-2 text-center' style={{ color: '#556ee6' }}>Welcome to Doctegrity</h4>
                </div>
                <div className='row d-flex justify-content-center position realtive'>

                    <div className='col-md-4 pr-0'>
                        <img src='https://app.doctegrity.com/static/media/dct-login-banner.7cd95008.jpg' style={{ height: '100%', width: '100%' }} className='w-100  ml-0 mr-0 rounded-left' alt=''/>
                    </div>

                    <div className='col-md-4 d-flex align-items-center justify-content-center rounded-right' style={{ backgroundColor: '#556ee6' }}>
                        
                        <button style={{width:'100px', height:'100px', boxShadow:'2px 11px 15px 0px #333', borderRadius:'50px',backgroundColor: '#556ee6', border:'none'}}
                        onClick={() => history.push('/register')}>
                            <p className="p-0 m-0" style={{fontSize:'50px', color:'white'}}>+</p>
                        
                        </button>
                        <p className='text-white position-absolute' style={{top:'15rem'}}>Start Measurement...</p>
                    </div>
                    
                    <img src='https://app.doctegrity.com/static/media/logo.bbf7c725.svg' alt=' ' className='image-z-index position-absolute ' />

                </div>
            </div>


        </>
    )
}

export default Home
