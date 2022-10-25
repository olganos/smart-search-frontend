import { useRef } from 'react';
import { Input, InputGroup, Button, Form } from 'reactstrap';
import { useDispatch } from 'react-redux';

import { search } from '../../services/search-service';

export default function Search() {
  const inputSearch = useRef(null);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputSearch.current.value) {
      return;
    }
    dispatch(search(inputSearch.current.value));
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup style={{ "width": "250px" }} size="sm">
        <Input
          placeholder="write something"
          innerRef={inputSearch}
        />
        <Button
          color="secondary"
          outline
        >
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}