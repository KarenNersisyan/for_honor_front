// components
import { TextField, Button } from '../../../components';

// ----------------------------------------------------------------------

export default function FullNameForm() {
  return (
    <div className={'register-flow text-center'}>
      <h2 className={'mb-6'}>Welcome</h2>
      <p className={'color-gray mb-10'}>
        {"Let's get you onboarded and your VPS created"}
      </p>
      <form className={'register-form'}>
        <TextField placeholder={'Lorem'} className={'mb-3'} />
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
