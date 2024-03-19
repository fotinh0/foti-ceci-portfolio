import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Navigation() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="#hero">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          FC
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#experience">Experience</NavbarLink>
        <NavbarLink href="#projects">Projects</NavbarLink>
        <NavbarLink href="#contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
