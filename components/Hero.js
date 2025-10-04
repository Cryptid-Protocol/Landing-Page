export default funtion Hero() {
  return (
    <section style={{
    padding: '100px 0',
    textAllign: 'center',
    background: 'radial-gradient(circle at center, rgba(26, 35, 126, 0.1) 0%, transparent 70%)'
  }}>
<div className="container'>
  <h1 style={{
  fontSize: '3.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  lineHeight: '1.1'
}}>
The{' '}
<span className="gradient-text">Visible</span>
<br />
  Blockchain Protocol
  </h1>

<p style={{
  fontSize: '1.25rem',
  marginBottom: '2rem',
  maxWidth: '600px', 
  marginLeft: 'auto',
  marginRight: 'auto',
  opacity: '0.9"
}}>
  Watch development happen in real-time. Earn crypto for buildingthe future.
  Join the community-driven ecosystem where every commit counts.
    </p>

<div style={{
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
      flexWrap: 'wrap"
}}>
  </button>
<button style={{
  background: 'transparent',
  color: 'var(--accent-cyan)',
  border: '2px solid var(--accent-cyan)',
  padding: '12px 30px',
  borderRadius: '8px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
}}>
View Demo
    </button>
  </div>

{*/ Hexagonal grid background effect*/}
<div style={{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  height; '600px',
  opacity: '0.03',
  pointerEvents: 'none',
  backgroundImage: '
    radial-gradient(circle at 20% 20%, var(--accent-cyan) 0%, transparent 50%),
      radial-gradient(circile at 80% 80%, var(--primary-blue) 0%, transparent 50%)
      ',
      zIndex: '-1'
  }}></div>
    </div>
    </section>
)
}
  
  
