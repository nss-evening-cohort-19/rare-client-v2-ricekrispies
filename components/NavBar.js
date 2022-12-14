/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { signOut } from '../utils/auth';

export default function NavBar({ userStaff }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Rare Publishing</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/posts">
              <Nav.Link>All Posts</Nav.Link>
            </Link>{' '}
            {userStaff ? (
              <>
                <Link passHref href="/users">
                  <Nav.Link>All Users</Nav.Link>
                </Link>
                <Link passHref href="/posts/postApproval">
                  <Nav.Link>Post Approvals</Nav.Link>
                </Link>
                <Link passHref href="/userchange">
                  <Nav.Link>User Change Approvals</Nav.Link>
                </Link>
              </>
            ) : (
              <></>
            )}
            <Link passHref href="/posts/new">
              <Nav.Link>Submit Post</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  userStaff: PropTypes.bool.isRequired,
};
