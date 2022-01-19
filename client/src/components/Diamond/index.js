import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { ShieldCheckIcon, XIcon } from '@heroicons/react/outline'

const product = {
  name: 'Diamond Adhesive',
  href: '#',
  price: '$45.00',
  description:
    "The Diamond Adhesive is our #1 selling advanced adhesive. This adhesive is an experienced lash artists go-to for its quick dry time and extended retention.",
  imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLDA5_Diamond5ml_Thumbnail_1024x1024@2x.jpg?v=1614015061',
  imageAlt: 'Light green canvas bag with black straps, handle, front zipper pouch, and drawstring top.',
  sizes: [
    { name: '6ML', description: 'The Diamond Adhesive is our #1 selling advanced adhesive. This adhesive is an experienced lash artists go-to for its quick dry time and extended retention.' },
    { name: '10ML', description: 'The Diamond Adhesive is our #1 selling advanced adhesive. This adhesive is an experienced lash artists go-to for its quick dry time and extended retention.' },
  ],
}
const policies = [
  {
    name: 'Free delivery all year long',
    description:
      'Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: '24/7 Customer Support',
    description:
      'Or so we want you to believe. In reality our chat widget is powered by a naive series of if/else statements that churn out canned responses. Guaranteed to irritate.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Fast Shopping Cart',
    description:
      "Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
  {
    name: 'Gift Cards',
    description:
      "We sell these hoping that you will buy them for your friends and they will never actually use it. Free money for us, it's great.",
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Diamond() {
  const [open, setOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  return (
    <div className="bg-gray-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Create account
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4">
                <a href="#" className="-m-2 p-2 flex items-center">
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="w-5 h-auto block flex-shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <main>
        {/* Product */}
        <div className="bg-white">
          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">

              <div className="mt-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
              </div>
            </div>

            {/* Product image */}
            <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>

            {/* Product form */}
            <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
              <section aria-labelledby="options-heading">
                <h2 id="options-heading" className="sr-only">
                  Product options
                </h2>

                <form>
                  <div className="sm:flex sm:justify-between">
                    {/* Size selector */}
                    <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                      <RadioGroup.Label className="block text-sm font-medium text-gray-700">Size</RadioGroup.Label>
                      <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            as="div"
                            key={size.name}
                            value={size}
                            className={({ active }) =>
                              classNames(
                                active ? 'ring-2 ring-indigo-500' : '',
                                'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                                  {size.name}
                                </RadioGroup.Label>
                                <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                                  {size.description}
                                </RadioGroup.Description>
                                <div
                                  className={classNames(
                                    active ? 'border' : 'border-2',
                                    checked ? 'border-indigo-500' : 'border-transparent',
                                    'absolute -inset-px rounded-lg pointer-events-none'
                                  )}
                                  aria-hidden="true"
                                />
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      Add to bag
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          {/* Details section */}
          <section aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                The Fine Details
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus excepturi maiores illo, nulla perspiciatis ducimus harum voluptates omnis numquam. Tempore eligendi quam ipsa dignissimos ipsam!
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              <div>
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLDA05_Diamond10ml_Gallery_4_720x.jpg?v=1614015025"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, dolorum dolor quasi, possimus dicta dolorem sit impedit esse quae asperiores nesciunt, eligendi dolore excepturi ipsum.
                </p>
              </div>
              <div>
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0539/7102/6115/products/Adhesives_BLDA10_Diamond10ml_Thumbnail_1024x1024@2x.jpg?v=1614015045"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur necessitatibus ipsum totam molestias a reprehenderit quasi nulla vitae amet nisi. Cumque, rem placeat. Cupiditate, ipsam.
                </p>
              </div>
            </div>
          </section>

          {/* Policies section */}
          <section aria-labelledby="policy-heading" className="mt-16 lg:mt-24">
            <h2 id="policy-heading" className="sr-only">
              Our policies
            </h2>
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
              {policies.map((policy) => (
                <div key={policy.name}>
                  <img src={policy.imageSrc} alt="" className="h-24 w-auto" />
                  <h3 className="mt-6 text-base font-medium text-gray-900">{policy.name}</h3>
                  <p className="mt-3 text-base text-gray-500">{policy.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}