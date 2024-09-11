import React from 'react';
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <main style={{ flex: 1, padding: 20 }}>
      <Outlet /> {/* This is where the routed content will be rendered */}
    </main>
  );
};

export default Content;
