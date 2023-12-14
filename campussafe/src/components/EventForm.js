import React, { useState } from 'react';
import { auth, db } from "../firebase"; // Assuming 'db' is your Firestore instance
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebase from 'firebase/app';
import './LoginForm.css';

export const LoginForm = () => {
  const [type, setType] = useState('');
  const [eventDescription, setDescription] = useState('');
  const [eventLocation, setLocation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // Check if the user is authenticated
      const user = auth.currentUser;
      if (!user) {
        setError("User not authenticated");
        return;
      }

      // Create a new event document
      const eventDocRef = await addDoc(collection(db, 'events'), {
        eventType: type,
        description: eventDescription,
        location: eventLocation,
        uid: user.uid,
      });

      console.log('Event submitted successfully with ID:', eventDocRef.id);

      // Optionally, you can navigate to another page after submission
      navigate('/map');
    } catch (error) {
      console.error('Error submitting:', error.message);
      setError('Error submitting event');
    }
  };

  return (
    <div className="event-form-container">
      <h1>Incident Report</h1>

      <form>
        <label htmlFor="Event Type">Event Type:</label>
        <input type="text" placeholder="Event Type" value={type} onChange={(e) => setType(e.target.value)} />

        <label htmlFor="Event Description">Event Description:</label>
        <input type="text" placeholder="Event Description" value={eventDescription} onChange={(e) => setDescription(e.target.value)} />

        <label htmlFor="Event Location">Event Location:</label>
        <input type="text" placeholder="Event Location" value={eventLocation} onChange={(e) => setLocation(e.target.value)} />
        
        <button onClick={handleSubmit} type="button">Submit</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;