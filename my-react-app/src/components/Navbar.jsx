import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 shadow flex gap-4">
      <Link to="/" className="text-blue-600 hover:underline">Home</Link>
      <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
    <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
    <Link to= "/groups" className= "text-blue-600 hover:underline"> Groups </Link>
    <Link to= "groupdetails" className="text-blue-600 hover:underline"> Group Details</Link>
    <Link to="dashboard" className="text-blue-600 hover:undeline">Dashboard</Link>
    <Link to="creategroups" className="text-blue-600 hover:underline">Create Groups</Link>

    </nav>
  );
}