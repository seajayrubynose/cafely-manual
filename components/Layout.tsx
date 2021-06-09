import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NavBar />
      <main className="flex flex-col flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
