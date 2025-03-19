import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <ul>
                <li className="mb-3">
                    <Link to="/" className="hover:text-gray-400">Customer Management</Link>
                </li>
                <li>
                    <Link to="/stats" className="hover:text-gray-400">Customer Stats</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;