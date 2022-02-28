import React from 'react';
import Layout from './components/Layout';

function App() {

  return (
    <Layout>
      <div className="py-8 px-4 w-full h-screen dark:bg-neutral-800 dark:text-white">
        <header className="">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="font-bold text-4xl underline text-red-500"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>          
        </header>
      </div>
    </Layout>
  );
}

export default App;
