import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', skills: '', availability: '', bio: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', formData);
      alert('Registration successful!');
      navigate('/');
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Register as Intern/Volunteer</h2>
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <input name="skills" placeholder="Skills" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <input name="availability" placeholder="Availability" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <textarea name="bio" placeholder="Short Bio" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default Register;
