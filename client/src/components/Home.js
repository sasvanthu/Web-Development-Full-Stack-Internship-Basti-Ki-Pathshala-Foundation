import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Intern/Volunteer Management</h1>
      <p className="text-lg mb-6">Join our team of passionate volunteers and interns!</p>
      <Link to="/register">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
      </Link>
      <Link to="/admin" className="mt-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded">Admin Login</button>
      </Link>
    </div>
  );
}

export default Home;
