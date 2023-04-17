import React from 'react'

export default function Myform() {
  return (
    <>
         {/* <label>
        Text input: <input name="myInput" />
      </label>
      <hr />
     
      <label>
        Message: <textarea name="postContent" />
      </label>
      <hr />

      <label for="story">Message:</label>

<textarea id="story" name="story"
          rows="5" cols="30">
It was a dark and stormy night...
</textarea>
<hr/> */}

{/* <form style={{border:'1px solid black'}}>
    <p><input type='text' placeholder='Enter your name'/></p>
    <p><input type='email' placeholder='Enter your email'/></p>
    <p><textarea cols='25' rows='5' placeholder='Message'></textarea></p>

</form> */}


<div class="card2">
            <div class="card-back">
                <div class="inner-box">

                    <form action="" onsubmit="register()">

                            <h2>Get In Touch</h2>
                        <p><input type="name" id="name" placeholder="Your Name"/></p>
                        <p><input type="email" id="email2" placeholder="Your Email Id"/></p>
                        <p><textarea cols='25' rows='10' placeholder='Message'></textarea></p>
                        <button class="submit">Send Message</button>

                    </form>
                </div>
            </div>
        </div>

      
    </>
  )
}
