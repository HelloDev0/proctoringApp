import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
// import SignaturePad from "react-signature-canvas"
import SignatureCanvas from 'react-signature-canvas'
import "./App.css"

const Register = () => {
    const history=useHistory()
    const signPad = useRef({})
    const clearSign=()=>{
        const data=signPad.current.toDataURL()
    setSign(data)
        signPad.current.clear()
    }

   
       
        // console.log('object',data)
    

    const [last_name, setLast_name] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [middle_initial, setMiddle_initial] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [states, setStates] = useState("")
    const [zip, setZip] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [sex, setSex] = useState("")
    const [race, setRace] = useState("")
    const [ethnicity, setEthnicity] = useState("")
    const [ins1Type,setIns1Type]=useState("")
    const [image,setImage]=useState(null)
    const [sign,setSign]=useState("")

    // const data=signPad.current.toDataURL()
    // setSign(data)

    const imageHandler = (e) => {
        const file = e.target.files[0]
        console.log('howdy', file)
        setImage(file)

    }
    const formData = new FormData()
    formData.append('last_name', last_name)
    formData.append('first_name', first_name)
    formData.append('middle_initial', middle_initial)
    formData.append('dob', dob)
    formData.append('address', address)
    formData.append('address2', address2)
    formData.append('city', city)
    formData.append('states', states)
    formData.append('zip', zip)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('sex', sex)
    formData.append('race', race)
    formData.append('ethnicity', ethnicity)
    formData.append('ins1Type', ins1Type)
    formData.append('image', image)
    formData.append('sign', sign)

    const nextPage=()=>{
        console.log("objectobjectobject", last_name,first_name,middle_initial,dob,address,
        address2,city,states,zip,email,phone ,sex,race,ethnicity,ins1Type,image,sign)
        history.push('/record')
    }
    return (
        <>
            <section className='p-5'>
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-red-800">Patient Pre-Registration</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Register</h6>
                            </div>
                            <div className="card-body">
                                <form method="POST" action="https://portal.prophasedx.com/pre-register/Doctegrity" enctype="multipart/form-data" >
                                    <input type="hidden" name="_token" value="N3zNc4xjn2BklhKXOXXsnTqLTpjF4PSoAVeXsITl" />
                                    <input name="ref_code" type="hidden" value="Doctegrity" />

                                    <input name="passed_client_id"
                                        id="client_id"
                                        type="hidden"


                                        value="5219d8d7-06c5-44a3-a8dc-4418366b75ce" />
                                    <input name="passed_location_id" type="hidden" value="61b06119-4306-418d-9e6d-7ba357fb04f3" />
                                </form>
                                <div className="card shadow m-4 border-left-primary">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">User Details</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="text-center fw-bold mt-2 mb-4" >
                                            <h6 className="font-weight-bold text-danger">***Please ensure
                                                that the patient name and date of birth are identical to the information
                                                appearing on the patient's government issued ID***</h6></div>

                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label for="example-text-input">Patient Last Name</label>
                                                    <input className="form-control"
                                                        type="text"
                                                        name="last_name"
                                                        maxlength="50"
                                                        required

                                                        id="example-text-input" 
                                                        value={last_name} 
                                                        onChange={(e) => setLast_name(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label for="example-text-input">Patient First Name</label>
                                                    <input className="form-control"
                                                        type="text"
                                                        id="first_name"
                                                        maxlength="50"
                                                        required

                                                        name="first_name"
                                                        value={first_name} 
                                                        onChange={(e) => setFirst_name(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <label for="example-text-input">Middle Initial</label>
                                                    <input className="form-control"
                                                        type="text" 
                                                        id="middle_initial"
                                                        maxlength="1"

                                                        name="middle_initial" 
                                                        value={middle_initial} 
                                                        onChange={(e) => setMiddle_initial(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <label for="example-date-input">Patient Date of Birth</label>
                                                    <input className="form-control "
                                                        required
                                                        onchange="getAge(this)"
                                                        id="datefield"
                                                        type="date"
                                                        name="dob"
                                                        value={dob} 
                                                        onChange={(e) => setDob(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="address1">Patient Street Address</label>
                                                    <input className="form-control " required
                                                        type="text"
                                                        name="address"
                                                        min='1901-01-01' max='2075-13-13'

                                                        id="address" 
                                                        value={address} 
                                                        onChange={(e) => setAddress(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="address2">Patient Address Line 2</label>
                                                    <input className="form-control" type="text"
                                                        name="address2"

                                                        id="address2" 
                                                        value={address2} 
                                                        onChange={(e) => setAddress2(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="city">Patient City</label>
                                                    <input className="form-control" required
                                                        type="text"
                                                        name="city"

                                                        id="city"
                                                        value={city} 
                                                        onChange={(e) => setCity(e.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label for="state">Patient State</label>
                                                    <select className="form-control"
                                                        required
                                                        id="state"
                                                        name="states"
                                                        value={states} 
                                                        onChange={(e) => setStates(e.target.value)}
                                                    >

                                                        <option value="">Select...</option>
                                                        {/* {stateArr.map()=>
                          return <> */}
                                                        <option
                                                            value="AL" >
                                                            Alabama
                                                        </option>
                                                        {/* </>} */}
                                                        <option
                                                            value="AK" >
                                                            Alaska
                                                        </option>
                                                        <option
                                                            value="AZ" >
                                                            Arizona
                                                        </option>
                                                        <option
                                                            value="AR" >
                                                            Arkansas
                                                        </option>
                                                        <option
                                                            value="CA" >
                                                            California
                                                        </option>
                                                        <option
                                                            value="CO" >
                                                            Colorado
                                                        </option>
                                                        <option
                                                            value="CT" >
                                                            Connecticut
                                                        </option>
                                                        <option
                                                            value="DE" >
                                                            Delaware
                                                        </option>
                                                        <option
                                                            value="DC" >
                                                            District Of Columbia
                                                        </option>
                                                        <option
                                                            value="FL" >
                                                            Florida
                                                        </option>
                                                        <option
                                                            value="GA" >
                                                            Georgia
                                                        </option>
                                                        <option
                                                            value="HI" >
                                                            Hawaii
                                                        </option>
                                                        <option
                                                            value="ID" >
                                                            Idaho
                                                        </option>
                                                        <option
                                                            value="IL" >
                                                            Illinois
                                                        </option>
                                                        <option
                                                            value="IN" >
                                                            Indiana
                                                        </option>
                                                        <option
                                                            value="IA" >
                                                            Iowa
                                                        </option>
                                                        <option
                                                            value="KS" >
                                                            Kansas
                                                        </option>
                                                        <option
                                                            value="KY" >
                                                            Kentucky
                                                        </option>
                                                        <option
                                                            value="LA" >
                                                            Louisiana
                                                        </option>
                                                        <option
                                                            value="ME" >
                                                            Maine
                                                        </option>
                                                        <option
                                                            value="MD" >
                                                            Maryland
                                                        </option>
                                                        <option
                                                            value="MA" >
                                                            Massachusetts
                                                        </option>
                                                        <option
                                                            value="MI" >
                                                            Michigan
                                                        </option>
                                                        <option
                                                            value="MN" >
                                                            Minnesota
                                                        </option>
                                                        <option
                                                            value="MS" >
                                                            Mississippi
                                                        </option>
                                                        <option
                                                            value="MO" >
                                                            Missouri
                                                        </option>
                                                        <option
                                                            value="MT" >
                                                            Montana
                                                        </option>
                                                        <option
                                                            value="NE" >
                                                            Nebraska
                                                        </option>
                                                        <option
                                                            value="NV" >
                                                            Nevada
                                                        </option>
                                                        <option
                                                            value="NH" >
                                                            New Hampshire
                                                        </option>
                                                        <option
                                                            value="NJ" >
                                                            New Jersey
                                                        </option>
                                                        <option
                                                            value="NM" >
                                                            New Mexico
                                                        </option>
                                                        <option
                                                            value="NY" >
                                                            New York
                                                        </option>
                                                        <option
                                                            value="NC" >
                                                            North Carolina
                                                        </option>
                                                        <option
                                                            value="ND" >
                                                            North Dakota
                                                        </option>
                                                        <option
                                                            value="OH" >
                                                            Ohio
                                                        </option>
                                                        <option
                                                            value="OK" >
                                                            Oklahoma
                                                        </option>
                                                        <option
                                                            value="OR" >
                                                            Oregon
                                                        </option>
                                                        <option
                                                            value="PA" >
                                                            Pennsylvania
                                                        </option>
                                                        <option
                                                            value="RI" >
                                                            Rhode Island
                                                        </option>
                                                        <option
                                                            value="SC" >
                                                            South Carolina
                                                        </option>
                                                        <option
                                                            value="SD" >
                                                            South Dakota
                                                        </option>
                                                        <option
                                                            value="TN" >
                                                            Tennessee
                                                        </option>
                                                        <option
                                                            value="TX" >
                                                            Texas
                                                        </option>
                                                        <option
                                                            value="UT" >
                                                            Utah
                                                        </option>
                                                        <option
                                                            value="VT" >
                                                            Vermont
                                                        </option>
                                                        <option
                                                            value="VA" >
                                                            Virginia
                                                        </option>
                                                        <option
                                                            value="WA" >
                                                            Washington
                                                        </option>
                                                        <option
                                                            value="WV" >
                                                            West Virginia
                                                        </option>
                                                        <option
                                                            value="WI" >
                                                            Wisconsin
                                                        </option>
                                                        <option
                                                            value="WY" >
                                                            Wyoming
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-3 ">
                                                <div className="form-group">
                                                    <label for="zip">Patient Zip Code</label>

                                                    <input type="text"
                                                        className="form-control zip"
                                                        required id="zip"
                                                        name="zip"
                                                        value={zip} 
                                                        onChange={(e) => setZip(e.target.value)}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Patient Email address</label>
                                                    <input type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        value={email} 
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="phone">Patient mobile number</label>
                                                    <input type="tel"
                                                        id="phone"
                                                        className="form-control"
                                                        name="phone"
                                                        value={phone} 
                                                        onChange={(e) => setPhone(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label for="sex">Sex (at birth)</label>
                                                    <select
                                                        className="form-control"
                                                        id="sex"
                                                        required
                                                        name="sex"
                                                        value={sex}
                                                        onChange={(e) => setSex(e.target.value)}>
                                                        <option disabled selected value="">Select...</option>
                                                        <option
                                                            value="Male" >
                                                            Male
                                                        </option>
                                                        <option
                                                            value="Female" >
                                                            Female
                                                        </option>
                                                        <option
                                                            value="Other" >
                                                            Other
                                                        </option>
                                                        <option
                                                            value="Unknown" >
                                                            Unknown
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="race">Race</label>
                                                    <select className="form-control" id="race"
                                                        required

                                                        name="race"
                                                        value={race}
                                                        onChange={(e) => setRace(e.target.value)}>
                                                        <option disabled selected value="">Select...</option>
                                                        <option
                                                            value="American Indian or Alaska Native" >
                                                            American Indian or
                                                            Alaska Native
                                                        </option>
                                                        <option
                                                            value="Asian" >
                                                            Asian
                                                        </option>
                                                        <option
                                                            value="Black or African American" >
                                                            Black or African American
                                                        </option>
                                                        <option
                                                            value="Multi-racial" >
                                                            Multi-racial
                                                        </option>
                                                        <option
                                                            value="Native Hawaiian or other Pacific Islander" >
                                                            Native
                                                            Hawaiian or other Pacific Islander
                                                        </option>
                                                        <option
                                                            value="White" >
                                                            White
                                                        </option>
                                                        <option
                                                            value="Other" >
                                                            Other
                                                        </option>
                                                        <option
                                                            value="Unknown" >
                                                            Unknown
                                                        </option>
                                                        <option
                                                            value="Not shared" >
                                                            Prefers not to share
                                                        </option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label for="ethnicity">Ethnicity</label>
                                                    <select className="form-control" id="ethnicity"
                                                        required
                                                        name="ethnicity"
                                                        value={ethnicity} 
                                                        onChange={(e) => setEthnicity(e.target.value)}>
                                                        <option disabled selected value="">Select...</option>
                                                        <option
                                                            value="Hispanic or Spanish origin" >
                                                            Hispanic or Spanish origin
                                                        </option>
                                                        <option
                                                            value="Not Hispanic or Spanish origin" >
                                                            Not Hispanic or Spanish
                                                            origin
                                                        </option>
                                                        <option
                                                            value="Not shared" >
                                                            Prefers not to share
                                                        </option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row my-5">
                                            <div className="col-md-6">
                                                <label className="text-primary h6">Id Card (Parent/Guardian ID for patients under 18)</label>
                                                <div className="form-group">
                                                    <input type="file" id="idCard" name="idCard" 
                                                    // value={idcard} 
                                                    onChange={imageHandler}
                                                    />
                                                    <br />
                                                    <small>Please take a photo of your id card and
                                                        upload.</small>
                                                </div>

                                            </div>
                                            <div className="col-md-4 ">
                                                <p className="text-primary h6">Please Select Insurance Type</p>
                                                <select className="form-control" id="ins1Type" name="ins1Type"
                                                value={ins1Type} 
                                                onChange={(e) => setIns1Type(e.target.value)}>
                                                    <option>Select..</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no" >No</option>
                                                </select>
                                            </div>

                                            <input type="hidden" id="consent-required" value="0" />

                                        </div>





                                    </div>
                                </div>
                                <div className="card shadow m-4 border-left-primary">
                                    <div className="card-header py-3 d-flex justify-content-between" >
                                        <h6 className="m-0 font-weight-bold text-primary">Patient Signature (Parent/Guardian signature for patients under 18)</h6>
                                        <button className="btn btn-primary"
                                        onClick={clearSign}>Clear Signature</button>
                                    </div>
                                    <div className="card-body text-center w-fit " >
                                        <SignatureCanvas penColor='black'
                                        ref={signPad}
                                            canvasProps={{ width: 500, height: 200, className: 'sigCanvas rounded' }} />
                                        {/* <SignaturePad ref={signPad} ></SignaturePad> */}
                                    </div>


                                </div>
                                <div className=" d-flex justify-content-center">

                                    <button className="btn btn-outline-success px-5 py-2 font-weight-bold"
                                   onClick={nextPage} >Next</button>

                                    

                                </div>
                                <p className='text-gray fw-lighter text-center mt-2' style={{fontSize:'14px'}}>*By clicking submit the patient gives authorization for test results and associated protected health information (PHI) to be sent via digital delivery methods including SMS text and email.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
