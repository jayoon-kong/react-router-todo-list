import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Styled from 'styled-components';
import { ToDoListProvider } from 'Contexts/ToDoList';
import List from 'Pages/List';
import Add from 'Pages/Add';
import Detail from 'Pages/Detail';
import PageHeader from 'Components/PageHeader';
import NotFound from 'Pages/NotFound';

const Container = Styled.div`
  min-height: 100vh;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  /* 
    router v6부터 변경되는 점
    - Switch 대신 Routes가 사용되고, exact path 대신 path가 사용된다.
    - <Route> 내부에 component를 사용할 수 없고, element를 사용해야 한다. 
  */
  return (
    <ToDoListProvider>
      <Container>
        <PageHeader />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Container>
    </ToDoListProvider>
  );
}

export default App;
