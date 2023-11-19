import { useState } from 'react';
// sections
import {
  FullNameForm,
  CreateAccountForm,
  CreateVPSForm,
  EmailConfirm,
  RegisterSuccess,
  CodeConfirm,
} from '../../sections/auth/register';
// components
import { TabsStyled } from '../../components';

// ----------------------------------------------------------------------

export default function Register() {
  const [firstStep] = useState(false);
  const tabData = {
    tabHeader: [
      {
        label: 'Create account',
      },
      {
        label: 'Verify account',
      },
      {
        label: 'Payment',
      },
      {
        label: 'Create VPS',
      },
    ],
    tabBody: [
      {
        node: <CreateAccountForm />,
      },
      {
        node: <CodeConfirm />,
      },
      {
        node: <EmailConfirm />,
      },
      {
        node: <CreateVPSForm />,
      },
    ],
  };

  return firstStep ? (
    <FullNameForm />
  ) : (
    <TabsStyled tabHeader={tabData.tabHeader} tabBody={tabData.tabBody} />
  );
}
