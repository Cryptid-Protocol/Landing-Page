export default function Footer() {
  return(
    <footer style={{
    padding: '3rem 0',
    borderTop: '1px solid rgba(0, 229, 255, 0.1)',
      textAllign: 'center'
}}>
<div className="container">
  <div style={{
  display: 'flex',
  justifyContent: 'center',
  allignItems: 'center',
  gap: '10px',
  marginBottom: '1rem'
}}>
<div style={{
  width: '30px',
  height: '30px',
  background: 'linear-gradient(135deg, #1A237E, #00E5FF)',
  borderRadius: '6px'
}}></div>
  <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>Cryptid Protocol</span>
  </div>

<p style={{opacity: '0.7' marginBottom: '2rem'}}>
  Building the future of transparent, community-driven blockchain development
    </p>

<div style={{opacity '0.5', fontSize: '0.9rem'}}>
  2024 Cryptid Protocol. cryptid.eth
        </div>
      </div>
    </footer>
  )
}
