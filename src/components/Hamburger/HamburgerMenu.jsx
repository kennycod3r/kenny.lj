import './Hamburger.css';

export default function HamburgerMenu({openSidebar }) {
  return (
    
      <button
        className={
          openSidebar
          ? "hamburger hamburger--3dx is-active" 
            : "hamburger hamburger--3dx"
        }
        type="button"
        
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    
  );
}
