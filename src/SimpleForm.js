// src/SimpleForm.js
import React, { useState } from 'react';

function SimpleForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hola, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default SimpleForm;
