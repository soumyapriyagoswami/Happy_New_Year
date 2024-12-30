import { useState } from 'react';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';

export default function Home() {
    const [name, setName] = useState('');
    const [showCard, setShowCard] = useState(false);
    const [wish, setWish] = useState('');

    const wishes = [
        `May this year bring you unparalleled success and happiness, ${name}!`,
        `Wishing you a future filled with innovation and joy, ${name}.`,
        `May 2025 be the year all your dreams become reality, ${name}!`,
        `Cheers to new adventures and endless opportunities, ${name}.`,
        `Here’s to a bright, prosperous, and exciting year ahead for you, ${name}!`,
        `May 2025 be the year you achieve greatness, ${name}.`,
        `Here’s to health, wealth, and happiness in your life, ${name}!`,
        `Embrace this year with hope and courage, ${name}, and watch the magic unfold!`,
        `May your efforts be crowned with success and your days filled with laughter, ${name}!`,
        `Dream big, aim high, and make 2025 your best year yet, ${name}!`
    ];

    const handleCelebrate = () => {
      if (!name.trim()) {
          alert('Please enter your name to get a personalized celebration message!');
          return;
      }
      const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
      setWish(randomWish);
      setShowCard(true);
  };

    const handleDownload = () => {
        const card = document.getElementById('card');
        html2canvas(card).then(canvas => {
            canvas.toBlob(blob => {
                saveAs(blob, `${name}_NewYear2025.png`);
            });
        });
    };

    return (
        <div style={{ 
            fontFamily: 'Arial, sans-serif', 
            background: 'linear-gradient(135deg, #000428, #004e92)', 
            color: '#fff', 
            minHeight: '100vh', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <div className="stars" style={{ 
                position: 'absolute', 
                width: '100%', 
                height: '100%', 
                background: 'radial-gradient(ellipse at bottom, #1b2735, transparent), radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 2px)', 
                backgroundSize: '5px 5px', 
                animation: 'starry 20s linear infinite', 
                zIndex: '-1' 
            }}></div>
            <h1 style={{ 
                fontSize: '3.5rem', 
                textAlign: 'center', 
                color: '#FFD700', 
                textShadow: '0 0 30px #FFD700, 0 0 60px #FF4500' 
            }}>Welcome to 2025!</h1>
            <p style={{ 
                fontSize: '1.2rem', 
                textAlign: 'center', 
                marginBottom: '30px', 
                color: '#FFFFFFAA' 
            }}>A year of dreams, success, and happiness awaits!</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={{ 
                    padding: '15px', 
                    fontSize: '1.1rem', 
                    borderRadius: '10px', 
                    border: 'none', 
                    width: '320px', 
                    marginBottom: '20px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    textAlign: 'center' 
                }}
            />
            <button
                onClick={handleCelebrate}
                style={{ 
                    padding: '12px 25px', 
                    fontSize: '1.1rem', 
                    background: 'linear-gradient(to right, #FFD700, #FF4500)', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '10px', 
                    cursor: 'pointer', 
                    transition: 'transform 0.2s ease', 
                    boxShadow: '0 4px 10px rgba(255, 69, 0, 0.6)'
                }}
                onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            >
                Celebrate!
            </button>
            {showCard && (
                <div id="card" style={{ 
                    marginTop: '30px', 
                    padding: '20px', 
                    background: 'rgba(26, 26, 80, 0.9)', 
                    borderRadius: '15px', 
                    boxShadow: '0 0 30px #FFD700', 
                    textAlign: 'center', 
                    position: 'relative', 
                    maxWidth: '400px', 
                    color: '#FFD700', 
                    fontSize: '1.2rem', 
                    animation: 'fadeInHeart 2s ease-in-out'
                }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginBottom: '20px' 
                    }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: 'red',
                            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 50% 82%, 18% 100%, 0% 38%)',
                            animation: 'heartbeat 1.5s infinite'
                        }}></div>
                    </div>
                    <h2 style={{ marginBottom: '20px', fontSize: '2.5rem', textShadow: '0 0 10px #FFD700' }}>🎉 Happy New Year 2025 🎉</h2>
                    <p style={{ marginBottom: '10px', fontStyle: 'italic', color: '#fff' }}>{wish}</p>
                    <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#fff' }}>May this year bring happiness, health, and success!</p>
                </div>
            )}
            {showCard && (
                <button
                    onClick={handleDownload}
                    style={{ 
                        marginTop: '20px', 
                        padding: '10px 20px', 
                        fontSize: '1rem', 
                        background: 'linear-gradient(to right, #FFD700, #FF4500)', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '10px', 
                        cursor: 'pointer', 
                        transition: 'transform 0.2s ease', 
                        boxShadow: '0 4px 10px rgba(255, 69, 0, 0.6)'
                    }}
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                >
                    Download Card
                </button>
            )}
            <style jsx>{`
                @keyframes heartbeat {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.3);
                    }
                }

                @keyframes fadeInHeart {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
}
