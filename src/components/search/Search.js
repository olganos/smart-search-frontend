import { Input, InputGroup, Button, Form } from 'reactstrap';

export default function Search() {
//   const inputSearch = useRef(null);
//   const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // if (!inputSearch.current.value) {
    //   return;
    // }
    // navigate(`/search/${inputSearch.current.value}`);
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup style={{ "width": "250px" }} size="sm">
        <Input
          placeholder="user name"
          //innerRef={inputSearch}
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