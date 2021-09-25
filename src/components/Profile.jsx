import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Encouragement from "./Encouragement";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log(user);
    fetch(`${process.env.REACT_APP_SERVERURL}/auth`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ auth0Id: user.sub }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-page">
        <img className="profile-pic" src={user.picture} alt={user.name} />
        <h2 className="welcome"> Welcome {user.name}! Enjoy Koru. </h2>
        <p>{user.email}</p>
        <Encouragement className="encouragement" />
      </div>
    )
  );
};

export default Profile;
