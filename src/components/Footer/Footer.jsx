import React from 'react';
import FooterDesktop from './DesktopFooter';
import FooterMobile from './MobileFooter';

const Footer = () => {
  return (
    <>
      <div className="hidden lg:block">
        <FooterDesktop />
      </div>
      
      <div className="block lg:hidden">
        <FooterMobile />
      </div>
    </>
  );
};

export default Footer;


