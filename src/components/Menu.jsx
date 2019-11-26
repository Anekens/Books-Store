import React from "react";
import { Menu, Popup, List, Button, Image } from "semantic-ui-react";

const CartComponent = ({ title, id, imageLink, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Remove
        </Button>
      </List.Content>
      <Image avatar src={imageLink} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item name="browse">Books Store</Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="signup">
        Total: &nbsp; <b>{totalPrice}</b>&nbsp;usd.
      </Menu.Item>

      <Popup
        trigger={
          <Menu.Item name="help">
            Cart (<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map(book => (
          <CartComponent {...book} />
        ))}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;
