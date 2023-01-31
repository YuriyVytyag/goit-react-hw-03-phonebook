import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import {
  Input,
  FormWrapper,
  ErrorText,
  LabelStyle,
  Title,
  Btn,
} from './PhoneBook.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});
const initialValues = {
  name: '',
  number: '',
};
export const PhoneBookForm = ({ checkDuplicateName, addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    checkDuplicateName(values.name)
      ? alert(`This ${values.name} exist`)
      : addContact(values);
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormWrapper autoComplete="off">
        <LabelStyle htmlFor="name">
          <Title>Name</Title>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage
            name="name"
            component="div"
            render={msg => (
              <ErrorText>
                Name may contain only letters, apostrophe, dash and spaces. For
                example Adrian, Jacob Mercer, Charles de Batz de Castelmore
                d'Artagnan
              </ErrorText>
            )}
          />
        </LabelStyle>

        <LabelStyle htmlFor="number">
          <Title>Number</Title>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage
            name="number"
            component="div"
            render={msg => (
              <ErrorText>
                Phone number must be digits and can contain spaces, dashes,
                parentheses and can start with +
              </ErrorText>
            )}
          />
        </LabelStyle>
        <Btn type="submit">Add Contact</Btn>
      </FormWrapper>
    </Formik>
  );
};
