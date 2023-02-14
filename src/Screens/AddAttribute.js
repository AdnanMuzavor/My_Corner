import React from "react";
import { useState } from "react";
import Axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { getmessages } from "../Actions/Messageaction";

import SkillCard from "../Components/SkillCard";
import Card from "../Components/ProjectCard";
import Galleryimg from "../Components/Galleryimg";
import ExpCard from "../Components/ExpCard";
import Contactcard from "../Components/Contactcard";
const Adder = (props) => {
  const history = useHistory();

  const AdminLogin = useSelector((state) => state.AdminLogin);
  const { loading, admin, error } = AdminLogin;

  const [Image, setImage] = useState("");
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submi2 = async () => {
    const obj = {
      email: email,
      password: password,
    };
    try {
      const login = await fetch("/api/admin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const done = await login.json();
      console.log(done);
    } catch (e) {
      console.log(encodeURIComponent);
    }
  };
  //To get the messages
  const dispatch = useDispatch();
  const Messages = useSelector((state) => state.Messages);
  const { messages, loading: messageload, error: messageerror } = Messages;
  useEffect(() => {
    if (admin.Message !== "Verified User") {
      history.push("/login");
    }
    if (messages.length == 0) {
      dispatch(getmessages());
    }
  }, []);

  //To keep track of seleted category i.e skill,project,gallery
  const [category, setcategory] = useState("skill");

  //Data format to be sent to backend
  const [toupload, settoupload] = useState({
    result: "",
    content: "",
    cartegory: "",
  });

  //Content of skill (skill-name)/(project-name)
  const [data1, setdata1] = useState("");
  //Project Description/Gallery image discription
  const [data2, setdata2] = useState("");
  //Github link
  const [data3, setdata3] = useState("");
  //gallery filter link
  const [data4, setdata4] = useState("");

  //Title setter
  const Titlesetter = (e) => {
    setdata1(e.target.value);

    settoupload((prev) => {
      return { ...prev, category: category };
    });
  };

  //Content/Description setter
  const Contentsetter = (e) => {
    setdata2(e.target.value);
    settoupload((prev) => {
      return {
        ...prev,
        category: category,
      };
    });
  };

  //Github link setter
  const Githubsetter = (e) => {
    setdata3(e.target.value);
  };

  const uploadFileHandler = async (e) => {
    settoupload((prev) => {
      return {
        ...prev,
        content: data1 + "&&" + data2 + "&&" + data3 + "&&" + data4,
      };
    });
    console.log(toupload);
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post("/api/upload", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(data.image);
      setImage(data.image);
      settoupload((prev) => {
        return { ...prev, result: data };
      });
      console.log(data);
      setLoadingUpload(false);
      setErrorUpload("noerror");
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  //To dispatch action
  const submitter = async () => {
    try {
      const addpost = await fetch("/api/mydata/postdata", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(toupload),
      });
      const postadded = await addpost.json();
      console.log(postadded);
    } catch (e) {
      console.log(e);
    }
    alert("Data Uploaded!");
    setdata1("");
    setdata2("");
    setdata3("");
    setdata4("");
    setImage("");
    settoupload({ result: "", content: "", category: "" });
    setErrorUpload("");
  };
  return (
    <>
      <div className="container mt-4">
        <div className="row flexer">
          <button
            className={`col-md-2 ms-2 col-lg-2 ms-2 col-3 ms-2 flexer btn ${
              category === "skill" ? "selected" : ""
            }`}
            onClick={() => setcategory("skill")}
          >
            <h6 className="text-center">Skill</h6>
          </button>
          <button
            className={`col-md-2 ms-2 col-lg-2 ms-2 col-3 ms-2 flexer btn ${
              category === "project" ? "selected" : ""
            }`}
            onClick={() => setcategory("project")}
          >
            <h6 className="text-center">Project</h6>
          </button>
          <button
            className={`col-md-2 ms-2 col-lg-2 ms-2 col-3 ms-2 flexer btn ${
              category === "experience" ? "selected" : ""
            }`}
            onClick={() => setcategory("experience")}
          >
            <h6 className="text-center">Experience</h6>
          </button>
          <button
            className={`col-md-2 ms-2 col-lg-2 ms-2 col-3 ms-2 flexer btn ${
              category === "gallery" ? "selected" : ""
            }`}
            onClick={() => setcategory("gallery")}
          >
            <h6 className="text-center">Gallery</h6>
          </button>
        </div>
      </div>
      <div className="container contact_div">
        <div className="row" data-aos="zoom-out">
          <div className="col-md-6 col-lg-6 col-10 mx-auto">
            <div className="row flexer2">
              <div className="col-md-8 col-lg-6 col-10 ">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    {category === "skill" ? "Skill name" : "Project name"}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder={
                      category === "skill" ? "Skill name" : "Project name"
                    }
                    value={data1}
                    onChange={Titlesetter}
                  />
                </div>
                {category === "project" || category === "gallery" ? (
                  <>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        {category === "project" ? "Project info" : "Image Info"}
                      </label>
                      <input
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder={
                          category === "project" ? "Project info" : "Image Info"
                        }
                        value={data2}
                        onChange={Contentsetter}
                      />
                    </div>
                    {category === "gallery" ? (
                      <div class="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Filter (Website/ReactJS/HTML/CSS/JS)
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Filter (Website/ReactJS/HTML/CSS/JS)"
                          value={data4}
                          onChange={(e) => setdata4(e.target.value)}
                        />
                      </div>
                    ) : null}
                  </>
                ) : null}
                {category === "project" ? (
                  <>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Github link
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Github link"
                        value={data3}
                        onChange={Githubsetter}
                      />
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Filter (Website/ReactJS/HTML/CSS/JS)
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Hosted Link"
                        value={data4}
                        onChange={(e) => setdata4(e.target.value)}
                      />
                    </div>
                  </>
                ) : null}
                {category === "experience" ? (
                  <>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Comapny name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Comapny name"
                        value={data2}
                        onChange={(e) => setdata2(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Roles
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Roles as intern"
                        value={data3}
                        onChange={(e) => setdata3(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        Skills
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Skills gained/used"
                        value={data4}
                        onChange={(e) => setdata4(e.target.value)}
                      />
                    </div>
                  </>
                ) : null}
                {loadingUpload === false && errorUpload === "" ? (
                  <div class="mb-3">
                    <label htmlFor="imageFile">Image File</label>
                    <input
                      type="file"
                      id="imageFile"
                      label="Choose Image"
                      onChange={uploadFileHandler}
                    />
                  </div>
                ) : (
                  <div className="mb-3">
                    <h4>
                      {errorUpload === "noerror" ? "Uploaded" : "Uploading..."}
                    </h4>
                  </div>
                )}

                {/* <label htmlFor="imageFile">Image File</label>
                <input
                  type="file"
                  id="imageFile"
                  label="Choose Image"
                  onChange={uploadFileHandler}
                ></input> */}

                <div className="col-12 mx-auto " data-aos="zoom-out">
                  <button
                    className="btn btn-outline-primary anima mx-auto "
                    type="submit"
                    onClick={submitter}
                  >
                    Submit {category}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 col-md-10 col-lg-10 col-12 mx-auto">
            {category === "skill" ? (
              <SkillCard
                title={data1 !== "" ? data1 : "skill-name"}
                content={data2}
                img={Image}
                value={10}
                ind={10 + 1}
              />
            ) : category === "project" ? (
              <Card
                key={10 + 1}
                img={Image}
                title={data1}
                content={data2}
                link={data3}
                btn="Explore More!"
              />
            ) : category === "gallery" ? (
              <Galleryimg
                im={Image}
                key={100}
                ind={100}
                brief={data2}
                title={data1}
                noanim={true}
              />
            ) : (
              <ExpCard img={Image} content={data3} title={data2} />
            )}
          </div>
        </div>
      </div>
      <div className="row ms-2 mt-4 mt-4">
        <h1 className="text-center mb-3">Messages here</h1>
        {messageload ? (
          <h1>Loading</h1>
        ) : (
          messages.map((e, i) => {
            return (
              <>
                <Contactcard
                  name={e.name}
                  email={e.email}
                  message={e.message}
                />
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default Adder;
