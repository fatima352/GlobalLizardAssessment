import React, { useState } from 'react';
import ListPosts from './ListPosts/ListPosts.jsx'
import Header from './Header/Header.jsx';

const App = () => {
  // category text lifted to App so Header can update it and ListPosts can consume it
  const [category, setCategory] = useState('');

  const handleSearch = (value) => {
    setCategory(value || '');
  }

  return (
    <div>
      <Header onSearch={handleSearch} />
      <ListPosts category={category} />
    </div>
  );
}

export default App;
