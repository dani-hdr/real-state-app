import Footer from "./Footer";
import Header from "./Header";

const index = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="pb-20">
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default index;
