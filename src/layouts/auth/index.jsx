import { Outlet } from 'react-router-dom';
import { Logo } from '../../components';

// ----------------------------------------------------------------------

export default function AuthLayout() {
  return (
    <div className={'auth-layout'}>
      <div className='container'>
        <div className='layout-header'>
          <Logo />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
