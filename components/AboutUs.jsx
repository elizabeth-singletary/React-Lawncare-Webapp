export default function AboutUs () {
    return (
        <section class="bg-white border-b py-8">
      <div class="container max-w-5xl mx-auto m-8">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          About Us
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 mt-10">
              Personalized Approach
            </h3>
            <p class="text-gray-600 mb-8">
              We understand that every lawn is unique, and we tailor our services to meet your specific requirements. We take the time to understand your goals and deliver customized solutions.
             
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <img src="/PersonalApproach.svg"  class="w-full sm:h-96 mx-auto" alt="SVG Image"/>
          </div>
        </div>
        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
          <div class="w-full sm:w-1/2 p-6 pt-0">
          <img src="/time.svg"  class="w-full sm:h-96 mx-auto" alt="SVG Image"/>
          </div>
          <div class="w-full sm:w-1/2 p-6 mt-6">
            <div class="align-middle">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Reliable and Timely Service
              </h3>
              <p class="text-gray-600 mb-8">
                We value your time and strive to provide reliable and punctual service. Count on us to arrive on schedule and complete the job efficiently without compromising quality.
             
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}