export default function Features() {
  const features = [
    {
      title: "Watch Development",
    description: "See the blockchaingrow in real-time with live coding streams and transparent progress tracking.",
    icon: "<i>"
    },
    {
      title: "Build and Earn",
      description: "Complete development tasks and get a reward with crypto. Turn your skills into a tangible value.",
      icon: " lightning bolt"
    },
    { 
      title: "Community Driven",
      description: "vote on features, fund development bounties, and shape the future of the protocol together.",
      icon: "social"
    }
    ];

return (
  <section style={{padding: '100px 0', background: rgba(10, 14, 42, 0.5)'}}>
    <div className="container">
      <h2 style={{
  textAllign: 'center',
  fontSize: '2.5rem',
  margin:Bottom: '3rem',
  fontWeight: 'bold'
}}>
How<span className="gradient-text">Cryptid</span> Works
  </h2>

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem'
}}>
{features.map((feature, index) => (
  <div key={index} style={{
              background: 'linear-gradient(135deg, rbga(26, 35, 126, 0.1), rgba(0, 229, 255, 0.05))',
              padding: '2rem',
    borderRadius: '12px',
    border: "1px solid rgba(0, 229, 255, 0.01)',
      textAllign: 'center',
    transition: 'all 0.03s ease'
  }}>
    <div style={{
              fontSize: '3rem',
      marginBottom: '1rem'
    }}>
              {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--text-white)'
                }}>
      {feature. title}
            </h3>
              <p style={{opacity: '0.08'}}>
      {feature.description}
</p>
  </div>
))}
</div>
      </div>
  </section>
)
}
