import AboutPage from "../About/About";
import HomePage from "../Home/Home";

const PortfolioPage = (props: { page: string }) => {
  if (props.page == 'HOME') {
    return (
      <HomePage />
    );
  } else if (props.page == 'ABOUT') {
    return (
      <AboutPage />
    );
  }
};

export default PortfolioPage;
