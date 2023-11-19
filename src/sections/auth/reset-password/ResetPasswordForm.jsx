// components
import { TextField, Button } from '../../../components';

// ----------------------------------------------------------------------

export default function ResetPasswordForm() {
  return (
    <div className={'register-flow text-center'}>
      <h2 className={'mb-10'}>Reset Password</h2>
      <form className={'register-form'}>
        <TextField
          placeholder={'New Password'}
          type={'password'}
          className={'mb-3'}
        />
        <TextField
          placeholder={'Confirm New Password'}
          type={'email'}
          className={'mb-3'}
        />

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
