import { Link } from 'react-router-dom';
// components
import { TextField, Button } from '../../../components';
// paths
import { PATH_AUTH } from '../../../routes/paths';

// ----------------------------------------------------------------------

export default function ForgotPasswordForm() {
  return (
    <div className={'register-flow text-center'}>
      <h2 className={'mb-10'}>Forgot Password</h2>
      <form className={'register-form'}>
        <TextField placeholder={'Email'} type={'email'} className={'mb-3'} />

        <Button
          label={'Submit'}
          color={'primary'}
          variant={'contained'}
          fullWidth
        />
      </form>
    </div>
  );
}
