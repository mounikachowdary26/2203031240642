import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';
function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4().slice(0, 6);
    const newEntry = { id, originalUrl };
    setShortenedUrls([...shortenedUrls, newEntry]);
    setOriginalUrl('');
  };
  return (
    <div className="App">
      <h1>Mounika's URL Shortener 🔗</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Paste your URL here"
          required
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>

      <ul>
        {shortenedUrls.map((item, index) => (
          <li key={index}>
            🔗 <strong>
              <a
                href={item.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0066cc', textDecoration: 'none' }}
              >
                {`${window.location.origin}/${item.id}`}
              </a>
            </strong>
            <br />
            ↪️ Original: <span>{item.originalUrl}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
