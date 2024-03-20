import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";
import resume from "../assets/Foti-Ceci-Resume.pdf";

const navigation = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-10 lg:px-12"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
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
              <Bars3Icon
                className="h-6 w-6"
                stroke="white"
                aria-hidden="true"
              />
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
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              onClick={() => {
                window.open(resume, "_blank");
              }}
              download="Foti Ceci Resume"
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
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 scroll-smooth"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="py-6">
                  <a
                    onClick={() => {
                      window.open(resume, "_blank");
                    }}
                    className="flex rounded-md px-3.5 py-2.5 text-sm font-semibold mt-4 max-w-32 rounded-md text-indigo-600 border-2 border-indigo-500 cursor-pointer transition ease-in-out hover:-translate-y-1  hover:-translate-x-1 hover:shadow-custom"
                  >
                    Resume <ArrowDownTrayIcon className="ml-5 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div id="hero" className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl pt-20 sm:pt-28 lg:pt-52 min-h-screen">
          <div className="text-center">
            <p className="text-lg mb-4 leading-8 text-indigo-400 font-bold">
              Hi, my name is
            </p>
            <h2 className="mb-12 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Foti Ceci
            </h2>
            <h1 className="text-3xl font-bold tracking-tight text-gray-400 sm:text-5xl">
              I like to code all web things.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              I&apos;m a software developer specializing in crafting dynamic web
              applications with a strong foundation in full-stack development.
              Currently, I&apos;m immersed in the exciting challenge of creating
              impactful and scalable solutions for{" "}
              <a
                className="cursor-pointer font-bold text-indigo-400 hover:underline"
                href="https://www.ibm.com/training"
              >
                IBM
              </a>
              .
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#experience"
                className="flex items-center text-sm font-semibold leading-6 text-indigo-400 border-2 border-indigo-400 cursor-pointer rounded-md px-3.5 py-2.5 transition ease-in-out hover:-translate-y-1  hover:-translate-x-1 hover:shadow-custom"
              >
                Learn more <ArrowDownIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
