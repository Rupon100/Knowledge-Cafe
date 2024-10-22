 
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookMark, setBookMark] = useState([]);
  const [addTimearray, setAddTimeArray] = useState([]);
  const [addTime, setAddTime] = useState(0);
 

  const addToBookMark = (blog) => {
    const exist = bookMark.find(mark => mark.id === blog.id)
    if(!exist){
      const newBookMarks = [...bookMark, blog];
      setBookMark(newBookMarks);  
    }else{
      alert("Already added!");
    } 
  }

  const addCountTime = (blog) => {
      const alreadyAdded = addTimearray.find(mark => mark.id === blog.id);
      if(!alreadyAdded){
        const newAddTimeArray = [...addTimearray, blog];
        setAddTimeArray(newAddTimeArray);
        const ttlTime = newAddTimeArray.reduce((acc, currentTime) => acc +  currentTime.readingTime, 0)
        setAddTime(ttlTime)
       
      }else {
        alert('Already added!');
      }  
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
