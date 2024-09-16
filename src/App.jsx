
import MenuItems from "./components/components/MenuItems";
import { data } from "./utils/data";
import { Button, buttonVariants } from '../src/components/ui/button';
import { useState } from "react";



function App() {

  const [items,setItems] = useState(data);
  const [category,setCategory]= useState("all");
  
  

  const buttons = ['all', ...new Set(data.map((item)=>item.type))]
  

  const getItem = (e) =>{
    const type = e.target.dataset.type;
    if(type==='all'){
      setItems(data);
    }
    else{
      const specificItem = data.filter((item)=>item.type===type)
      setItems(specificItem)
    }
  }

  return (
    <div
      className='flex items-center justify-center
     bg-gray-100'
    >
      <article
        className='flex flex-col justify-center
      items-center mb-10'
      >
        <h2 className='capitalize font-mono text-gray-600 text-3xl  mb-10 mt-20 relative'>
          food items
          <span
            className='block w-full h-px          
           bg-gray-300 absolute b-[-5] l-0'
          ></span>
        </h2>

      <div className="grid gap-2 grid-cols-3 md:grid-cols-6">
        {buttons.map((button,index)=>{
          return (

            <Button
              className='bg-violet-500 text-white hover:bg-violet-400 hover:text-white capitalize  '
              variant='outline' 
              key={index}
              data-type={button}
              onClick={(e)=>getItem(e)}
            >
              {button}
            </Button>
          );
        })}
      </div>


        <section className='mt-10 w-max md:grid grid-cols-2 gap-10 md:w-11/12 lg:grid-cols-3 lg:w-full'>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className=' mb-4 md:grid hover:shadow-md transition ease-out delay-150 rounded'
              >
                <MenuItems {...item} />
              </div>
            );
          })}
        </section>
      </article>
    </div>
  );
}

export default App
