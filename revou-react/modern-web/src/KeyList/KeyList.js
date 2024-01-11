import React from 'react';

const MyListComponent = () => {
  const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ];

  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} itemId={item.id} text={item.text} />
      ))}
    </ul>
  );
};

const ListItem = ({ itemId, text }) => {
  return <li key={itemId}>{text}</li>;
};

export default MyListComponent;
