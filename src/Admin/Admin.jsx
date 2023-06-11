import axios from 'axios';
import TableData from './FilterData'

import { useState } from 'react';
function Add() {
  const [text ,     settext    ] = useState('')
  const [title ,    settitle   ] = useState('')
  const [prix ,     setprix    ] = useState('')
  const [category , setcategory] = useState('')
  const [type , settype]         = useState('')
  const [Category, setCategory] = useState("Category");

  
  const web = () => {
    return (<div className="alert alert-success" role="alert">
    <h4 className="alert-heading">Well done!</h4>
    <p>Aww yeah, you successfully read this important alert message. example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <hr/>
    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
  </div>)
  }
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const response = axios.post('https://localhost.pythonanywhere.com/api/items', formData);
      console.log(response.data)
      web()
      settext('')  
      settitle('')
      setprix('')
      setcategory('')
      setCategory('Category')
      settype('')
    }
    
      const [showMessage, setShowMessage] = useState(false);
      const handleClick = () => {
        setShowMessage(true);
    }
    function Msgshow() {
      return (<div class="alert alert-warning alert-dismissible fade show mt-5" role="alert">
                                    <strong>Holy guacamole!</strong> You tittle check in on some of those fields below.
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>)
    }
    function Btngroup() {
    
      return (
        <div className="btn-group mt-3" role="group" style={{width : "20rem"}}>
          <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {Category}
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => setCategory("Tshirt")}>    Tshirt    </button></li>
            <li><button className="dropdown-item" onClick={() => setCategory("Totebag")}> Totebag </button></li>
            <li><button className="dropdown-item" onClick={() => setCategory("PostWanted")}>       PostWanted       </button></li>
            <li><button className="dropdown-item" onClick={() => setCategory("Mugs")}>       Mug       </button></li>
            <li><button className="dropdown-item" onClick={() => setCategory("Hoodies")}>       Hoodies       </button></li>
            <li><button className="dropdown-item" onClick={() => setCategory("Utako")}>       Utako       </button></li>
          </ul>
        </div>
      );
    }
  return (
    <>
    <form onSubmit={handleSubmit} encType={"multipart/form-data"}>
        <div className="d-flex align-items-center flex-column">
        {showMessage && <Msgshow/>}
            <div className="justify-content-center my-5">
                <input type="text" style={{width : "20rem"}} className="form-control p-2 mt-3" value={title}    onChange={e => settitle(e.target.value)}    name="title"    placeholder="title"    />
                <input type="text" style={{width : "20rem"}} className="form-control p-2 mt-3" value={text}     onChange={e => settext(e.target.value)}     name="text"     placeholder="text"     />
                <input type="text" style={{width : "20rem"}} className="form-control p-2 mt-3" value={prix}     onChange={e => setprix(e.target.value)}     name="prix"     placeholder="prix"     />
                <input type="hidden" style={{width : "20rem"}} className="form-control p-2 mt-3" value={Category} onChange={e => setcategory(e.target.value)} name="category" placeholder={Category} />
                <Btngroup/>
                <input type="text" style={{width : "20rem"}} className="form-control p-2 mt-3" value={type}     onChange={e => settype(e.target.value)}     name="type"     placeholder="type" />
                <input type="file" style={{width : "20rem"}} className="form-control p-2 mt-3 mb-2" name="file" alt="" />
                 <br />
                <button className='btn btn-info mt-2' onClick={handleClick}>Show Message</button>
                  
            </div>
        </div>
    </form>
    <TableData />
    </>
  )
}

export default Add