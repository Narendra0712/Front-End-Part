import React, { useEffect, useState } from "react";
import userservices from "../services/userservices";
export const UserUploadedFiles = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getAllImages();
  }, []);
  const getAllImages = () => {
    userservices
      .getAllImages()
      .then((response) => {
        setImages(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delImage = (imageid) => {
    userservices
      .deleteImage(imageid)
      .then((response) => {
        getAllImages();
        console.log("Getting");
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  };

  return (
    <>
      <div className="wrapper">
        <h2 class="fs-2 m-0 py-5 px-5">Uploaded Images</h2>
      </div>
      <section className="intro">
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card shadow-2-strong">
                  <div className="card-body">
                    <div className="table-responsive">
                    <h5>** Plese note down your unique code for download image </h5>
                    <br></br><hr></hr>
                      <table className="table table-borderless mb-0">
                        <thead>
                          <tr>
                            <th className="text-dark">Image Name</th>
                            <th className="text-dark">Image</th>
                            <th className="text-dark">Type</th>
                            <th className="text-dark">Unique Code</th>
                            <th className="text-dark">Action</th>
                          </tr>
                        </thead>
                        {
                          <tbody>
                            {images.map((images) => (
                              <tr key={images.id}>
                                <td>{images.fileName}</td>
                                <img
                                  source={images.content}
                                  style={{ width: 200, height: 200 }}
                                />
                                <td>{images.fileType}</td>
                                <td>{images.uniqueCode}</td>
                                { <td>
                                  <button
                                  type="button"
                                  className="btn btn-danger btn-sm px-3 ms-3"
                                  onClick={() => delImage(images.imageid)}
                                >
                                  Delete
                                  <i className="fas fa-times"></i>
                                </button>
                              </td> }
                              </tr>
                            ))}
                          </tbody>
                        }
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserUploadedFiles;
