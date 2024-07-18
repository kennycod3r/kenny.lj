import "../components/Hamburger/Hamburger.css";

const CloseSvg = ({isOpen}) => {
  return (
    <div>
      <button
        className={
          isOpen
            ? "hamburger hamburger--3dx is-active"
            : "hamburger hamburger--3dx"
        }
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner hamburger-inner2"></span>
        </span>
      </button>
    </div>
  );
};

export default CloseSvg;
