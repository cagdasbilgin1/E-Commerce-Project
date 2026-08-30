import React from 'react';

const PageContent = ({ children }) => {
  return (
    <main className="flex-grow flex flex-col w-full">
      {children}
    </main>
  );
};

export default PageContent;
