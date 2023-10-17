import { List, Item, ListItemBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = ({ handleDelete }) => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onGetText = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(normalizedFilter);
    });
  };
  const deleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <List>
        {onGetText().map(contact => (
          <Item key={contact.id}>
            {contact.name} - {contact.number}
            <ListItemBtn 
              className="button-delete" 
              type="button" 
              onClick={() => {
                deleteContact(contact.id);
                handleDelete(contact.id); // Викликаємо handleDelete з ідентифікатором контакту
              }}
            >
              Delete
            </ListItemBtn>
          </Item>
        ))}
      </List>
    </div>
  );
};

