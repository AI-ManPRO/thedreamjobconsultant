import logo from '../assets/logo.png';

const Logo = ({ className = "" }) => {
  return (
    <img
      src={logo}
      alt="The Dream Job Consultant"
      className={`h-12 md:h-14 w-auto object-contain ${className}`}
    />
  );
};

export default Logo;