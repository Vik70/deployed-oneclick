'use client';

import { useEffect, useState } from "react";
import ServiceCardSix from "~/components/Ui/Cards/ServiceCardSix";

const Services = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./db/serviceDataSix.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <section className="services-three services-three--services padding">
            <div className="container">
                <div className="services-three--services__top">
                    <div className="title-box">
                        <h2>We Provide Comprehensive <br />Transport and Handling Solutions</h2>
                    </div>

                    <div className="text-box">
                        <p>At One Click Handling, we specialize in delivering tailored solutions to meet
the highest standards of safety, efficiency, and reliability. From secure storage
and time-critical deliveries to specialist handling of hazardous goods. We ensure
your cargo is managed with precision. </p>
                    </div>
                </div>
                <div className="row">
                    {data?.map((item, index) => (
                        <ServiceCardSix item={item} key={index}></ServiceCardSix>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;