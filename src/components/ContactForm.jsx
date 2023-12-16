import { useState } from "react"
import React from 'react'

export default function ContactForm() {

    const [user, setUser] = useState([])

    const [formData, setFormData] = useState({
        
      });

    const handleChange = (event) => {
        // Update form data when input values change
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
       setUser(prevArray => [...prevArray, formData])
       setFormData({})
    }

    console.log(user)
  return (
    <div className="body">
    <main className='contactForm'>
            <form action="submit" onSubmit={(e) => {handleSubmit(e)}}>
                <div className="name">
                    <label htmlFor="
                    name">Name: </label>
                    <input id="name" name="Name" type="text"  required onChange={(e) => {handleChange(e)}} />
                </div>
                <div className="email">
                    <label htmlFor="
                    email">Email: </label>
                    <input id="email" name="Email" type="email" required  onChange={(e) => {handleChange(e)}}/>
                </div>
                <div className="number">
                    <label htmlFor="number">Number: </label>
                    <input id="number" name="Number" type="text" required  onChange={(e) => {handleChange(e)}} />
                </div>
                <button type="submit">
                    Submit
                </button>

            </form>
        </main>
        <aside>
          {user.length && (<div>
            {user.map((i) => {
              return(
                <div className="card" key={i.Name}>{i.Name} - {i.Email} - {i.Number}</div>
              )
            })}
          </div>)}
        </aside>
    </div>
  )
}


// const contactForm = () => {
//     return ( 
//         <main>
//             <form action="submit">
//                 <div className="name">
//                     <label htmlFor="
//                     name">Name: </label>
//                     <input id="name" type="text" />
//                 </div>
//                 <div className="email">
//                     <label htmlFor="
//                     email">Email: </label>
//                     <input id="email" type="email" />
//                 </div>
//                 <div className="number">
//                     <label htmlFor="number">Number: </label>
//                     <input id="number" type="number" />
//                 </div>

//             </form>
//         </main>
//      );
// }
 
// export default contactForm;