// components
import { Button } from '../../../components';

// ----------------------------------------------------------------------

export default function RegisterSuccess() {
  return (
    <div className={'register-flow text-center'}>
      <h3 className={'mb-6'}>
        Congratulations, you have successfully <br /> onboarded and created your
        VPS.
      </h3>
      <p className={'color-gray mb-10'}>
        {
          'Remember, please allow up to 5-10 minutes to receive your VPS credentials'
        }
      </p>
      <div className={'register-form pl-8 pr-8 pt-6'}>
        <Button
          label={'Access User Dashboard'}
          color={'primary'}
          variant={'contained'}
        />
      </div>
    </div>
  );
}
