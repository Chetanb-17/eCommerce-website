import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

import Header from "../Layout/header";

import { products } from "../config/dashboardData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Initialize as null
  const [selectedColor, setSelectedColor] = useState(null); // Add state for selected color
  const [selectedSize, setSelectedSize] = useState(null); // Add state for selected size

  // If no product is selected, use a default value
  const currentProduct = selectedProduct || products[0];

  return (
    <>
      <Header />
      <br />
      <div className="p-4 mt-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative cursor-pointer   sm:h-full sm:w-full md:dashCard lg:dashCard xl:dashCard  border-2 border-custom-red rounded-xl"
              // className="bg-white border border-gray-200 rounded-l  shadow-md overflow-hidden"
              onClick={() => {
                setSelectedProduct(product);
                setOpen(true);
              }}
            >
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="mt-2 text-lg">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          className="relative z-50"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
              <DialogPanel
                transition
                className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
              >
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img
                        alt={currentProduct.imageAlt}
                        src={currentProduct.imageSrc}
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {currentProduct.name}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-2"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">
                          {currentProduct.price}
                        </p>

                        <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {/* Rating stars can be added here */}
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                    key={rating}
                                    aria-hidden="true"
                                    className={classNames(
                                      currentProduct.rating > rating
                                        ? "text-yellow-400"
                                        : "text-indigo-200",
                                      "h-5 w-5 flex-shrink-0"
                                    )}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="sr-only">
                              {currentProduct.rating} out of 5 stars
                            </p>
                            <a
                              href="/"
                              className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              {currentProduct.reviewCount} reviews
                            </a>
                          </div>
                        </div>
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-10"
                      >
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          <fieldset aria-label="Choose a color">
                            <legend className="text-sm font-medium text-gray-900">
                              Color
                            </legend>

                            <RadioGroup
                              value={selectedColor}
                              onChange={setSelectedColor}
                              className="mt-4 flex items-center space-x-3"
                            >
                              {currentProduct.colors.map((color) => (
                                <Radio
                                  key={color.name}
                                  value={color}
                                  aria-label={color.name}
                                  className={({ checked }) =>
                                    classNames(
                                      color.selectedClass,
                                      "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none",
                                      checked
                                        ? "ring-2 ring-offset-2 ring-indigo-500"
                                        : "ring-1 ring-gray-300"
                                    )
                                  }
                                >
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      "h-8 w-8 rounded-full border border-black border-opacity-10"
                                    )}
                                  />
                                </Radio>
                              ))}
                            </RadioGroup>
                          </fieldset>
                          <fieldset
                            aria-label="Choose a size"
                            className="mt-10"
                          >
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium text-gray-900">
                                Size
                              </div>
                              <a
                                href="/"
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Size guide
                              </a>
                            </div>

                            <RadioGroup
                              value={selectedSize}
                              onChange={setSelectedSize}
                              className="mt-4 grid grid-cols-4 gap-4"
                            >
                              {currentProduct.sizes.map((size) => (
                                <Radio
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ checked, disabled }) =>
                                    classNames(
                                      "relative flex items-center justify-center rounded-lg py-3 text-sm font-medium ring-1 ring-gray-300",
                                      disabled
                                        ? "cursor-not-allowed bg-gray-100 text-gray-300"
                                        : "cursor-pointer bg-gray-200 text-gray-900",
                                      checked ? "bg-indigo-600 text-white" : ""
                                    )
                                  }
                                >
                                  {size.name}
                                </Radio>
                              ))}
                            </RadioGroup>
                          </fieldset>
                          <button
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Add to bag
                          </button>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
