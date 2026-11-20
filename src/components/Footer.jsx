function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner">
        <p>© {year} LaunchPad. All rights reserved.</p>
        <p>Made with ❤️ using React</p>
      </div>
    </footer>
  )
}

export default Footer
