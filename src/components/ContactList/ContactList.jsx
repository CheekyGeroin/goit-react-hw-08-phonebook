import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/contactOperations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Item, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  const normalizedContacts = filter.toLowerCase();
  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContacts)
  );
  
  const onBtnDelete = (id) => {
   dispatch(deleteContact(id))
 }

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button
              onClick={() => {
                onBtnDelete(id)
              }}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </ul>
  );
};
