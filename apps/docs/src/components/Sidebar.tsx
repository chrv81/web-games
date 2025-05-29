import { Link } from 'react-router-dom';

const sections = ['index', 'structure'];

const Sidebar = ({ app }: { app: string }) => {
  return (
    <div className='w-64 bg-gray-100 p-4 border-r'>
      <h2 className='text-lg font-bold mb-4'>{app} Docs</h2>
      <ul className='space-y-2'>
        {sections.map((section) => (
          <li key={section}>
            <Link
              to={`/${app}/${section}`}
              className='text-blue-600 hover:underline'
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
