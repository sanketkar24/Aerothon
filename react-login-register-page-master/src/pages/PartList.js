import React from 'react';

const products = [
  { id: 1, name: 'Landing Gear', material_composition: 'Aluminium'},
  { id: 2, name: 'Engine', material_composition: 'Aluminium' },
  { id: 3, name: 'Avionics', material_composition: 'Titanium' },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div>
      <ul type="none">
        {products.map((product) => (
          <li className='list-item' key={product.id} style={list_item_style}>
            <span style={list_main}>{product.name}</span><br/><span style={list_footer}><i>{product.material_composition}</i></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const list_main = {
    fontSize: "1.5rem",
}

const list_footer = {

}

const list_item_style = {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
}

export default ProductList;
