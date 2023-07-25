import React from "react";

function Footer() {
  return (
    <div className="bg-black text-stone-400 border-t-8 border-neutral-700">
      <div className="lg:mx-44 px-4 lg:px-0 py-3 lg:py-6">
        <div className="py-3 mt-10">
          Questions ? Call - 000-800-919-1694
        </div>
        <div className="grid grid-cols-3  py-4">
          <div className="list-none space-y-2">
            <li></li>
            <li>FAQ</li>
            <li>Media Centre</li>
            <li>Ways to Watch</li>
            <li>Cookie Preferences</li>
            <li>Speed Test</li>
          </div>
          <div className="list-none space-y-2">
            <li></li>
            <li>Help Centre</li>
            <li>Investor Relations</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            <li>Legal Notices</li>
          </div>
          <div className="list-none space-y-2">
            <li></li>
            <li>Account</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            <li>Only on Netflix</li>
          </div>
          <div className="mt-9">
            <select className="px-2 py-1 rounded bg-neutral-700 text-white">
              <option value={1}>English</option>
              <option value={2}>Hindi</option>
            </select>
          </div>
        </div>
          <div className="py-4 text-sm">Netflix India</div>
      </div>
    </div>
  );
}

export default Footer;
