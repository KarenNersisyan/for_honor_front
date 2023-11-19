import { Link } from 'react-router-dom';
// components
import { Button, CodeField } from '../../../components';

// ----------------------------------------------------------------------

export default function CodeConfirm() {
  return (
    <div className={'register-flow text-center'}>
      <h2 className={'mb-6'}>Confirm email address</h2>
      <p className={'color-gray mb-10'}>
        {'Please enter the 5 digit verification code sent to your email'}
      </p>
      <form className={'register-form size-md pt-2'}>
        <CodeField />
        <Button
          label={'Verify'}
          className={'mt-4'}
          color={'primary'}
          variant={'contained'}
          fullWidth
        />
      </form>
      <p className={'color-gray pt-4'}>
        {"Didn't receive the email?"}
        <Link to={'/'} className={'text-underline pl-1'}>
          Resend
        </Link>
      </p>
    </div>
  );
}
