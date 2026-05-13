import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ImageKit App</h1>

      <div className="flex gap-4">
        <Link to="/">Feed</Link>
        <Link to="/upload">Upload</Link>
      </div>
    </nav>
  );
}

export default Navbar;
