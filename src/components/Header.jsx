const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/80 to-transparent px-6 py-6 sm:px-12 sm:py-8 lg:px-16">
      <a
        href="/"
        aria-label="Netflix home"
        className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white"
      >
        <img
          className="h-8 w-auto sm:h-11"
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAchJje9GUBJ_ehbO0uOApH8QmRyuvK0LQI9obzFeGtfkpfLyh4FdolMZR4PtvyNoOomDcY7BzTbhFC3gJinH0UadYBg807AKDSPyfsUDm9T3CZKn9OSZN3II7060MZESFcb6YOS9jvzh.svg"
          alt="Netflix"
        />
      </a>
    </header>
  );
};

export default Header;
