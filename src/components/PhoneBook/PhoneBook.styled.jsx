import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  width: 600px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 20px;

  border: 1px solid black;
`;

export const Input = styled(Field)`
  border: 1px solid blue;
  margin: 10px 0;
`;

export const ErrorText = styled.div`
  display: flex;
  font-size: initial;
  text-align: center;

  color: red;
`;
export const LabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
`;
export const Btn = styled.button`
  margin: 0;
  padding: 0;
  font-size: 18px;
`;
