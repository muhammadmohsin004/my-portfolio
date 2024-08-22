import logo from "../assets/MMlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import ExternalLink from "./ExternalLink";
export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-10"
          src={logo}
          alt="Logo"
          style={{ width: "90px", height: "40px" }}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <ExternalLink to="https://www.linkedin.com/in/muhammad-mohsin-1b470923b">
          <FaLinkedin />
        </ExternalLink>
        <ExternalLink to="https://github.com/muhammadmohsin004">
          <FaGithub />
        </ExternalLink>
        <ExternalLink to="https://x.com/malikmohsin449?t=Fgy6luqaCJwpqYBuC5_6bQ&s=09">
          <FaSquareXTwitter />
        </ExternalLink>
        <ExternalLink to="https://www.instagram.com/malikmohsin449?igsh=MWNyNnZ1bWV3ZXRpMA==">
          <FaInstagram />
        </ExternalLink>
      </div>
    </nav>
  );
};