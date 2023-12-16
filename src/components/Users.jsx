/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon, TextField, Typography } from "@mui/material";
import Shimmer from "./Shimmer";

const Users = ({ users, onUserClick }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetching delay
    const fetchData = async () => {
      setLoading(true);
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSelectedIndex(null); // Reset selected index when searching
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    `${user.profile.firstName} ${user.profile.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    onUserClick(filteredUsers[index]);
  };

  let usersListCss = [
    {
      padding: "21px 20px",
      borderRadius: "8px 8px 0px 0px",
      background: "#C5DFFF",
      margin: "10px 0",
      textAlign: "center",
    },
    {
      borderRadius: "4px",
      background: "#ECECEC",
      margin: "10px 0",
    },
    {
      background: "#918e8eca",
    },
  ];

  return (
    <div className="user-list-container">
      <h2 style={usersListCss[0]}>USERS LIST</h2>
      <Box className="user-list-container-list">
        <TextField
          label="Search Username"
          variant="outlined"
          style={{ width: "100%", margin: "10px 0" }}
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {loading ? (
          Array(7).fill(null).map((_, index) => <Shimmer key={index} />)
        ) : filteredUsers.length === 0 ? (
          <Typography variant="body1" color="textSecondary" align="center">
            No users found!
          </Typography>
        ) : (
          <List component="nav" aria-label="main mailbox folders">
            {filteredUsers.map((items, index) => (
              <ListItemButton
                key={index}
                style={{
                  ...usersListCss[1],
                  ...(selectedIndex === index && usersListCss[2]),
                }}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemIcon>
                  <img
                    width="50"
                    height="50"
                    src={items.avatar}
                    alt="user-male-circle"
                    onError={(e) => {
                      e.target.src = "https://img.icons8.com/glyph-neue/64/no-user.png";
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={items.profile.firstName + " " + items.profile.lastName}
                />
              </ListItemButton>
            ))}
          </List>
        )}
      </Box>
    </div>
  );
};

export default Users;