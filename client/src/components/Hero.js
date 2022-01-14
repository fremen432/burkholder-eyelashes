import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Hero() {
  return (
    <main>
      <div className="mt-24 mx-auto max-w-7xl px-4 sm:mt-32">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to the Eyelash Studio
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 divide-gray-600 hover:bg-gray-700 md:text-lg"
                >
                  <span className='pr-6'>Get the bundle</span>
                  <span className='pl-6'>$20</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
