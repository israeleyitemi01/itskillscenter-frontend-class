import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <h2>Designer for 7+ years. I've<br /> loved every minute of it.</h2>
        </div>
        <div className='footer-bottom'>
            <div className='footer-bottom-content'>
                <div className='footer-number'><h2>1</h2></div>
                <p>I enjoy the process</p>
            </div>
            <div className='footer-bottom-content'>
                <div className='footer-number'><h2>2</h2></div>
                <p>I know what it means to be on a team</p>
            </div>
            <div className='footer-bottom-content f3'>
                <div className='footer-number'><h2>3</h2></div>
                <p>Always curious and always learning</p>
            </div>
        </div>
        <div className='social-logo'>
            <a href="https://x.com/IsraelEyitemi01" target='blank'><i class="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/israel-eyitemi-66b167264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'><i class="fa fa-linkedin"></i></a>
            <a href="https://github.com/israeleyitemi01" target='blank'><i class="fa fa-github"></i></a>
        </div>
    </div>
  )
}

export default Footer