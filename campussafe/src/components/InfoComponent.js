import React from 'react';
import { Link } from 'react-router-dom';
import './InfoComponent.css';

const InfoComponent = () => {
  return (
    <div>
      <main>
        <div className="bubble-container">
          <div className="bubble">
            If your circumstance is not an emergent matter, here is the official UCR form for reporting any suspicious activity or violence on campus.
            <br />
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfNr-lSoy8ysvgO5Zo6Rab7-tTUGOKHCnTT5XQEJsS4tDxoLA/viewform" target="_blank" rel="noopener noreferrer">
              <span>UCR Incident Report Form</span>
            </Link>
          </div>

          <div className="bubble">
            Students in immediate need of mental health support should click the link below to discover resources to help them through their difficult time.
            <br />
            <Link to="https://studentwellness.ucr.edu/emergency-resources" target="_blank" rel="noopener noreferrer">
              <span>UCR Mental Health Emergency Resources</span>
            </Link>
          </div>

          <div className="bubble">
            Reach out to the university escort service for an on-campus escort should you feel scared walking to your car or class at night.
            <br />
            <Link to="https://wrc.ucr.edu/programs/campus-safety-escort-service" target="_blank" rel="noopener noreferrer">
              <span>UCR Safety Escort Service</span>
            </Link>
          </div>

          <div className="bubble">
            For students facing a health emergency or needing care after the provided window, please visit the following link to seek care at the closest hospitals.
            <br />
            <Link to="https://studenthealth.ucr.edu/emergency?_gl=1*ig5kbn*_ga*MjA0OTEwMDAxMy4xNjk2NzA2ODQz*_ga_S8BZQKWST2*MTcwMjQzNTA5My4yMC4xLjE3MDI0MzU2NzEuMC4wLjA.*_ga_Z1RGSBHBF7*MTcwMjQzNTA5My4yMC4xLjE3MDI0MzU2NzEuMC4wLjA." target="_blank" rel="noopener noreferrer">
              <span>Emergency and After Hours Medical Care</span>
            </Link>
          </div>

          <div className="bubble">
            Follow the link below to learn more about suggested actions that students from UCR can take to prevent crime on and off campus
            <br />
            <Link to="https://police.ucr.edu/safety-crime-prevention-campus-safety" target="_blank" rel="noopener noreferrer">
              <span>UCR Safety and Crime Prevention</span>
            </Link>
          </div>

          <div className="bubble">
            Should you notice any hazardous waste on campus - especially if it pertains to mishandled lab matter - use the link below to properly alert someone about it.
            <br />
            <Link to="https://ehs.ucr.edu/waste#how_do_i_request_hazardous_waste_pick_up" target="_blank" rel="noopener noreferrer">
              <span>Hazardous Waste Pickup</span>
            </Link>
          </div>

          <div className="bubble">
            Here you can find the official UCR Safety Resource Guide to educate yourself on the best practices to remain safe on campus.
            <br />
            <Link to="https://police.ucr.edu/sites/default/files/2022-02/ucrpd-safety-resource-guide-v2.pdf" target="_blank" rel="noopener noreferrer">
              <span>UCR Safety Resource Guide</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InfoComponent;
