import { useEffect } from 'react';
import FooterSection from './components/FooterSection';
import ForkTemplate from './components/ForkTemplate';

const HomeScreen = () => {
  useEffect(() => {
    if (window.location.href.includes('?ref=')) {
      let getAddress = window.location.href.split('?ref=')[1];
      let final = getAddress;
      localStorage.setItem('baseRef', final);
    }
    // if (localStorage.getItem("appVersion") === process.env.REACT_APP_VERSION) {

    // } else {
    //   caches.keys().then((names) => {
    //     names.forEach((name) => {
    //       caches.delete(name);
    //     });
    //   });
    //   localStorage.setItem("appVersion", process.env.REACT_APP_VERSION);
    // }
  }, []);

  return (
    <>
      <ForkTemplate />
      <FooterSection />
    </>
  );
};

export default HomeScreen;
