import React, { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import headerLogo from "../images/fashion-cart-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { navigation, data } from "../config/config";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [filteredSolutions, setFilteredSolutions] = useState(
    data["Home"] || []
  );
  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
    setFilteredSolutions(data[itemName] || []);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50  bg-white drop-shadow-xl">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-4 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={headerLogo} className="h-8 w-auto " />
            </a>
          </div>
          <div className="flex items-center align-middle lg:hidden">
            <a
              href="/login"
              className="-m-2.5 inline-flex items-center justify-center px-4 py-2 rounded-md p-2.5 text-black"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-indigo-600 w-6  h-5 mr-1"
              />
            </a>

            <a
              href="/login"
              className="-m-2.5 inline-flex items-center justify-center px-4 py-2 rounded-md p-2.5 text-black"
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="text-indigo-600 w-6  h-5 mr-1"
              />
            </a>

            <a
              href="/login"
              className="-m-2.5 inline-flex items-center justify-center px-4 py-2 rounded-md p-2.5 text-black"
            >
              <FontAwesomeIcon
                icon={faBell}
                className="text-indigo-600 w-6  h-5 mr-1"
              />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center px-4 py-2 rounded-md p-2.5 text-black"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="h-6 w-6 text-indigo-600"
              />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) =>
              item.name !== "Home" ? (
                <Popover key={item.name} className="relative">
                  <PopoverButton
                    onClick={() => handleNavItemClick(item.name)}
                    className="inline-flex items-center gap-x-1 text-md font-bold leading-6 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-md px-3 py-2"
                    style={{
                      backgroundColor: activeNavItem === item.name ? "" : "",
                    }}
                  >
                    <span>{item.name} </span>
                  </PopoverButton>

                  <PopoverPanel className="fixed left-1/2 z-10 mt-5 flex w-full max-w-7xl -translate-x-1/2 px-4 transition">
                    <div className="w-screen max-w-7xl flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                      <div
                        className="p-6 grid gap-6"
                        style={{
                          gridTemplateColumns:
                            "repeat(auto-fit, minmax(150px, 1fr))", // Adjust the min-width to control column width
                        }}
                      >
                        {(filteredSolutions || []).map((category) => (
                          <div
                            key={category.MainCategory}
                            className="flex flex-col"
                          >
                            <h3 className="text-sm font-bold text-indigo-600 mb-2">
                              {category.MainCategory}
                            </h3>
                            {category.subcategories && (
                              <div>
                                {category.subcategories.map((subcat) => (
                                  <a
                                    key={subcat.name}
                                    href={subcat.href}
                                    className="block text-black hover:text-indigo-600 mb-1 text-sm font-sans  "
                                  >
                                    {subcat.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </PopoverPanel>
                </Popover>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-md font-bold leading-6 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-md px-3 py-2"
                >
                  {item.name}
                </a>
              )
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/login"
              className="rounded-md px-3.5 py-2.5 text-white   hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 text-md font-bold leading-6 text-white-900"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-indigo-600 h-6"
              />
            </a>
            <a
              href="/login"
              className="rounded-md px-3.5 py-2.5 text-white   hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 text-md font-bold leading-6 text-white-900"
            >
              <FontAwesomeIcon icon={faHeart} className="text-indigo-600 h-6" />
            </a>

            <a
              href="/login"
              className="rounded-md px-3.5 py-2.5 text-white   hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 text-md font-bold leading-6 text-white-900"
            >
              <FontAwesomeIcon icon={faBell} className="text-indigo-600 h-6" />
            </a>

            <a
              href="/login"
              className="rounded-md px-3.5 py-2.5 text-white   hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 text-md font-bold leading-6 text-white-900"
            >
              <FontAwesomeIcon
                icon={faUserCircle}
                className="text-indigo-600 h-6"
              />
            </a>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src={headerLogo} className="h-10 w-auto" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                {Object.entries(data).map(([categoryName, sections]) => (
                  <Disclosure as="div" key={categoryName} className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-gray-900 hover:bg-indigo-600 hover:text-white">
                          {categoryName}
                          {sections && (
                            <ChevronDownIcon
                              aria-hidden="true"
                              className={`h-5 w-5 flex-none transition-transform duration-200 ${
                                open ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </Disclosure.Button>
                        {sections && (
                          <Disclosure.Panel className="mt-2 space-y-2 pl-4">
                            {sections.map((section) => (
                              <Disclosure as="div" key={section.MainCategory}>
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7  text-black hover:text-indigo-600">
                                      {section.MainCategory}
                                      {section.subcategories && (
                                        <ChevronDownIcon
                                          aria-hidden="true"
                                          className={`h-5 w-5 flex-none transition-transform duration-200 ${
                                            open ? "rotate-180" : ""
                                          }`}
                                        />
                                      )}
                                    </Disclosure.Button>
                                    {section.subcategories && (
                                      <Disclosure.Panel className="mt-2 space-y-2">
                                        {section.subcategories.map(
                                          (subcategory) => (
                                            <Disclosure.Button
                                              key={subcategory.name}
                                              as="a"
                                              href={subcategory.href}
                                              className="block rounded-lg py-2 pl-6 pr-3 text-sm  leading-7 text-black "
                                            >
                                              {subcategory.name}
                                            </Disclosure.Button>
                                          )
                                        )}
                                      </Disclosure.Panel>
                                    )}
                                  </>
                                )}
                              </Disclosure>
                            ))}
                          </Disclosure.Panel>
                        )}
                      </>
                    )}
                  </Disclosure>
                ))}
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-indigo-600 text-white"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}

export default Header;
