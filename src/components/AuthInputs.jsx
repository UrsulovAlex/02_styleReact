import { useState } from 'react';
import { styled } from 'styled-components';

import Button from '../ui/Button';
import CustomInput from '../ui/CustomInput';
import Input from '../ui/Input';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <>
      <div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
        <ControlContainer>
            <CustomInput
              label="Email"
              type="email"
              invalid={emailNotValid}
              onChange={(event) => handleInputChange('email', event.target.value)}
            />

            <CustomInput
              label="Password"
              type="password"
              invalid={passwordNotValid}
              onChange={(event) =>
                handleInputChange('password', event.target.value)
              }
            />
            {/* <Label className={`label ${emailNotValid ? 'invalid' : ''}`}>Password</Label>
            <Input
              type="password"
          //  style={{
          //   backgroundColor: emailNotValid ? 'red' : '#d1d5db',
          //  }}
              className={passwordNotValid ? 'invalid' : undefined}
              onChange={(event) =>
                handleInputChange('password', event.target.value)
              }
            /> */}
        </ControlContainer>
        <div className='flex flex-col gap-2 mb-6'>
          <Input
            label="Email"
            type="email"
            invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)} />
          <Input
              label="Password"
              type="password"
              invalid={passwordNotValid}
              onChange={(event) => handleInputChange('password', event.target.value)} />
          
        </div>
        {/* <div className="actions"> */}
        <div className="flex justify-end gap-4">
          <button type="button" className="text-amber-400 hover:text-amber-400">
            Create a new account
          </button>
          <Button onClick={handleLogin}>Sign In</Button>
        </div>
      </div>
      <p className="paragraph"> module css </p>
    </>
  );
}
