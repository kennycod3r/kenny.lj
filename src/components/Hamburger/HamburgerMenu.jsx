import './Hamburger.css';

export default function HamburgerMenu({ handleSidebar, openSidebar }) {
  return (
    
      <button
        className={
          openSidebar
          ? "hamburger hamburger--3dx is-active" 
            : "hamburger hamburger--3dx"
        }
        type="button"
        onClick={handleSidebar}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    
  );
}
