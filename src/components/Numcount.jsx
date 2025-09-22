import { useState } from "react";
import CountUp from "react-countup";
import { Parallax } from "react-parallax";

const NumCount = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [result, setResult] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "e52bab3c-6d7d-46a9-b6bc-08ce3470ec20");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully!");
            setEmail("");
            setPhone("");
            event.target.reset();
            setShowPopup(true);
        } else {
            console.log("Error:", data);
            setResult(data.message);
        }
    };

    return (
        <Parallax bgImage="/award/testmoni.jpg" strength={400} className="py-10">
            <section className=" text-white py-10">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { end: 100, label: "Locations", suffix: "+" },
                        { end: 500, label: "Model Shoots", suffix: "+" },
                        { end: 1000, label: "Weddings", suffix: "+" },
                        { end: 1, label: "Dream" },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <p className="text-3xl font-semibold">
                                <CountUp
                                    start={0}
                                    end={item.end}
                                    duration={3}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                                {item.suffix && item.suffix}
                            </p>
                            <p className="text-lg font-medium">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Parallax>

    );
};

export default NumCount;
