import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  display: flex;
  font-size: 1.5em;
  justify-content: space-evenly;
  background-color: yellowgreen;
  padding: 1rem 0;

  div {
    flex: 1;
  }

  .middle {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    border: 1px solid red;
  }

  .right {
    display: flex;
    gap: 1rem;
    justify-content: end;
    border: 1px solid red;
    align-items: end;
  }
`;

export default function Navbar({ quantity }) {
  return (
    <NavbarWrapper>
      <div className="left"></div>
      <div className="middle">
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
      </div>
      <div className="right">
        <Link to="cart">Cart</Link>
        <div>{quantity} items</div>
      </div>
    </NavbarWrapper>
  );
}
