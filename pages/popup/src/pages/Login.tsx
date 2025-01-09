import instance from '@src/utils/axios-instance';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
  const fetchApi = async () => {
    try {
      const users = await instance.get('/users');
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('event')}>
        Navigate to <span className="font-bold">Event Page</span>
      </button>
    </div>
  );
}
