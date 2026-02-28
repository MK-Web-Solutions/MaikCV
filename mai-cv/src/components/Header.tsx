const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50">

      <div className="flex flex-col items-center">

        {/* Logo */}
        <a href="/">
          <img
            src="/logo.svg"
            className="w-[150px] sm:w-[250px] h-auto mt-4"
            alt="logo"
          />
        </a>

        {/*
        <nav className="w-full mt-4">
          <ul className="flex flex-wrap justify-center gap-6 py-4 px-4">
            <li><a href="#about" className="text-white font-bold hover:text-gray-400 transition">About</a></li>
            <li><a href="#education" className="text-white font-bold hover:text-gray-400 transition">Education</a></li>
            <li><a href="#projects" className="text-white font-bold hover:text-gray-400 transition">Projects</a></li>
            <li><a href="#skills" className="text-white font-bold hover:text-gray-400 transition">Skills</a></li>
            <li><a href="#cv" className="text-white font-bold hover:text-gray-400 transition">CV</a></li>
            <li><a href="#contact" className="text-white font-bold hover:text-gray-400 transition">Contact</a></li>
          </ul>
        </nav>
         */}
      </div>
    </header>
  );
};

export default Header;