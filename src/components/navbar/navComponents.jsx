import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';

export function NavComponent() {
  return (
    <div className="container-fluid bg-white text-dark shadow-sm fixed-top" id='nav'>
      <div className="d-flex justify-content-between align-items-center py-3">
        <h3 className="mb-0">Pune Poorna</h3>
        <input type="text" className="form-control w-25 search-input" placeholder="Search..." />
        <EventList />
        <Button color="primary" className="mr-2"><Link to={"/create"}>Create Events</Link></Button>
        <Button color="secondary">
          <Link to="/login" className='text-dark'>Login</Link> / <Link to="/signup" className='text-dark'>Signup</Link>
        </Button>
      </div>
    </div>
  );
}

export function EventList({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="d-flex align-items-center">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret color="info">
          Events
        </DropdownToggle>
        <DropdownMenu {...args} className="bg-white text-dark shadow-sm">
          <input type='search' placeholder='Browse Events' className='form-control mb-2' />
          <DropdownItem divider />
          <DropdownItem>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem>Dropdown Item Text</DropdownItem>
          <DropdownItem>Action (disabled)</DropdownItem>
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

EventList.propTypes = {
  direction: PropTypes.string,
};
