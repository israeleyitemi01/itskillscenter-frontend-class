import React from 'react'

function ContactComponent() {
  return (
    <div className='contact'>
         <h1>Connect with me</h1>
         <p>I am always excited to explore new opportunities and collaborate on innovative projects.</p>
         <div className='contact-info'>
           <img src="img/israel-img.jpeg" alt="" />
           <div className='contact-details'>
           <h4>If you'd like to get in touch or discuss potential collaborations, please feel free to contact me.</h4>
           <h3>Connect on <a href='https://www.linkedin.com/in/israel-eyitemi-66b167264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'>LinkedIn</a></h3>
           <div className='contact-email'>
             <i class="fa fa-envelope"></i>
           <span className='email'><a href="mailto:israeleyitemi200@gmail.com" target='blank'>israeleyitemi200@gmail.com</a></span>
           </div>
           <div className='contact-phone'>
             <i class="fa fa-phone"></i>
             <a href="tel:+2348030925127">(+234) 8030925127</a>
               <a href="tel:+2349159036942">(+234) 9159036942</a>
               </div>
           </div>
         </div>
     </div>
  )
}

export default ContactComponent