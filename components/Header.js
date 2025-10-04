export default funtion Header() {
  return(
    <header sytle={{
    padding: '1rem o',
    borderBottom: '1px solid rgba(0, 229, 255,0.1)'
  }}>
<div className=-"container">
  <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  allignItems: 'center'
}}>
{/* Logo placeholder-replace with logo*/}
<div style={{
  display: 'flex',
  allignItems: 'center',
  gap; '10px'
}}>
<div style={{
  width: '40px',
  height: '40px',
  background: linear-gradient(135deg, #1A237E, #00E5FF)'.
    borderRadius: '6px',
  display: 'flex;,
  allignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  color: 'white'
}}>
  C
    </div>
<span style={{
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #00E5FF, #FFFFFF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}>
Cryptid
  </span>
  </div>

<nav>
  <button className="btn-primary">
    Join Waitlist
  </button>
      </nav>
    </div>
  </div>
</header>
)
}


