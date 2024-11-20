import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BooksContext } from '../context/BooksContext'

const BookCards = ({title}) => {

  //* Calling My Context 
  const { books } = useContext(BooksContext);

  return (
    <div className='px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32 mt-[5rem] '>
        <h1 className='text-[1.5rem] sm:text-[2rem] text-gray-950 font-medium '>{title}</h1>
         <div className='flex justify-center flex-wrap gap-[2rem] '>
          {books && books.map((e)=>(
            <div 
              className=' w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-4 
              overflow-hidden rounded-lg shadow-lg transition-shadow' 
              key={e._id}
            >
              <Link 
                to=''
                className=''
                key={e._id}
              >
                  <img 
                    src={e.img}
                    alt='books Images'
                    className='w-full object-cover h-[350px] sm:h-[400px] md:h-[450px] lg:h-[350px]'
                  />
              </Link>
                <div className='py-[2rem] text-center bg-lime-50'>
                  <h1 className='text-[1.2rem] font-semibold text-gray-800'>{e.title.slice(0, 17)}...</h1>
                  <p className='text-sm text-gray-700 mb-2'>{e.description.slice(0, 50)}...</p>
                  <div className='flex justify-between items-center'>
                    <span className='lowercase font-semibold text-sm italic '>by {e.author}</span>
                    <button className='bg-orange-600 rounded-md py-2 px-4 text-white font-bold text-sm'>Shop Book</button>
                  </div>
                </div>
              </div>
          ))}
        </div> 
    </div>
  )
}

export default BookCards