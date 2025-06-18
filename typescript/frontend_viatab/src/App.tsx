import { Route, Routes, NavLink } from 'react-router-dom';
import Department from './components/Department';

const departments = ['Engineering', 'Health', 'Business'];

export default function App() {
  return (
    <>
      <nav>
        {departments.map((dep) => (
          <NavLink
            key={dep}
            to={`/${dep.toLowerCase()}`}
            className={({ isActive }) =>
              `tab-link${isActive ? ' active' : ''}`
            }
          >
            {dep}
          </NavLink>
        ))}
      </nav>
      <Routes>
        {departments.map((dep) => (
          <Route
            key={dep}
            path={`/${dep.toLowerCase()}`}
            element={<Department name={dep} />}
          />
        ))}
      </Routes>
    </>
  );
}