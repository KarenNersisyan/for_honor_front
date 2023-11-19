// components
import { TextField, Button } from '../../../components';

// ----------------------------------------------------------------------

export default function CreateAccountForm() {
  return (
    <div className={'register-flow text-center'}>
      <h2 className={'mb-6'}>Create account</h2>
      <p className={'color-gray mb-10'}>
        {'Please enter your email and create a password'}
      </p>
      <form className={'register-form'}>
        <TextField placeholder={'Email'} type={'email'} className={'mb-3'} />
        <TextField
          placeholder={'Password'}
          type={'password'}
          className={'mb-3'}
        />
        <TextField
          placeholder={'Confirm Password'}
          type={'password'}
          className={'mb-3'}
        />
        <Button
          label={'Next'}
          color={'primary'}
          variant={'contained'}
          fullWidth
        />
      </form>
    </div>
  );
}
