
import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { postmessage } from "../Actions/Messageaction";
import Media from "../Components/Mediaicons";
function Contact() {
  // const [name,setname]=useState();
  // const [email,setemail]=useState();
  // const [pw,setpw]=useState();
  // const [phno,setphno]=useState();
  const dispatch = useDispatch();
  const [details, setdetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [val, setval] = useState();

  const Changetrack = (event) => {
    const { name, value } = event.target;
    setdetails((oldval) => {
      return {
        ...oldval,
        [name]: value,
      };
    });
  };

  const submitted = () => {
    if (details.name === "" || details.message === "" || details.email === "") {
      alert("Please fill in all the details dear");
    } else {
      dispatch(postmessage(details));

      setdetails((oldval) => {
        return {
          ...oldval,
          name: "",
          email: "",
          message: "",
        };
      });
    }
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center" data-aos="zoom-out-down">
          Connect with me
        </h1>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="container contact_div">
        <div className="row" data-aos="zoom-out">
          <div className="col-md-6 col-lg-6 col-10 mx-auto">
            <div className="row flexer2">
              <div className="col-md-8 col-lg-6 col-10 ">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter your name"
                    name="name"
                    value={details.name}
                    onChange={Changetrack}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    value={details.email}
                    onChange={Changetrack}
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your Message"
                    name="message"
                    value={details.message}
                    onChange={Changetrack}
                  ></textarea>
                </div>
                <div className="col-12 mx-auto ">
                  <button
                    className="btn btn-outline-primary anima mx-auto "
                    type="submit"
                    onClick={submitted}
                  >
                    Submit form
                  </button>
                </div>
                <Media />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
