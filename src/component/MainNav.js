export default function MainNav() {
  const navPannel = document.querySelector('.main-nav');

  const navShow = event => {
    navPannel.classList.add('active');
  }
  
  return (
    <div className='main-nav'>
      <div className="container">
        <button className="btn nav-open-btn float-end" onClick={navShow}>
          <i className="fas fa-bars fa-3x"></i>
        </button>
        <nav>
          <button className="btn nav-close-btn" >
            <i className="fas fa-bars fa-3x"></i>
          </button>
          <a href="#hello">Hello</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        
      </div>
      
    </div>
  );
}