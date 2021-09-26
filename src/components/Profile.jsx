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
      data: {
        grant_type: 'authorization_code',
        client_id: 'q7lLdtHenTYVhpf9dMUN6uGg2lhcSPw6',
        client_secret: 'Sk4iCwDUqJ8M9yHMqphaOj7WdFdorFMA3uSDL_0UT3ZPcLUEvkSiR9TLCSJNEdyw',
        // code: 'YOUR_AUTHORIZATION_CODE',
        redirect_uri: `${window.location.origin} + /profile `
      }
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
