const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    text: 'Powered by Vite, so your page loads and updates instantly.',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    text: 'Looks great on phones, tablets and desktop screens.',
  },
  {
    icon: '🎨',
    title: 'Clean Design',
    text: 'Simple colors, good spacing and easy-to-read typography.',
  },
]

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Why choose this starter?</h2>

        <div className="features-grid">
          {features.map((item) => (
            <div className="feature-card" key={item.title}>
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
