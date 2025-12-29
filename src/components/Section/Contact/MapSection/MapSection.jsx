"use client";

const ADDRESS_QUERY = "Mercury Centre, Central Way, Feltham TW14 0RN";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  ADDRESS_QUERY
)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

const MapSection = () => {
  return (
    <section className="google-map-two">
      <iframe
        title="One Click Handling location on Google Maps"
        src={MAP_EMBED_URL}
        className="google-map-two__map"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="google-map-two__link">
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            ADDRESS_QUERY
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
};

export default MapSection;