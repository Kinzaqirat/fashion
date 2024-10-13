export default function Contact(){
    return (
        <div className="flex justify-center">


        <div className="bg-dark-purple w-[600px] h-[550px] mt-10 rounded-lg  shadow bounce-in-top ">
    
    
    <p style={{fontFamily:"Updock Static"}} className="flex text-center p-6 font-semibold text-md">
     
    
    We’d love to connect with you! If you have any questions, feedback, or just want to share your thoughts on fashion, please don’t hesitate to reach out. 
    </p>




    <form>
  <div className="space-y-12 ">

       

    <div className="border-b border-gray-900/10 pb-12 ">
      {/* <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 max-sm:w-[300px]">
        <div className="sm:col-span-3 ml-4 ">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 max-sm:text-sm max-sm:leading-6 "/>
          </div>
        </div>

        <div className="sm:col-span-3 mr-4">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4 ml-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
 
        <div className="sm:col-span-3 ml-4">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
          <div className="mt-2">
            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>United States</option>
              <option>Palistan</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>



    
   

        

   
      </div>
    </div>
  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6  ">
    <button type="button" className="text-sm font-semibold leading-6 text-gray-900 max-sm:mb-4 max-sm:mb-36">Cancel</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-5 max-sm:mb-36">Save</button>
  </div>
</form>

    
        </div>
    </div>
    
    
    )
}