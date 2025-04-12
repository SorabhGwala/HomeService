import * as React from 'react';

const BookCardService = () => {
  return (
    <div>
      <section className="flex justify-center items-center mt-16 scrollbar-hide overflow-auto">
        <div className="grid justify-evenly border-2 border-black rounded-3xl lg:w-[45vw] h-[75vh] p-4 overflow-x-scroll gap-8 sm:w-[80vw] m-4 scrollbar-hide">
          <div className="grid justify-center ">
            <img
              className="w-full h-[40vh] object-cover object-left-top rounded-xl"
              src="/cleaning.jpg"
              alt="Cleaning Service"
            />
            <div className="w-[100%] bg-stone-100 rounded-2xl p-4 m-2">
              <p className="text-2xl font-semibold font-sans">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat veritatis earum nulla odio sunt error.
              </p>
              <div className="flex items-center m-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  5.0
                </span>
              </div>
              <button
                className="flex justify-center items-center m-4 bg-purple-700 text-white font-semibold py-2 px-4 border-2 border-stone-500 rounded-lg w-full sm:w-auto hover:bg-purple-800 transition-all"
                type="button"
              >
                Book Service
              </button>
            </div>
            <hr className="w-[100%] border-1 border-slate-400" />
            <div className="flex p-3 gap-4 justify-between overflow-x-auto scrollbar-hide">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="border-2 w-[20%] min-w-[150px] border-slate-400 rounded-3xl p-4 flex flex-col items-center"
                >
                  <p className="text-center">Noice issue</p>
                  <svg
                    className="h-5 w-5 text-yellow-300 mt-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="mt-2">160</p>
                  <button className="text-purple-600 px-3 py-1 rounded-lg border-2 border-slate-300 mt-4">
                    Add
                  </button>
                </div>
              ))}
            </div>
            <img className="w-[100vw] p-5" src="/uc warranty.png" alt="Warranty" />
            <img src="/howitsworks.jpg" alt="How it Works" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCardService;
