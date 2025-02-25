import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: "",
        city: "",
        Date: "",
        Location: "",
        Venue: "",
        Time: "",
        CrowdStrength: "",
        SelectEvent: "",

    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendWhatsAppMessage = () => {
        const { name, number, email, message, city, Date, Venue, Time, SelectEvent, CrowdStrength, Location } = formData;

        if (!name || !number || !email || !message || !city || !Date || !Venue || !Time || !SelectEvent || !CrowdStrength || !Location) {
            alert("Please fill in all fields before sending the message.");
            return;
        }

        const url = `https://wa.me/919600417117?text=${encodeURIComponent(
            `Name of Customer: ${name}
    \nMobile Number: ${number}
    \nEmail: ${email} 
    \nCity: ${city}
    \nDate: ${Date}
    \nLocation: ${Location}
    \nVenue: ${Venue}
    \nTime: ${Time}
    \nSelect Event: ${SelectEvent}
    \nCrowd Strength: ${CrowdStrength}
    \nMessage: ${message}`
        )}`;


        window.open(url, "_blank");
    };

    return (
        <section className="top-container-1 bg-white" id="whatapp">
            <div>
                <h2 className="text-center    md:text-2xl font-bold  text-gray-700 md:mb-10 mb-0   ">Book Our Services</h2>
            </div>
            <div className="mt-2 mb-5 text-[12px] text-gray-400">
                <p>Let us be the people who sketch the outline and fill in the colors for the beautiful picture of your love story on your wedding day. Forget all the hassle of getting things coordinated, we are here to make you look 
                    flawless on your special day with our wedding photography services.</p>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 py-5">
                <div className="flex justify-center flex-col text-black ">

                    <div className="flex mb-4 ">
                        <label className="fontmobile md:text-xl  font-semibold  text-gray-700 w-1/2 ">Bride/Groom Name</label>
                        <input
                            type="text"
                            name="name"

                            className="w-full  text-[14px] rounded  border bg-gray-100 hover:border-gray-900 duration-300 delay-200 focus:outline-none focus:border-white"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex mb-4">
                        <label className=" fontmobile md:text-xl font-bold  text-gray-700 w-1/2 ">Mobile Number:</label>
                        <input
                            type="tel"
                            name="number"

                            className="w-full  rounded text-[14px]   bg-gray-100 hover:border-gray-900 duration-300 delay-200 border focus:outline-none focus:border-white"
                            value={formData.number}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex">
                        <label className="fontmobile md:text-xl font-bold  text-gray-700 w-1/2 ">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full  rounded text-[14px]   bg-gray-100 hover:border-gray-900 duration-300 delay-200 border  focus:outline-none focus:border-white"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex">
                        <label className="fontmobile md:text-xl font-bold  text-gray-700 w-1/2 ">City:</label>
                        <input
                            type="text"
                            name="city"
                            className="w-full  rounded text-[14px]   bg-gray-100 hover:border-gray-900 duration-300 delay-200 border  focus:outline-none focus:border-white"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex mb-4 ">
                        <label className="fontmobile md:text-xl font-bold  text-gray-700 w-1/2 ">Date:</label>
                        <input
                            type="date"
                            name="Date"

                            className="w-full   rounded text-[14px]   border bg-gray-100 hover:border-gray-900 duration-300 delay-200 focus:outline-none focus:border-white"
                            value={formData.Date}
                            placeholder="date"
                            onChange={handleChange}
                        />
                    </div>


                </div>
                <div className="flex justify-center flex-col text-black font-semibold">
                    <div className="flex mb-4">
                        <label className=" fontmobile md:text-xl font-bold   text-gray-700 w-1/2 ">Location:</label>
                        <input
                            type="text"
                            name="Location"

                            className="w-full  rounded  bg-gray-100 text-[14px]  hover:border-gray-900 duration-300 delay-200 border focus:outline-none focus:border-white"
                            value={formData.Location}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex">
                        <label className="fontmobile md:text-xl font-bold  text-gray-700 w-1/2 ">Venue</label>
                        <input
                            type="text"
                            name="Venue"
                            className="w-full  rounded  bg-gray-100 text-[14px]  hover:border-gray-900 duration-300 delay-200 border  focus:outline-none focus:border-white"
                            value={formData.Venue}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex mb-4">
                        <label className="fontmobile md:text-xl font-bold  text-gray-700 w-1/2 " >Time:</label>
                        <input
                            type="time"
                            name="Time"
                            className="w-full  rounded  bg-gray-100 text-[14px]  hover:border-gray-900 duration-300 delay-200 border  focus:outline-none focus:border-white"
                            value={formData.Time}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex mb-4">
                        <label className="fontmobile md:text-xl font-bold  text-gray-700 w-1/2 " >Select Event:</label>
                        <input
                            type="text"
                            name="SelectEvent"
                            className="w-full  rounded  bg-gray-100 text-[14px]  hover:border-gray-900 duration-300 delay-200 border  focus:outline-none focus:border-white"
                            value={formData.SelectEvent}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex mb-4">
                        <label className="fontmobile md:text-xl font-bold  text-gray-700 w-1/2 " >CrowdStrength:</label>
                        <input
                            type="text"
                            name="CrowdStrength"
                            className="w-full  rounded  bg-gray-100 text-[14px]  hover:border-gray-900 duration-300 delay-200 border  focus:outline-none focus:border-white"
                            value={formData.CrowdStrength}
                            onChange={handleChange}
                        />
                    </div>


                </div>

            </div>
            <div className=" mb-4 ">
                <label className="fontmobile md:text-xl font-bold  text-gray-700 w-1/2 ">Tell us more about the couple and the wedding *
                </label>
                <textarea
                    name="message"
                    className="w-full  rounded  bg-gray-100 text-[14px]  hover:border-gray-900 duration-300 delay-200 border focus:outline-none focus:border-white"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <div className="text-center  ">
                <button className="bg-green-400 fontmobile md:text-lg text-white font-bold md:inline transform transition-transform duration-300 hover:scale-110  md:px-6 md:py-2 px-2 py-0 rounded-full mb-4" onClick={sendWhatsAppMessage}>
                    send inquiry
                </button>
            </div>
        </section>
    );
};

export default Contact;
