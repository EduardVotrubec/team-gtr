import React from 'react';
import Link from 'next/link';
import ThreeViewer from '../components/ThreeViewer';

const NewPage: React.FC = () => {
  return (
    <div style={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif' }}>
      <h1>Bewege und scrolle mit deiner Maus</h1>
      <ThreeViewer />
      <Link href="/">
        <button style={{position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid transparent',
                    borderRadius: '0.375rem',
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
                    color: 'white',
                    backgroundImage: 'linear-gradient(to right, #805ad5, #d53f8c)',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.5s ease-in-out',
                    transformOrigin: 'center',
}}>
                              Zurück
               </button>
      </Link>
    </div>
  );
};

export default NewPage;
