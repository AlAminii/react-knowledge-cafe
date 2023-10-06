
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setbookmarks] = useState([])
  const [readingTime , setReadingTime] = useState(0)
  
  const addTobookmarks = (blog) =>{

 const newbookmarks = [...bookmarks, blog]
 setbookmarks(newbookmarks)

  }

  const handaleMarkasRead = time =>{
  const newreadingTime = readingTime+time;
  setReadingTime(newreadingTime)
  }
  
  return (
    <>
     <Header></Header>
   <div className='md:flex max-w-7xl mx-auto '>
   <Blogs  handaleMarkasRead={ handaleMarkasRead} addTobookmarks={addTobookmarks}></Blogs>
   <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
   </div>

    </>
  )
}

export default App
