import { useState } from 'react'
import imagen from './assets/Watermelon_Outline.svg'
import './App.css'

function App () {
  const [show,setShow] = useState(true);

  return (
    
    <>

    <div className='flex flex-col gap-2'>
      <div /*Contenedor principal */ className='w-[420px] m-auto' >
        <div className='flex justify-center gap-2 h-[140px] bg-[#EB524A]'>
          <div /*imagen de perfil */ >
            <img src={imagen} alt="" className='w-24 h-24 mt-2 rounded-[100%]'/>
          </div>
            <div /* Informacion de perfil */ className='flex flex-col  w-48 mt-6 gap-2' >
              <h2 className='text-xs text-white text-left'> Ricardo Cavallo </h2>
              <h3 className='text-[10px] right-10 text-white text-left'> Hi, I'm Riccardo Cavallo and I'm a Graphic and Visual Designer. </h3>
            </div>
          </div>
          

          
          <footer>

          <div  className={`h-10 ${show ? 'bg-white' : 'bg-[#C63535]'} relative`}>

            <button onClick={() => setShow(!show)} className={`${show ? 'right-[130px] rounded-full w-36 h-12' : 'right-4 rounded-[50%] h-12'} absolute button-0 -top-6 flex justify-center bg-[#FFBE44] `} >
            <svg className={`${show ? 'hidden' : 'w-6 h-7 m-3'}`} fill='#C63535' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>
            <p className='mt-3 text-[#C63535] text-left'>{show ? 'CONTACT ME!' : ''}</p>
            </button>

            {
              show ? null : <p className='flex ml-4 pt-2 text-white'>CONTACT ME</p>
            }

          </div>
          </footer>
        </div>


        { show ? null : ( 
        <div   className='m-auto flex flex-col gap-2 '>
          <button /*Email*/ className='border-2 rounded-md shadow-md w-[420px] h-24 flex bg-gray-100'>
              <svg className='w-24 h-16 m-3 mt-3 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                <div className='mt-6 ml-11 '>
                  <p className='text-left'>Email</p>
                  <p className='text-left'>tntkevin065@gmail.com</p>
                </div>
          </button>

          <button /*Facebook*/ className='border-2 rounded-md shadow-md w-[420px] h-24 flex bg-gray-100'>
          <svg className='w-24 h-16 m-3 mt-3 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                <div className='mt-6 ml-11 '>
                  <p className='text-left'>Facebook</p>
                  <p className='text-left'>https://www.facebook.com/profile</p>
                </div>
          </button>

          <button /*Twitter*/ className='border-2 rounded-md shadow-md w-[420px] h-24 flex bg-gray-100'>
          <svg className='w-24 h-16 m-3 mt-3 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                <div className='mt-6 ml-11 '>
                  <p className='text-left'>Twitter</p>
                  <p className='text-left'>www.twitter.com</p>
                </div>
          </button>
        </div>  
        )
        }

      </div>
    </>
  )
}

export default App