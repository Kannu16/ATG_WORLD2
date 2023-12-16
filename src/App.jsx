import { useEffect, useState } from "react";
import UserResult from "./components/UserResult";
import Users from "./components/Users";
import axios from "axios";
import Errorpage from "./components/Errorpage";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
      setUsers(response.data.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <div className="main-body">
        {error ? (
          <Errorpage />
        ) : (
          <>
            <Users users={users} onUserClick={handleUserClick} />
            <UserResult selectedUser={selectedUser} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
