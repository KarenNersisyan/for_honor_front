// components
import { Button } from '../../../components';

// ----------------------------------------------------------------------

export default function EmailConfirm() {
  return (
    <div className={'register-flow text-center'}>
      <h2 className={'mb-6'}>Email confirmed</h2>
      <div className={'register-form pl-8 pr-8 pt-6'}>
        <Button
          label={'Next'}
          color={'primary'}
          variant={'contained'}
          fullWidth
        />
      </div>
    </div>
  );
}
