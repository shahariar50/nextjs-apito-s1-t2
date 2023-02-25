import Footer from "./Footer";
import Header from "./Header";

type mainLayoutProps = {
  children: React.ReactElement;
};

const MainLayout: React.FC<mainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
