import "./contact.scss";

export default function Contact() {
    return(
        <div>
            <form name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                    <label htmlFor="name">Name.</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email.</label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="message">Message.</label>
                    <textarea id="message" />
                </div>

                <div>
                    <div>
                        <input id="disclaimer" type="checkbox" />
                    </div>
                    <div>
                        <label htmlFor="disclaimer">
                        By submitting this contact form, you acknowledge and agree to the collection of your personal information.
                        </label>
                    </div>
                </div>
                <div>
                    <button type="submit">Send.</button>
                </div>
                    
            </form>
        </div>
    )
}