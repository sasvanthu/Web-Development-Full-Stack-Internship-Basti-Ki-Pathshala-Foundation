import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin');
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(response.data);
      } catch (error) {
        alert('Error fetching users');
        navigate('/admin');
      }
    };

    fetchUsers();
  }, [navigate]);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setUsers(users.map(user => user._id === id ? { ...user, approved: true } : user));
    } catch (error) {
      alert('Error approving user');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Skills</th>
            <th className="border p-2">Availability</th>
            <th className="border p-2">Bio</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">{user.skills}</td>
              <td className="border p-2">{user.availability}</td>
              <td className="border p-2">{user.bio}</td>
              <td className="border p-2">{user.approved ? 'Approved' : 'Pending'}</td>
              <td className="border p-2">
                {!user.approved && (
                  <button onClick={() => handleApprove(user._id)} className="bg-green-500 text-white px-2 py-1 rounded">Approve</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
