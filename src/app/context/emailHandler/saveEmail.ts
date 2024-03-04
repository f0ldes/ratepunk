import React, { Dispatch, SetStateAction } from 'react';
import { AppContextType } from "../AppContext";

const referalMaker = (email: string) => {
    let referalCode;
    if (email) {
        let count = 0;
        let code = [];
        for (let i = 0; i < email.length; i++) {
            count++
            if (count % 2 !== 0) {
                if (email[i] !== '@' && email[i] !== '.'){
                    code.push(email[i]);
                }
            }
        }
        referalCode = code.join('');
    };
    return referalCode;
};

const checkEmail = (email:string, error:string, setError: Dispatch<SetStateAction<string>>) => {
  let validationResult = '';
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email) {
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      validationResult = 'Please enter a correct email.';
      setError(validationResult);
    } else {
      validationResult = 'emailOk';
      setError('');
    }
  } else {
    validationResult = 'Email is required.';
    setError(validationResult);
  };

  return validationResult;
};

const updateEmailAndReferral = async (email: string, setReferalCode: AppContextType['setReferalCode']) => {
  const binId = process.env.NEXT_PUBLIC_BIN_ID; 
  const apiKey = '$2a$10$BgQIPNNJM7rlgiayuEu86.svGm6hD4HkrrW7RZLOp1Pus0OchDLRq';
  
    try {
      const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': apiKey || ''
        },
        body: JSON.stringify({ email })
      });
  
      if (response.ok) {
        let uniqueReferal = referalMaker(email)
        setReferalCode(`https://ratepunk.com/${uniqueReferal}`);
      } else {
        console.error('Failed to update emial.');;
      }
    } catch (error) {
      console.error('Error updating email:', error);
    }
};
  
export {
  updateEmailAndReferral,
  checkEmail
};