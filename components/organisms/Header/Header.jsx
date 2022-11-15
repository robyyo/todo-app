import React from 'react';
import Container from '../../atoms/Container/Container';
import Nav from '../../atoms/Nav/Nav';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <Container>
        <div>ToDo</div>
        <Nav user={null} />
      </Container>
    </header>
  );
};

export default Header;
