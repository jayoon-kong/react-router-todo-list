import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Styled from 'styled-components';

const Container = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e40ff;
`;

const Title = Styled.div`
  padding: 20px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`;

const GoBack = Styled(Link)`
  padding: 20px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  position: absolute;
  left: 20px;
`;

const PageHeader = () => {
  const [title, setTitle] = useState<string>('할 일 목록');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      setTitle('할 일 목록');
      return;
    }

    if (pathname === '/add') {
      setTitle('할 일 추가');
      return;
    }
  
    if (pathname.startsWith('/detail')) {
      setTitle('할 일 상세');
      return;
    }

    setTitle('에러');
  }, [pathname]);

  return (
    <Container>
      <Title>{title}</Title>
      {pathname !== '/' && <GoBack to="/">돌아가기</GoBack>}
    </Container>
  );
};

export default PageHeader;