import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import logo from "/logo.svg";
import resume from "/public/FotiCeciResume.pdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-10 lg:px-12"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 hover:animate-spin">
            <span className="sr-only">Foti Ceci</span>
            <img className="h-10 w-auto" src={logo} alt="FC logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" stroke="white" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 scroll-smooth"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:items-center lg:flex lg:flex-1 lg:gap-x-12 lg:justify-end">
          <a
            href="https://www.linkedin.com/in/foti-ceci/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              className="transition ease-in-out hover:-translate-y-px hover:-translate-x-px hover:shadow-custom rounded"
              style={{
                fill: "white",
                width: "1.75rem",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </a>
          <a
            href="https://github.com/fotinh0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              className="transition ease-in-out hover:-translate-y-px hover:-translate-x-px hover:shadow-custom rounded-2xl"
              style={{
                fill: "white",
                width: "1.75rem",
                height: "auto",
                cursor: "pointer",
              }}
            />
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex rounded-md px-3.5 py-2.5 text-sm font-semibold text-indigo-400 border-2 border-indigo-400 cursor-pointer rounded-md transition ease-in-out hover:-translate-y-1  hover:-translate-x-1 hover:shadow-custom"
          >
            Resume <ArrowDownTrayIcon className="ml-5 h-5 w-5" />
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Foti Ceci</span>
              <img className="h-8 w-auto" src={logo} alt="FC logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 scroll-smooth"
                >
                  {item.name}
                </a>
              ))}
              <div className="py-6">
                <div className="flex gap-x-8">
                  <a
                    href="https://www.linkedin.com/in/foti-ceci/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      style={{
                        fill: "#0a66c2",
                        width: "1.75rem",
                        height: "auto",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                  <a
                    href="https://github.com/fotinh0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      style={{
                        width: "1.75rem",
                        height: "auto",
                        cursor: "pointer",
                      }}
                    />
                  </a>
                </div>
                <a
                  onClick={() => {
                    window.open(resume, "_blank");
                  }}
                  className="flex rounded-md px-3.5 py-2.5 text-sm font-semibold mt-8 max-w-32 rounded-md text-indigo-600 border-2 border-indigo-500 cursor-pointer transition ease-in-out hover:-translate-y-1  hover:-translate-x-1 hover:shadow-custom"
                >
                  Resume <ArrowDownTrayIcon className="ml-5 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
