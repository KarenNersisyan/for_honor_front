// components
import { TextField, Button } from '../../../components';

// ----------------------------------------------------------------------

export default function CreateVPSForm() {
  return (
    <div className={'register-flow text-center'}>
      <h2 className={'mb-6'}>Create your VPS</h2>
      <p className={'color-gray mb-10'}>
        {'Please allow up to 5-10 minutes to receive your VPS credentials'}
      </p>
      <form className={'register-form'}>
        <TextField placeholder={'First name'} className={'mb-3'} />
        <TextField placeholder={'Last name'} className={'mb-3'} />
        <TextField placeholder={'Email'} type={'email'} className={'mb-3'} />
        <TextField
          placeholder={'Confirm email address'}
          type={'email'}
          className={'mb-3'}
        />
        <Button
          label={'Create my VPS'}
          color={'primary'}
          variant={'contained'}
          fullWidth
        />
      </form>
    </div>
  );
}
