import { Item } from './PhoneBookList.styled';
export const PhoneBookItem = ({ name, number, id, onDeleteContact }) => (
  <Item>
    <span>{name}:</span>
    <span>{number}</span>
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </Item>
);
