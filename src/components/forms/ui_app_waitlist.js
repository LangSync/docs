// writen email form for waitlist.

import React, { Component } from "react";

function WaitlistForm() {
  return (
    <div className="waitlist-form">
      <div>
        <div>
          <h1>Join The Waitlist for our GUI App</h1>
        </div>
        <p>
          The GUI app is currently under development, and we're looking for beta
          testers. If you're interested in trying it out, please sign up for our
          waitlist below.
        </p>

        <form>
          <input type="email" id="emailField" placeholder="Your email" />
          <button>Join Waitlist</button>
        </form>

        <p class="success">
          Thanks for joining the waitlist! We'll be in touch soon.
        </p>
      </div>
    </div>
  );
}

export default WaitlistForm;
