"use client"
const MapSection = () => {
    return (
        <section className="google-map-two">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.868557103386!2d-0.4132407230375551!3d51.460569714122926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876731017a2f93b%3A0x693bad99a6b6fad0!2sMercury%20centre%2C%20Central%20Way%2C%20Feltham%20TW14%200RN!5e0!3m2!1sen!2suk!4v1741213125343!5m2!1sen!2suk"
                className="google-map-two__map" allowFullScreen></iframe>
        </section>
    );
};

export default MapSection;