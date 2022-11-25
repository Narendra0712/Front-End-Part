import React, {useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function UserHome () {
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:9009/image/uploadImage";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
      toast.success("Image Upload Succesfull !");
    });
  }

  return (
    <>
      <div id="page-content-wrapper">
        <div className="wrapper">
          <h2 className="fs-2 m-0 py-5 px-5">Welcome to Image Uploader</h2>
        </div>
        <section className="wrapper">
          <form className="form-right" onSubmit={handleSubmit}>
            <h2>Add Your Files For Upload</h2>
            <input type="file" class="form-control" onChange={handleChange} />
            <button type="submit" class="register mt-5 mb-5 ml-5">
              Upload
            </button>
            <p className="text-left">
              Click
              <a href="UserUploadedFiles"> Here </a>
              to View Uploaded Files
            </p>
          </form>
        </section>
      </div>
    </>
  );
};

export default UserHome;
