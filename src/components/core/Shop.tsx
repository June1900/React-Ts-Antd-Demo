import React from 'react';
import { useSelector } from 'react-redux';
import Layout from './Layout';

const Shop = () => {
  const state = useSelector( ( state: any ) => state );
  return (
    <Layout title="购物" subTitle="欢迎来到购物组件">
      <div>购物组件 { JSON.stringify( state ) }</div>
    </Layout>
  );
};

export default Shop;
