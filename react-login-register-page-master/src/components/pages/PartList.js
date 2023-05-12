import React, { useState } from 'react';
import { Card, Modal } from 'antd';
import './PartList.css'

const { Meta } = Card;

const products = [
  { id: 1, name: 'Landing Gear', material_composition: 'Aluminium', age: '21 years', condition: 'Used', manufacturer:'Boeing'},
  { id: 2, name: 'Engine', material_composition: 'Aluminium', age: '42 years', condition: 'New', manufacturer:'Boeing'},
  { id: 3, name: 'Avionics', material_composition: 'Titanium', age: '11 years', condition: 'Used', manufacturer:'Boeing' },
  // Add more products as needed
];

const ProductList = () => {

  const [visible, setVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setVisible(true);
  };

  const handleModalClose = () => {
    setVisible(false);
  };

  return (
    <div className="card-container">

      {products.map((product)=> (<Card hoverable style={{ width: 300 }} onClick={() => handleCardClick(product)}>
          <Meta title={product.name} description={product.material_composition + ", "+ product.age + ", " + product.condition + ", " + product.manufacturer} />
        </Card>))}

        {/* <Card hoverable style={{ width: 300 }} onClick={handleCardClick}>
          <Meta title="Card Title" description="This is the description" />
        </Card>
        <Card
          hoverable
          style={{ width: 300 }}
          onClick={handleCardClick}
        >
          <Meta title="Card Title" description="This is the description" />
        </Card>

        <Card
          hoverable
          style={{ width: 300 }}
          onClick={handleCardClick}
        >
          <Meta title="Card Title" description="This is the description" />
        </Card>

        <Card
          hoverable
          style={{ width: 300 }}
          onClick={handleCardClick}
        >
          <Meta title="Card Title" description="This is the description" />
        </Card>

        <Card
          hoverable
          style={{ width: 300 }}
          onClick={handleCardClick}
        >
          <Meta title="Card Title" description="This is the description" />
        </Card>

        <Card
          hoverable
          style={{ width: 300 }}
          onClick={handleCardClick}
        >
          <Meta title="Card Title" description="This is the description" />
        </Card>
        <Card
          hoverable
          style={{ width: 300 }}
          onClick={handleCardClick}
        >
          <Meta title="Card Title" description="This is the description" />
        </Card> */}

        <Modal
        id = "modal"
        title="Product Listing"
        visible={visible}
        onOk={handleModalClose} // add function for adding booking to database instead
        onCancel={handleModalClose}>
        {selectedProduct && (
          <>
            <h3>{selectedProduct.name}</h3>
            <span style={tag_style}>{selectedProduct.material_composition}</span>
            <span style={tag_style}>{selectedProduct.age}</span>
            <span style={tag_style}>{selectedProduct.condition}</span>
            <span style={tag_style}>{selectedProduct.manufacturer}</span>
          </>
        )}
      </Modal>
        
    </div>
  );
};

const tag_style = {
  backgroundColor: '#888888',
  borderRadius: '5px',
  color: 'white',
  padding: '5px',
  margin: '5px'
}

export default ProductList;
