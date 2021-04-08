import React from 'react';
import { useSelector } from 'react-redux';
import Layout from './Layout';

const Home = () => {
  const state = useSelector( ( state: any ) => state );
  return (
    <Layout title="首页" subTitle="欢迎光临">
      <div>首页组件 { JSON.stringify( state ) }</div>
    </Layout>
  );
};

export default Home;
