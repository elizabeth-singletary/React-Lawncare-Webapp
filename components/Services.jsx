export default function Services() {
    return (
        <section class="bg-white border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Services
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 px-6 mt-4">
                Lawn Maintenance
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
              We offer comprehensive lawn maintenance services tailored to your specific needs. From mowing and edging to weed control and fertilization, we'll keep your lawn looking pristine.
              </p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-start">
              <button class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-sky-500">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 px-6 mt-4">
                Tree and Shrub Care
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Our experts provide expert care for your trees and shrubs, including pruning, trimming, disease prevention, and pest control. We'll keep your plants healthy and flourishing.
              </p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-center">
              <button class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-sky-500">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                xGETTING STARTED
              </p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-end">
              <button class="mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out bg-sky-500">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}