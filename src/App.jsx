 
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
 
  const [bookMark, setBookMark] = useState([]);
  const [addTime, setAddTime] = useState(0);

  const addToBookMark = (blog) => {
    const newBookMarks = [...bookMark, blog];
    setBookMark(newBookMarks);
     
  }

  const addCountTime = (time, id) => {
     setAddTime(addTime + time);

     const remainingBooksmarks = bookMark.filter(mark => mark.id !== id);
     setBookMark(remainingBooksmarks);
  }

  return (
    <div>
      <Header></Header>
    
      <div className='max-w-6xl mx-auto p-8 md:flex md:gap-6'>
        <Blogs addToBookMark={addToBookMark} addTime={addCountTime}></Blogs>
        <Bookmarks bookMark={bookMark} setTime={addTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
