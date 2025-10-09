import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10 mt-10">
      <NavLink to="/" className="text-xl">
        <img className="h-8 w-8" src="/logo.png" alt="" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          HERO.IO
        </h1>
      </NavLink>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">GitHub</a>
      </nav>

      <nav>
        <h6 className="footer-title">Apps</h6>
        <a className="link link-hover">Mac</a>
        <a className="link link-hover">Windows</a>
        <a className="link link-hover">iPhone</a>
        <a className="link link-hover">Android</a>
      </nav>
    </footer>
  );
};

export default Footer;
