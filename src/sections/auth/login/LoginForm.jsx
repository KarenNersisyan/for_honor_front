import { Link } from 'react-router-dom';
// components
import { TextField, Button } from '../../../components';
// paths
import { PATH_AUTH } from '../../../routes/paths';

// ----------------------------------------------------------------------

export default function LoginForm() {
  return (
    <div className={'register-flow text-center'}>
      <h2 className={'mb-10'}>Welcome Back</h2>
      <form className={'register-form'}>
        <TextField placeholder={'Email'} type={'email'} className={'mb-3'} />
        <TextField
          placeholder={'Password'}
          type={'password'}
          className={'mb-3'}
        />

        <div className='pt-1 pb-6 text-right'>
          <Link
            to={PATH_AUTH.forgotPassword}
            className={'color-gray text-underline'}
          >
            {'Forgot Password'}
          </Link>
        </div>

        <Button
          label={'Login'}
          color={'primary'}
          variant={'contained'}
          fullWidth
        />
      </form>
    </div>
  );
}
