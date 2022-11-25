import axios from "axios";

export const ADDUSER = "http://localhost:9009/user/addUser";
export const USERLOGIN = "http://localhost:9009/user/login";
export const GETUSER = "http://localhost:9009/user/viewprofile/";
export const GETALLIMAGES = "http://localhost:9009/image/getImages";
export const DELETEIMAGE = "http://localhost:9009/image/delete?imageid="

class userservices {
  getUserById(userid) {
    return axios.get(GETUSER + userid);
  }
  getAllImages() {
    return axios.get(GETALLIMAGES);
  }

  deleteImage(imageid) {
    return axios.delete(DELETEIMAGE + imageid);
  }
}

export default new userservices();
