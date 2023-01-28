import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Styled from 'styled-components';
import Button from 'Components/Button';
import { ToDoListContext } from 'Contexts/ToDoList';

const Container = Styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  flex-direction: column;
`;

const ToDo = Styled.div`
  min-width: 350px;
  height: 350px;
  overflow-y: auto;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
  padding: 10px;
`;

const Detail = () => {
  /* router v6 에서는 useHistory 대신 useNavigate가 쓰인다. */
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);

  const { toDoList, deleteToDo } = useContext(ToDoListContext);
  const toDo = toDoList[Number(id) || 0];

  return (
    <Container>
      <ToDo>{toDo}</ToDo>
      <Button label="삭제" backgroundColor="#ff1744" hoverColor="#f01440" onClick={() => {
        deleteToDo(id);
        navigate(-1);
      }} />
    </Container>
  )
};

export default Detail;