import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import CartContext from '../context/CartContext';


const { Header } = Layout;

const Navbar = () => {
    const {cart} = useContext(CartContext)
  return (
    <Header style={{borderRadius: '10px'}} >
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}  >
        <Menu.Item key="1"><Link to="/">AntD Store</Link></Menu.Item>
        <Menu.Item key="2" style={{ marginLeft: 'auto' }}>
          <Badge count={cart.length} showZero>
            <ShoppingCartOutlined style={{ fontSize: '24px', color: 'white' }} />
          </Badge>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;