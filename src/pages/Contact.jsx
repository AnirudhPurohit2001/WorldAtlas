export const Contact = () => {

    const handleFormSubmit = (formData) => {
        console.log(formData.entries());
        const formInputData = Object.fromEntries(formData.entries())
        console.log(formInputData)
    };


    return <section className="section-contact">
        <h1 className="container-title"> Contact Us</h1>

        <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input
                    type="text"
                    required
                    className="form-control"
                    autoComplete="off"
                    placeholder="Enter your name"
                    name="usename"
                />
                <input
                    type="email"
                    required
                    autoComplete="off"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                />
                <textarea
                    className="form-control"
                    rows="10"
                    placeholder="Enter your message"
                    name="message"
                    required
                    autoComplete="off"
                ></textarea>

                <button type="submit" value="send">Send</button>
            </form>
        </div>
    </section>
};