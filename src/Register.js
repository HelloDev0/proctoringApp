import React, { useRef } from 'react'
import SignaturePad from "react-signature-canvas"
import SignatureCanvas from 'react-signature-canvas'

const Register = () => {
    const signPad = useRef({})
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
                                                        value=""
                                                        name="last_name"
                                                        maxlength="50"
                                                        required

                                                        id="example-text-input" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label for="example-text-input">Patient First Name</label>
                                                    <input className="form-control"
                                                        type="text"
                                                        value=""
                                                        id="first_name"
                                                        maxlength="50"
                                                        required

                                                        name="first_name" />
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <label for="example-text-input">Middle Initial</label>
                                                    <input className="form-control"
                                                        type="text"
                                                        value=""
                                                        id="middle_initial"
                                                        maxlength="1"

                                                        name="middle_initial" />
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
                                                        value=""

                                                        name="dob" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="address1">Patient Street Address</label>
                                                    <input className="form-control " required
                                                        type="text"
                                                        value=""
                                                        name="address"
                                                        min='1901-01-01' max='2075-13-13'

                                                        id="address" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="address2">Patient Address Line 2</label>
                                                    <input className="form-control" type="text"
                                                        value=""
                                                        name="address2"

                                                        id="address2" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="city">Patient City</label>
                                                    <input className="form-control" required
                                                        type="text"
                                                        value=""
                                                        name="city"

                                                        id="city" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label for="state">Patient State</label>
                                                    <select className="form-control"
                                                        required
                                                        id="state"
                                                        name="state"

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
                                                        value=""

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
                                                        value=""
                                                        name="email"

                                                        aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="phone">Patient mobile number</label>
                                                    <input type="tel"
                                                        id="phone"
                                                        className="form-control"
                                                        value=""

                                                        name="phone"
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

                                                        name="sex">
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

                                                        name="race">
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

                                                        name="ethnicity">
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
                                                    <input type="file" id="idCard" name="idCard" />
                                                    <br />
                                                    <small>Please take a photo of your id card and
                                                        upload.</small>
                                                </div>

                                            </div>
                                            <div className="col-md-4 ">
                                                <p className="text-primary h6">Please Select Insurance Type</p>
                                                <select className="form-control" id="ins1Type" name="ins1Type">
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
                                        <button className="btn btn-primary">Clear Signature</button>
                                    </div>
                                    <div className="card-body text-center w-fit " >
                                        <SignatureCanvas penColor='blue'
                                            canvasProps={{ width: 500, height: 200, className: 'sigCanvas bg-warning rounded' }} />
                                        {/* <SignaturePad ref={signPad} ></SignaturePad> */}
                                    </div>


                                </div>
                                <div className=" d-flex justify-content-center">

                                    <button className="btn btn-outline-success px-5 py-2 font-weight-bold"
                                    >Next</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
