import React, { useState } from "react";
import axios from 'axios';
import { Stepper, Step } from "react-form-stepper";
import { MdDescription } from "react-icons/md";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {Routes, Route, useNavigate, useHistory} from 'react-router-dom';
import Extra from '../Pages/Extra'

import '../CSS/AllSteps.css'
import '../CSS/AllStepsIcon.css'
import '../CSS/Stepone.css'
import '../CSS/Checkbox.css'
import '../CSS/RadioMaleFemale.css'

const ActionButtons = (props) => {
  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = () => {
    props.lastStep();
  };

  return (
    <div>
      <Row >
        {props.currentStep > 1 && (
          <Col className="d-flex align-items-start  m-0 pl-1">
            <Button className="nextButton" onClick={handleBack}>Back</Button>
          </Col>
        )}
        <Col >
          {props.currentStep < props.totalSteps && (
            <Button className="nextButton" onClick={handleNext}>Next</Button>
          )}
          {props.currentStep === props.totalSteps && (
            <Button className="nextButton" onClick={handleFinish}>Finish</Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

const One = (props) => {
  const [info1, setInfo1] = useState({});
  // const [info2, setInfo2] = useState({});
  // const [error, setError] = useState("");
  const [errorData, setErrorData] = useState("0");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo1((info1) => ({
      ...info1,
      [targetName]: targetValue
    }));

    console.log(info1)
  };

  const validate = () => {

    if (!info1.firstname) setErrorData(1);
    else if (!info1.lastname) setErrorData(2);
    else if (!info1.email) setErrorData(3);
    else if (!info1.phone) setErrorData(4);
    else if (!info1.age) setErrorData(5);
    else if (!info1.fav_language) setErrorData(6);
    else {
      setErrorData('');
      // setError("");
      props.nextStep();
      props.userCallback(info1);
    }



  };

  return (
    <div>


      <div className="row">

        <div className="col-lg-5 d-flex align-items-center "><h3>Step 1/3</h3></div>

        <div className="col-lg-7  d-flex align-items-center justify-content-center">

          <div class="progress progressStep1 ">
            <div class="progress-value" ></div>
          </div>

        </div>

      </div>

      <FormGroup>

        <div className="container">

          <div className="row mt-lg-2 ">

            <h3 className="" >Please fill with your details</h3>

          </div>

          <div className="row inputStep1Row1 mt-0">

            <div className="col-lg-6 pl-lg-0 pr-lg-2">

              <input className="Step1CommonInput" type="text" name="firstname" onChange={onInputChanged} placeholder="First name" />
              {errorData == 1 ? <div className="errorMessage"> Please enter First name. </div> : ''}
            </div>

            <div className="col-lg-6  pl-lg-2 pr-lg-0">

              <input className="Step1CommonInput" type="text" name="lastname" onChange={onInputChanged} placeholder="Last name" />
              {errorData == 2 ? <div className="errorMessage">Please enter Last name.</div> : ''}
            </div>

          </div>

          <div className="row inputStep1Row2 inputStep1Row1 mt-lg-4">

            <div className="col-lg-6 pl-lg-0 pr-lg-2">

              <input className="Step1CommonInput" type="Email" name="email" onChange={onInputChanged} placeholder="Email" />
              {errorData == 3 ? <div className="errorMessage">Please enter Email.</div> : ''}

            </div>

            <div className="col-lg-6 pl-lg-2 pr-lg-0">

              <input className="Step1CommonInput" type="Phone" name="phone" onChange={onInputChanged} placeholder="Telephone" />
              {errorData == 4 ? <div className="errorMessage">Please enter Telephone.</div> : ''}
            </div>

          </div>

          <div className="row inputStep1Row3 inputStep1Row1 mt-lg-4">

            <div className="col-lg-6 p-lg-0 pr-lg-2">

              <input className="Step1CommonInput" type="number" name="age" onChange={onInputChanged} placeholder="Age" />
              {errorData == 5 ? <div className="errorMessage">Please enter Age.</div> : ''}
            </div>

            <div className="col-lg-6 pl-lg-2 pr-lg-0">

              <div className="row Step1Row3Common2Ratio">



                <p className="ratioButton mt-md-4 ">
                  <input type="radio" id="featured-1" name="fav_language" onChange={onInputChanged} value="Male" />
                  <label className="ratioButtonLabel" for="featured-1"><p className="ml-3 mt-1">Male</p></label>

                  <input type="radio" id="featured-2" name="fav_language" onChange={onInputChanged} value="Female" />
                  <label className="ratioButtonLabel" for="featured-2"><p className="ml-3 mt-1">Female</p></label>
                </p>

              </div>
              {errorData == 6 ? <div className="errorMessage">Please enter Gender.</div> : ''}

            </div>

          </div>

        </div>

        <br />
        {/* <span style={{ color: "red" }}>{error}</span> */}

      </FormGroup>


      <ActionButtons  {...props} nextStep={validate} />
    </div>
  );
};

const Two = (props) => {
  const [info2, setInfo2] = useState({});
  // const [error, setError] = useState("");
  const [errorData, setErrorData] = useState("0");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo2((info2) => ({
      ...info2,
      [targetName]: targetValue
    }));
  };

  const validate2 = () => {
    if (!info2.address) setErrorData(1);
    else if (!info2.city) setErrorData(2);
    else if (!info2.postcode) setErrorData(3);
    else if (!info2.countryData) setErrorData(4);
    else {
      setErrorData("");
      props.nextStep();
      props.userCallback(info2);
    }
  };

  return (
    <div>


      <div className="row">

        <div className="col-lg-5  d-flex align-items-center "><h3>Step 2/3</h3></div>

        <div className="col-lg-7  d-flex align-items-center justify-content-center">

          <div class="progress progressStep2 ">
            <div class="progress-value" ></div>
          </div>

        </div>

      </div>

      <FormGroup>


        <div className="container">

          <div className="row mt-2 ">

            <h3 className="" >Please fill with additional info</h3>


          </div>


          <div className="row inputStep1Row1 mt-0">

            <div className="col-lg-12 pl-lg-0 pr-lg-2">

              {/* <Label>Name: </Label> */}
              {/* <input type="text" name="name" onChange={onInputChanged} placeholder="Enter your name" /> */}
              <input className="Step1CommonInput" type="text" name="address" onChange={onInputChanged} placeholder="Address" />
              {errorData == 1 ? <div className="errorMessage"> Please enter Address. </div> : ''}

            </div>



          </div>

          <div className="row inputStep1Row2 inputStep1Row1 mt-lg-4">

            <div className="col-lg-6 pl-lg-0 pr-lg-2">

              <input className="Step1CommonInput" type="Email" name="city" onChange={onInputChanged} placeholder="City" />
              {errorData == 2 ? <div className="errorMessage"> Please enter City. </div> : ''}

            </div>

            <div className="col-lg-6 pl-lg-2 pr-lg-0">

              <input className="Step1CommonInput" type="Phone" name="postcode" onChange={onInputChanged} placeholder="Postcode" />
              {errorData == 3 ? <div className="errorMessage"> Please enter Postcode. </div> : ''}

            </div>

          </div>

          <div className="row inputStep1Row3 inputStep1Row1 mt-4">

            <div className="col-lg-6 pl-lg-0 pr-lg-2">

              {/* <select className="SelectionCountry" name="countryData" value={info2.countryData} onChange={onInputChanged}> */}
              <select className="SelectionCountry" name="countryData" onChange={onInputChanged}>
                <option selected hidden >Select car:</option>
                <option value="Europe"  >Europe</option>
                <option value="United Kingdom" >United Kingdom</option>
                <option value="Other" >Other</option>

              </select>
              {errorData == 4 ? <div className="errorMessage"> Please select Country. </div> : ''}

            </div>



          </div>

        </div>

        <br />
        {/* <span style={{ color: "red" }}>{error}</span> */}

      </FormGroup>



      <ActionButtons {...props} nextStep={validate2} />
    </div>
  );
};

const Three = (props, args) => {
  // console.log("step3 receive user object");
  // console.log(props.user);


  // const [info2, setInfo2] = useState({});
  const [info3, setInfo3] = useState({});
  const [error, setError] = useState("");
  const [errorData, setErrorData] = useState("0");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    // console.log("event", targetName, targetValue)

    if (targetName === "pleaseCheckbox") {
      const targetValue1 = event.target.checked;
      setInfo3((info3) => ({
        ...info3,
        [targetName]: targetValue1
      }));
    }
    else {
      setInfo3((info3) => ({
        ...info3,
        [targetName]: targetValue
      }));
    }
  };



  const handleLastStep = () => {


    // console.log("object", info3.message)

    if (!info3.message) setErrorData(1);
    else if (!info3.pleaseCheckbox) setErrorData(2);
    else {
      setErrorData("");
      props.lastStep();
      props.completeCallback();
      props.userCallback(info3);
      // console.log("Finish")
    }

  };

  const [modal, setModal] = useState(false);
  
  const toggle = () => setModal(!modal);

// console.log(info3.message)

// console.log(info3.pleaseCheckbox)

  return (
    
    <div>

      <div className="row">

        <div className="col-lg-5 d-flex align-items-center "><h3>Step 3/3</h3></div>

        <div className="col-lg-7 d-flex align-items-center justify-content-center">

          <div class="progress progressStep3 ">
            <div class="progress-value" ></div>
          </div>

        </div>

      </div>

      

      <FormGroup>


        <div className="container">

          <div className="row mt-2 ">

            <h3 className="" >Send an optional message</h3>


          </div>


          <div className="row inputStep1Row1 mt-0">

            <div className="col-lg-12 pl-0 pr-2">

              {/* <Label>Name: </Label> */}
              {/* <input type="text" name="name" onChange={onInputChanged} placeholder="Enter your name" /> */}
              {/* <input  type="text" name="address" onChange={onInputChanged} placeholder="Address" /> */}


              <textarea className="Step3CommonInput" id="Step3CommonInput" name="message" onChange={onInputChanged} value={info3.message} rows="4" cols="50" placeholder="Write your message here!">
              </textarea>
              {errorData == 1 ? <div className="errorMessage"> Please select Message. </div> : ''}

            </div>



            <div className="row">

              <div className="col-lg-12">

                <div className="row mt-3 mb-2 ">

                  <div className="col-2 ">


                    <input className='CheckboxInput mx-0 ' type="checkbox" id="featured-6" name="pleaseCheckbox" onChange={onInputChanged} value={info3.pleaseCheckbox} />
                    <label className='Checkboxlabel mb-3 mr-0' for="featured-6" > </label>
                  </div>

                  <div className="col-10  pl-0 pr-0">
                    <span className='PleaseAcceptCheckbox  ' > Please Accept <span className='termsAndConditionsCheckbox' onClick={toggle}> terms and conditions </span> ? </span>
                  </div>

                </div>

                {errorData == 2 ? <div className="errorMessage"> Please Allow Permission. </div> : ''}

              </div>

            </div>



          </div>





        </div>

        <br />
        <span style={{ color: "red" }}>{error}</span>

      </FormGroup>

      <Modal isOpen={modal} toggle={toggle} {...args}>

          <ModalHeader toggle={toggle}>Review:</ModalHeader>
          
          <ModalBody>

          <b>First Name:</b> <p>{props.user.firstname || ""}</p><br/>
          <b>Last Name:</b> <p>{props.user.lastname || ""}</p><br/>
          <b>Email:</b> <p>{props.user.email || ""}</p><br/>
          <b>Telephone:</b> <p>{props.user.phone || ""}</p><br/>
          <b>Age:</b> <p>{props.user.age || ""}</p><br/>
          <b>Gender:</b> <p>{props.user.fav_language || ""}</p><br/>
          <b>Address:</b> <p>{props.user.address || ""}</p><br/>
          <b>City:</b> <p>{props.user.city || ""}</p><br/>
          <b>Postcode:</b> <p>{props.user.postcode || ""}</p><br/>
          <b>Country:</b> <p>{props.user.countryData || ""}</p><br/>

          <b>Message:</b> <p>{props.user.message || ""}</p><br/>
          <b>Accept terms & conditions:</b> <p>{props.user.pleaseCheckbox == true ? "Yes" : "No" }</p><br/>
         
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Privacy & Policy
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>


      {/* <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p> */}

      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  );
};

const AllSteps = () => {

  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);
// let history = useHistory();
let navigate = useNavigate()

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    // console.log("parent receive user callback");
    // console.log("val",val);
    setUser((user) => ({
      ...user,
      ...val
    }));
  };

  const handleStepChange = (e) => {
    // console.log("step change");
    // console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = (event) => {
    // alert("You r done. TQ");
    // history.push("/Extra");
    navigate("/Extra")

    // event.preventDefault();
    // console.log(user)

    const FirstName = user.firstname;
    const LastName = user.lastname;
    const Email = user.email;
    const Phone = user.phone;
    const Age = user.age;
    const Gender = user.fav_language;
    const Address = user.address;
    const City = user.city;
    const Postcode = user.postcode;
    const CountryData = user.countryData;
    const Message = user.message;
    const AcceptTermsAndCondition = user.pleaseCheckbox;


    const data = {FirstName, LastName, Email, Phone, Age, Gender, Address, City, Postcode,CountryData,Message,AcceptTermsAndCondition };
    const responsr =axios
        .post('https://jsonplaceholder.typicode.com/posts', data)
        .then((response) => {
          console.log(response);
          // event.target.reset();
        })
        .catch((error) => {
          console.log(error);
        })

  };




  


  return (
    <>



      <div className=" fullBody   container  bg-white shadow">

        <div className="row1st row d-flex align-item-center justify-content-center">

          <div className=" column1st  col-lg-5 ">

            <div className="rowinrow1st row">

              <div className="rowinrow1stcolumn1st col-lg-9  m-0 p-0">

                <div className="row m-0 p-0">

                  <div className=" imgColumn col-lg-12 col-md-6 pt-md-4 ">
                    <img src="https://icon-library.com/images/web-dev-icon/web-dev-icon-19.jpg" alt="" />
                  </div>

                  <div className=" detailColumn col-lg-12 col-md-6 pt-md-4">
                    <h2 className="text-light" >GIVE AWAY</h2>
                    <p className="text-justify px-md-4 px-lg-4 text-light">Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.</p>
                    <i className=" iconFontRow fa fa-info-circle d-flex align-item-start ml-lg-4 ml-md-4 mb-lg-3 mb-md-3 text-light " aria-hidden="true"></i>
                  </div>

                </div>

              </div>

              <div className="rowinrow1stcolumn2nd col-lg-3   m-0 p-0">

                <Stepper activeStep={activeStep}>
                  <Step label="Step 1" />
                  <Step label="Personal Detail" />
                  <Step label="Confirmation" />
                </Stepper>

              </div>

            </div>

          </div>

          <div className="column2nd col-lg-7">

            {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
            <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
              <One userCallback={assignUser} />
              <Two user={user} userCallback={assignUser} />
              <Three user={user} completeCallback={handleComplete} userCallback={assignUser}  />
            </StepWizard>

          </div>

        </div>

      </div>



    </>
  )
}

export default AllSteps
