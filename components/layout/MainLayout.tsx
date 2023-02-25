import Header from "./Header";

type mainLayoutProps = {
  children: React.ReactElement;
};

const MainLayout: React.FC<mainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
