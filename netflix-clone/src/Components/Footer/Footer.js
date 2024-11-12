
import React from 'react';
import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        
        {/* Left column with icons, specific list, service code, and copyright */}
        <div className='footer_section'>
          <div className='footer_icons'>
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <ul className='footer_list'>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
          <div className='service_code'>
            <p>Service Code</p>
          </div>
          <div className='copy_write'>
            &copy; 1997-2024 Netflix, Inc.
          </div>
        </div>

        {/* Other lists */}
        <div className='footer_section'>
          <ul className='footer_list'>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className='footer_section'>
          <ul className='footer_list'>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className='footer_section'>
          <ul className='footer_list'>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;

