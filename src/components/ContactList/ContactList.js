import { List, Item, ListItemBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onGetText = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts =  onGetText();

  return ( 
  <List>
 {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>{name} </p>
          <p>{number}</p>
          <ListItemBtn
            type="button"
            onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ListItemBtn>
          </Item>
          ))}
  </List>
);
};

