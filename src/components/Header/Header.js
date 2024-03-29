function Header() {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <h2 className='header__logo'>NT</h2>
        <div className='header__box'>
          <a href='#works' className='header__btn'>
            Works
          </a>
          <a href='#contacts' className='header__btn'>
            Contacts
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
