/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { TextField, TextareaAutosize } from "@mui/material";
import NoUsersTemplate from "./NoUsersTemplate";

const UserResult = ({selectedUser}) => {
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    if (selectedUser) {
        setTimeout(() => {
          setInputValue(selectedUser);
        }, 400);
  
    }
  }, [selectedUser]);


  let usersLIstCss = [
    {
      padding: "21px 20px",
      borderRadius: "8px 8px 0px 0px",
      background: "#C5DFFF",
      textAlign: "center",
    },
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "70%",
      alignItems: "center",
      margin: "auto",
    },
  ];


  return (
    <div className="user-result-container">
      <h2 style={usersLIstCss[0]}>USERS DETAILS</h2>

      <div className="users-details">
        {
          inputValue ? ( 
            <form style={usersLIstCss[1]}>
          {/* Material-UI Input Field */}
          <div className="image-tittle" style={{ margin: "30px 0", display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center" }}>
            <img
              width="70"
              height="70"
              src={inputValue.avatar}
              style={{borderRadius:"50%"}}
              alt="user-male-circle"
              onError={(e) => {
                e.target.src = "https://img.icons8.com/glyph-neue/64/no-user.png"; // Replace with the URL of your default image
              }}
            />
            <h5 style={{ textAlign: "center", marginTop:"10px"}}>@{inputValue.profile.username}</h5>
          </div>
          <TextareaAutosize
            rowsmin={3}
            placeholder="Text Area"
            value={inputValue.Bio}
            style={{ width: "100%", marginBottom: "16px", padding: "10px", resize:"none",  background: "#DBDBDB", borderRadius:"4px" }}
            readOnly   
        
          />

          <div className="input-list" style={{marginTop: "30px"}}>
          <label htmlFor="textarea">Full Name</label>
            <TextField
              variant="outlined"
              fullWidth
              value={inputValue.profile.firstName}
              style={{ marginBottom: "16px" }}
              InputProps={{
                readOnly: true, // Make the input read-only
                style:{
                    backgroundColor: "#DBDBDB"
                 }
              }}
            />
             
             <label htmlFor="textarea">Job title</label>
            <TextField
              variant="outlined"
              fullWidth
              value={inputValue.profile.lastName}
              style={{ marginBottom: "16px" }}
              InputProps={{
                readOnly: true, // Make the input read-only
                style:{
                    backgroundColor: "#DBDBDB"
                 }
                
              }}
            />

            <label htmlFor="textarea">Email</label>
            <TextField
              variant="outlined"
              fullWidth
              value={inputValue.profile.email}
              style={{ marginBottom: "16px" }}
              InputProps={{
                readOnly: true, // Make the input read-only
                 style:{
                    backgroundColor: "#DBDBDB"
                 }
              }}
            />
          </div>

          {/* Material-UI Text Area */}
        </form>
          ) : ( <NoUsersTemplate />)
        }
      </div>
    </div>
  );
};

export default UserResult;
