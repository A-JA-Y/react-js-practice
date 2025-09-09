import React, { useContext } from 'react';
import { Card, Button, List, Typography } from 'antd';
import CartContext from '../context/CartContext';

const { Title } = Typography;

// Mock data for our products
const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Keyboard', price: 75 },
  { id: 3, name: 'Mouse', price: 25 },
];

const StorePage = () => {
  const {addToCart} =useContext(CartContext)
  return (
    <div>
      <Title level={2} style={{ margin: '24px' }}>Products</Title>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={products}
        renderItem={(product) => (
          <List.Item>
            <Card title={product.name}>
              <p>${product.price}</p>
              <Button type="primary" onClick={() => addToCart(product)} >Add to Cart</Button>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default StorePage;