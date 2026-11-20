import { useState } from 'react'

function Hero() {
  const [count, setCount] = useState(0)

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <span className="badge">✨ Built with React + Vite</span>

        <h1>
          Build something <span className="highlight">amazing</span> today
        </h1>

        <p className="hero-text">
          A clean, fast and fully responsive starter page. Use it as the
          foundation for your portfolio, product or next big idea.
        </p>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            Get Started 🚀
          </button>
          <a href="#features" className="btn btn-secondary">
            Learn More
          </a>
        </div>

        <p className="click-message">
          {count === 0
            ? 'Go ahead, click the button!'
            : `You clicked ${count} time${count === 1 ? '' : 's'} 🎉`}
        </p>
      </div>
    </section>
  )
}

export default Hero
