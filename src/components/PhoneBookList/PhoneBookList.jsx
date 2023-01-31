import { PhoneBookItem } from './PhoneBookItem';

export const PhoneBookList = ({ contactList, onDeleteContact }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <PhoneBookItem
          onDeleteContact={onDeleteContact}
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </ul>
  );
};
