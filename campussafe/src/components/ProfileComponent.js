import React, { useEffect, useState } from "react";
import './ProfileComponent.css';
import { auth } from "../firebase";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const ProfileComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the current user
        const currentUser = auth.currentUser;

        if (currentUser) {
          // Get user data from Firestore
          const userDocRef = await doc(db, 'users', "crVx7mVIUpeuQUgNfZev");
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setUser(userData);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    // Call the function to fetch user data
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <div id="profile-container">
        {user && (
          <>
            <div className="user-info">
              <label htmlFor="username">Username:</label>
              <span id="username">{user.userName}</span>
            </div>

            <div className="user-info">
              <label htmlFor="email">Email:</label>
              <span id="email">{user.email}</span>
            </div>

            {/* Add more user information fields as needed */}
          </>
        )}

        <button onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  );
};

export default ProfileComponent;