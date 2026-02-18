import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const applyInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'system';
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.toggle('dark', mediaQuery.matches);
  }
};

applyInitialTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)