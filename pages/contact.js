import MyHeader from "@/component/header"
export default function Contact() {
    return (
      <>
      <div class="container h-screen w-1000 mx-auto bg-slate-900">
      <br></br>
<div class="container my-24 px-6 mx-auto bg-slate-700">
<MyHeader title="Contact Us"/>
  <section class="mb-32 text-white-800">
    <div class="flex flex-wrap">
      
      <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
      <br></br><br></br>

        <h2 class="text-3xl text-white font-bold mb-6">Contact us</h2>
        <p class="text-white mb-6">
        Stay up to date with worldwide news from our News Portal. Our news articles give a global perspective to human stories
        </p>
        <p class="text-white mb-2">Bashundhara R/A, 94126, Dhaka</p>
        <p class="text-white mb-2">+ 01 234 567 89</p>
        <p class="text-white mb-2">newsportal@gmail.com</p>
      </div>
      <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <form>
          <div class="form-group mb-6">
            <input type="text" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="Name"/>
          </div>
          <div class="form-group mb-6">
            <input type="email" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Email address"/>
          </div>
          <div class="form-group mb-6">
            <textarea class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
          </div>
          <div class="form-group form-check text-center mb-6">
            <input type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-slate-900 checked:border-slate-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck87" checked/>
            <label class="form-check-label inline-block text-white" for="exampleCheck87">Send me a copy of this
              message</label>
          </div>
          <button type="submit" class="
            w-full
            px-6
            py-2.5
            bg-slate-900
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-slate-900 hover:shadow-lg
            focus:bg-slate-900 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-slate-900 active:shadow-lg
            transition
            duration-150
            ease-in-out">Send</button>
        </form>
      </div>
      <br></br><br></br>
    </div>
  </section>
  </div>
</div>
</>
    )}