const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-green-400 h-10">navbar</nav>
      <main className="flex-grow bg-yellow-400">{children}</main>
      <footer className="bg-blue-50 h-10">footer</footer>
    </div>
  );
};

export default Layout;
