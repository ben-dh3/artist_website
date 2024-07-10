
export default function Contact() {
    return(
        <div id="contact" className="my-20 space-y-10 flex flex-col max-w-2xl rounded-lg backdrop-blur bg-white border border-gray-200 shadow p-4">
            <div className="text-center text-5xl text-colour font-AzeretMonoItalic">Contact</div>
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium">Name</label>
                        <input type="text" id="name" className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 bg-white" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input type="email" id="email" className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 bg-white" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium">Message</label>
                        <textarea id="message" className="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 bg-white" />
                    </div>

                    <div className="mt-3 flex items-start">
                        <div className="flex mt-0.5">
                            <input id="disclaimer" type="checkbox" className="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 bg-white"/>
                        </div>
                        <div className="ml-3">
                            <label htmlFor="disclaimer" className="cursor-pointer select-none text-sm text-gray-600">
                            By submitting this contact form, you acknowledge and agree to the collection of your personal information.
                            </label>
                        </div>
                    </div>
                    <div className="bg-green-300 text-colour text-white text-2xl p-2 rounded-3xl mt-10 grid">
                        <button type="submit">Send</button>
                    </div> 
                </form>
        </div>
    )
}