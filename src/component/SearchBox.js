import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();

  const searchPerson = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEARCH_PERSON',
      payload: { keyword },
    });
  };

  return (
    <Form onSubmit={searchPerson}>
      <Row>
        <Col lg={9}>
          <Form.Control
            className='search_col'
            type='text'
            placeholder='이름을 입력해주세요.'
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>

        <Col lg={3} className='search_col'>
          <Button variant='primary' type='submit'>
            찾기
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
