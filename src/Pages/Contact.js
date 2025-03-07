import "../CSS/support.css";
import { Divider } from "@mui/material";

export default function Contact() {
  return (
    <div class="page">
      <div class="subPage2">
        <div className="section" id="contact">
          <div className="contactme">
            <form action="https://formspree.io/f/movvlobp" method="POST">
              <div className="md:text-4xl sm:text-xl mb-3">
                <h1>Contact Support</h1>
              </div>
              <Divider class="mb-6" />

              <div class="form">
                <div class="formColumn">
                  <div>
                    <select id='reason' name="reason" required>
                      <option value="" disabled selected>
                        Reason for Contacting
                      </option>
                      <option value="General">General</option>
                      <option value="Refund">Refund</option>
                    </select>
                  </div>

                  <input
                    type="text"
                    id='name'
                    name="name"
                    placeholder="Full Name"
                    autocomplete="off"
                    required
                  />
                  <input
                    type="email"
                    id='email'
                    name="email"
                    placeholder="Email Address"
                    autocomplete="off"
                    required
                  />
                  <input
                    type="text"
                    id='orderNum'
                    name="orderNum"
                    placeholder="Order Number"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="formColumn">
                  <textarea
                    rows="10"
                    id='msg'
                    cols="60"
                    name="message"
                    placeholder="What Can We Help You With?"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
              <Divider class="mt-2 mb-5" />
              <button id='submit' type="submit" className="submitBtn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
