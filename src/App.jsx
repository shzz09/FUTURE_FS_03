import { useEffect, useState } from "react";
import "./App.css";

const PHONE_DISPLAY = "9148586589";
const WHATSAPP_NUMBER = "9148586589";
const INSTAGRAM_URL = "https://www.instagram.com/";
const EMAIL = "hello@lumera-beauty.com";

const services = [
  {
    category: "Hair",
    title: "Signature Haircut",
    description: "Personalized cuts designed around your face shape, style and personality.",
    price: "₹499",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Hair",
    title: "Hair Styling",
    description: "Elegant blowouts, curls and occasion-ready styling for every look.",
    price: "₹699",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Hair",
    title: "Hair Colour",
    description: "Modern colour techniques that add dimension, shine and personality.",
    price: "₹1,499",
    duration: "90 min",
    image:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Hair",
    title: "Luxury Hair Spa",
    description: "Deep nourishment and scalp care for softer, healthier-looking hair.",
    price: "₹999",
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Hair",
    title: "Keratin / Smoothening",
    description: "Salon-grade smoothing for polished, manageable and glossy hair.",
    price: "₹2,999",
    duration: "150 min",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Skin",
    title: "Signature Facial",
    description: "A relaxing facial ritual designed to refresh, hydrate and brighten.",
    price: "₹799",
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Skin",
    title: "Premium Cleanup",
    description: "A refreshing cleansing treatment for smooth and renewed-looking skin.",
    price: "₹599",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Skin",
    title: "De-Tan Ritual",
    description: "A gentle salon treatment to revive dull and sun-exposed skin.",
    price: "₹699",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Makeup",
    title: "Party Makeup",
    description: "Camera-ready makeup with a refined finish for celebrations and events.",
    price: "₹2,999",
    duration: "90 min",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Makeup",
    title: "Engagement Makeup",
    description: "Soft-glam styling curated to complement your outfit and personality.",
    price: "₹4,999",
    duration: "120 min",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Makeup",
    title: "Bridal Makeup",
    description: "A complete bridal beauty experience created for your special day.",
    price: "₹9,999",
    duration: "180 min",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Nails",
    title: "Manicure",
    description: "Relaxing hand care with nail shaping, cuticle care and finishing.",
    price: "₹499",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Nails",
    title: "Pedicure",
    description: "Complete foot care for beautifully groomed and refreshed feet.",
    price: "₹599",
    duration: "50 min",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Nails",
    title: "Signature Nail Art",
    description: "Elegant nail designs ranging from minimal details to statement looks.",
    price: "₹799",
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Spa",
    title: "Head Massage",
    description: "A calming scalp and head massage designed to help you unwind.",
    price: "₹499",
    duration: "30 min",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Spa",
    title: "Relaxation Spa",
    description: "A peaceful wellness ritual combining massage and relaxation techniques.",
    price: "₹1,499",
    duration: "75 min",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=95",
  },
];

const gallery = [
  {
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Hair",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1645856049507-409bcefa208c?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Nails",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Nails",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Skin",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Spa",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1400&q=95",
  },
  {
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=95",
  },
];

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Appointments are recommended so we can reserve your preferred service and time.",
  },
  {
    q: "Can I choose my stylist?",
    a: "Yes. You can mention your preferred stylist while booking, subject to availability.",
  },
  {
    q: "Do you offer bridal makeup?",
    a: "Yes. Bridal, engagement and occasion makeup can be booked in advance.",
  },
  {
    q: "How long does a hair spa take?",
    a: "A typical hair spa session takes around 60 minutes, depending on the treatment.",
  },
  {
    q: "Can I reschedule my appointment?",
    a: "Please contact the salon in advance if you need to change your appointment.",
  },
  {
    q: "Can I ask for a consultation before a hair treatment?",
    a: "Yes. A consultation can help determine the treatment and style suitable for your hair.",
  },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a9.9 9.9 0 0 0-8.56 14.9L2 22l5.25-1.38A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31A8.18 8.18 0 1 1 12 20.2Zm4.5-6.13c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.13-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.01-.39.11-.52.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.87-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.52.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.7" r="1.2" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

function LipstickIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 3.5h5v2H9v-2Zm1 2h3v2.2l2 1.3V21H7V8.9l3-1.2V5.5Zm-1 5.1V19h5v-7.2l-2.5-1.6L9 10.6Z"
      />
      <path fill="currentColor" d="M8 19h8v2H8z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 2h2v2h6V2h2v2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V2Zm12 8H5v10h14V10ZM7 12h3v3H7v-3Z"
      />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceFilter, setServiceFilter] = useState("All");
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [activeFaq, setActiveFaq] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [mapLocation, setMapLocation] = useState("Davangere, Karnataka");
  const [locationStatus, setLocationStatus] = useState("Showing LUMÉRA location area");

  const heroSlides = [
    {
      category: "HAIR",
      title: "Hair that feels",
      emphasis: "beautifully yours.",
      image:
        "https://images.pexels.com/photos/38714663/pexels-photo-38714663.jpeg?auto=compress&cs=tinysrgb&w=2200",
      position: "center center",
    },
    {
      category: "MAKEUP",
      title: "Makeup that reveals",
      emphasis: "your glow.",
      image:
        "https://images.unsplash.com/photo-1692318519979-40cbd382f9c0?auto=format&fit=crop&w=2200&q=95",
      position: "right center",
    },
    {
      category: "NAILS",
      title: "Details that make",
      emphasis: "the difference.",
      image:
        "https://images.pexels.com/photos/15491629/pexels-photo-15491629.jpeg?auto=compress&cs=tinysrgb&w=2200",
      position: "center center",
    },
    {
      category: "SPA",
      title: "Pause. Relax.",
      emphasis: "Feel renewed.",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=95",
      position: "center center",
    },
    {
      category: "BRIDAL",
      title: "For your most",
      emphasis: "beautiful moments.",
      image:
        "https://images.unsplash.com/photo-1645856049507-409bcefa208c?auto=format&fit=crop&w=2200&q=95",
      position: "right center",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const filteredServices =
    serviceFilter === "All"
      ? services
      : services.filter((service) => service.category === serviceFilter);

  const filteredGallery =
    galleryFilter === "All"
      ? gallery
      : gallery.filter((item) => item.category === galleryFilter);

  const openWhatsApp = (message = "Hello LUMÉRA BEAUTY STUDIO, I would like to book an appointment.") => {
    if (WHATSAPP_NUMBER.includes("X")) {
      alert("Add the salon WhatsApp number in App.jsx first.");
      return;
    }

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const updateLiveLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("Live location is not supported by this browser.");
      return;
    }

    setLocationStatus("Updating live location…");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        setMapLocation(`${latitude},${longitude}`);
        setLocationStatus("Map updated to your live location");
      },
      () => {
        setLocationStatus("Location permission was not granted. Showing LUMÉRA area.");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const submitBooking = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const message = `
Hello LUMÉRA BEAUTY STUDIO,

I would like to book an appointment.

Name: ${form.get("name")}
Phone: ${form.get("phone")}
Email: ${form.get("email") || "Not provided"}
Category: ${form.get("category")}
Service: ${form.get("service")}
Stylist: ${form.get("stylist") || "Any available stylist"}
Date: ${form.get("date")}
Time: ${form.get("time")}
Message: ${form.get("message") || "None"}
`;

    if (WHATSAPP_NUMBER.includes("X")) {
      setSubmitted(true);
      return;
    }

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site">

      <div className="announcement">
        <span>WELCOME TO LUMÉRA</span>
        <span>Beauty • Style • Confidence</span>
        <span>Appointments Recommended</span>
      </div>

      <header className="navbar">
        <button className="logo" onClick={() => scrollTo("home")}>
          <span className="logo-mark">
            <span>L</span>
            <LipstickIcon />
          </span>
          <span>
            <strong>LUMÉRA</strong>
            <small>BEAUTY STUDIO</small>
          </span>
        </button>

        <nav className="desktop-nav">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("pricing")}>Pricing</button>
          <button onClick={() => scrollTo("team")}>Our Team</button>
          <button onClick={() => scrollTo("gallery")}>Gallery</button>
          <button onClick={() => scrollTo("offers")}>Offers</button>
          <button onClick={() => scrollTo("reviews")}>Reviews</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </nav>

        <button className="nav-book" onClick={() => scrollTo("booking")}>
          <CalendarIcon />
          Book Appointment
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {[
            ["Home", "home"],
            ["Services", "services"],
            ["Pricing", "pricing"],
            ["Our Team", "team"],
            ["Gallery", "gallery"],
            ["Offers", "offers"],
            ["Reviews", "reviews"],
            ["Book Appointment", "booking"],
            ["Contact & Location", "contact"],
            ["FAQs", "faq"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </div>
      )}

      <main>

        <section id="home" className="hero">
          <div
            className="hero-background"
            style={{
              backgroundImage: `url(${heroSlides[heroIndex].image})`,
              backgroundPosition: heroSlides[heroIndex].position,
            }}
          />

          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow light">LUXURY BEAUTY • MODERN SELF-CARE</p>

            <h1>
              {heroSlides[heroIndex].title}
              <br />
              <em>{heroSlides[heroIndex].emphasis}</em>
            </h1>

            <p className="hero-copy">
              A refined beauty experience where contemporary style,
              personalized care and timeless elegance come together.
            </p>

            <div className="hero-buttons">
              <button
                className="outline-button"
                onClick={() => scrollTo("services")}
              >
                Explore Services <span>↗</span>
              </button>
            </div>

            <div className="hero-service-tags" aria-label="Current beauty category">
              <span key={heroSlides[heroIndex].category}>
                {heroSlides[heroIndex].category}
              </span>
            </div>
          </div>


          <div className="hero-dots">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.category}
                className={heroIndex === index ? "active" : ""}
                onClick={() => setHeroIndex(index)}
                aria-label={`Show ${slide.category} image`}
              />
            ))}
          </div>
        </section>

        <section className="intro section">
          <div className="intro-image">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=95"
              alt="LUMÉRA salon interior"
            />
            <div className="image-badge">
              <span>EST.</span>
              <strong>L</strong>
              <span>BEAUTY</span>
            </div>
          </div>

          <div className="intro-content">
            <p className="eyebrow">WELCOME TO LUMÉRA</p>
            <h2>Where beauty becomes <em>an experience.</em></h2>
            <p>
              LUMÉRA BEAUTY STUDIO is designed around one simple idea:
              you deserve to feel confident, cared for and completely yourself.
            </p>
            <p>
              From signature hair services to radiant skin treatments,
              occasion makeup, nail artistry and relaxing spa rituals,
              every visit is thoughtfully curated.
            </p>

            <div className="signature">
              <span>Personal care</span>
              <span>Modern artistry</span>
              <span>Refined experience</span>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading centered">
            <p className="eyebrow">OUR SIGNATURE SERVICES</p>
            <h2>Beauty, <em>beautifully curated.</em></h2>
            <p>
              Discover carefully selected services for hair, skin, makeup,
              nails and relaxation.
            </p>
          </div>

          <div className="filter-tabs">
            {["All", "Hair", "Skin", "Makeup", "Nails", "Spa"].map((item) => (
              <button
                key={item}
                className={serviceFilter === item ? "active" : ""}
                onClick={() => setServiceFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="service-grid">
            {filteredServices.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <span>{service.category}</span>
                </div>

                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="service-meta">
                    <strong>{service.price}</strong>
                    <span>{service.duration}</span>
                  </div>

                  <button
                    className="text-button"
                    onClick={() => scrollTo("booking")}
                  >
                    Book This Service <span>↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="pricing-section">
          <div className="pricing-inner">
            <div className="section-heading light-heading">
              <p className="eyebrow light">SIGNATURE PRICING</p>
              <h2>Simple. Elegant. <em>Transparent.</em></h2>
              <p>
                Indicative starting prices. Final pricing may vary based on
                consultation, hair length and treatment requirements.
              </p>
            </div>

            <div className="pricing-list">
              {[
                ["Signature Haircut", "45 min", "₹499"],
                ["Luxury Hair Spa", "60 min", "₹999"],
                ["Signature Facial", "60 min", "₹799"],
                ["Party Makeup", "90 min", "₹2,999"],
                ["Manicure", "45 min", "₹499"],
                ["Relaxation Spa", "75 min", "₹1,499"],
              ].map(([name, duration, price]) => (
                <div className="price-row" key={name}>
                  <div>
                    <h3>{name}</h3>
                    <span>{duration}</span>
                  </div>
                  <strong>{price}</strong>
                  <button onClick={() => scrollTo("booking")}>Book</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why section">
          <div className="section-heading centered">
            <p className="eyebrow">THE LUMÉRA DIFFERENCE</p>
            <h2>Made for your <em>best self.</em></h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <span>01</span>
              <h3>Personalized Beauty</h3>
              <p>Every service begins with understanding your style, needs and desired finish.</p>
            </div>

            <div className="why-card featured">
              <span>02</span>
              <h3>Modern Techniques</h3>
              <p>Contemporary styling and beauty techniques designed for polished, wearable results.</p>
            </div>

            <div className="why-card">
              <span>03</span>
              <h3>Relaxed Experience</h3>
              <p>A calm, elegant environment where your appointment feels like time for yourself.</p>
            </div>

            <div className="why-card">
              <span>04</span>
              <h3>Detail Driven</h3>
              <p>From consultation to finishing touches, every small detail matters.</p>
            </div>
          </div>
        </section>

        <section id="team" className="team section">
          <div className="section-heading centered">
            <p className="eyebrow">OUR TEAM</p>
            <h2>Artists behind <em>your look.</em></h2>
            <p>Add your verified stylist and artist profiles here.</p>
          </div>

          <div className="team-grid">
            <article className="team-card">
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=95"
                alt="Hair stylist"
              />
              <div>
                <span>HAIR ARTIST</span>
                <h3>Your Stylist</h3>
                <p>Haircuts • Colour • Styling</p>
              </div>
            </article>

            <article className="team-card">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=95"
                alt="Makeup artist"
              />
              <div>
                <span>MAKEUP ARTIST</span>
                <h3>Your Makeup Artist</h3>
                <p>Bridal • Engagement • Party</p>
              </div>
            </article>

            <article className="team-card">
              <img
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1200&q=95"
                alt="Beauty specialist"
              />
              <div>
                <span>BEAUTY SPECIALIST</span>
                <h3>Your Beauty Expert</h3>
                <p>Skin • Nails • Self-care</p>
              </div>
            </article>
          </div>
        </section>

        <section id="gallery" className="gallery-section section">
          <div className="section-heading centered">
            <p className="eyebrow">THE LUMÉRA EDIT</p>
            <h2>A glimpse of <em>beauty.</em></h2>
          </div>

          <div className="filter-tabs gallery-tabs">
            {["All", "Hair", "Makeup", "Nails", "Bridal", "Skin", "Spa", "Interior"].map(
              (item) => (
                <button
                  key={item}
                  className={galleryFilter === item ? "active" : ""}
                  onClick={() => setGalleryFilter(item)}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="gallery-grid">
            {filteredGallery.map((item, index) => (
              <div className="gallery-item" key={`${item.category}-${index}`}>
                <img src={item.image} alt={`${item.category} beauty`} />
                <div className="gallery-overlay">
                  <span>{item.category}</span>
                  <strong>View</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="offers" className="offers section">
          <div className="section-heading centered">
            <p className="eyebrow">LUMÉRA EDITS</p>
            <h2>Beauty moments worth <em>celebrating.</em></h2>
          </div>

          <div className="offer-grid">
            <article className="offer-card large">
              <div>
                <span>BRIDAL BEAUTY</span>
                <h3>Your wedding day, beautifully yours.</h3>
                <p>
                  Ask our team about customized bridal and engagement packages.
                </p>
                <button onClick={() => scrollTo("booking")}>Enquire Now ↗</button>
              </div>
            </article>

            <article className="offer-card blush">
              <span>FIRST VISIT</span>
              <strong>15%</strong>
              <h3>On selected services</h3>
              <p>Ask the studio about current first-visit offers.</p>
              <button onClick={() => scrollTo("booking")}>Check Offer</button>
            </article>

            <article className="offer-card burgundy">
              <span>WEEKDAY BEAUTY</span>
              <h3>Make a little time for yourself.</h3>
              <p>Ask about current weekday packages and availability.</p>
              <button onClick={() => scrollTo("booking")}>Explore</button>
            </article>
          </div>
        </section>

        <section id="reviews" className="reviews section">
          <div className="section-heading centered">
            <p className="eyebrow">CLIENT LOVE</p>
            <h2>Real experiences, <em>real stories.</em></h2>
            <p>Add verified customer reviews from your official review source.</p>
          </div>

          <div className="review-note">
            <span className="quote">“</span>
            <p>
              Your verified customer feedback can be displayed here with
              the reviewer's first name, rating and review source.
            </p>
            <div className="stars">★★★★★</div>
            <strong>VERIFIED REVIEWS</strong>
          </div>
        </section>

        <section id="booking" className="booking-section">
          <div className="booking-image">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=95"
              alt="Luxury salon styling"
            />
            <div className="booking-caption">
              <p>READY FOR YOUR</p>
              <h2>Next beauty moment?</h2>
            </div>
          </div>

          <div className="booking-form-area">
            <p className="eyebrow">APPOINTMENTS</p>
            <h2>Book your <em>experience.</em></h2>
            <p className="booking-intro">
              Tell us what you are looking for and we will help you plan your visit.
            </p>

            {submitted ? (
              <div className="success-box">
                <span>✓</span>
                <h3>Appointment request received</h3>
                <p>
                  Your request has been prepared. Add the official WhatsApp
                  number in App.jsx to enable direct WhatsApp confirmation.
                </p>
                <button
                  className="primary-button dark"
                  onClick={() => setSubmitted(false)}
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={submitBooking}>
                <div className="form-row">
                  <label>
                    Full Name *
                    <input name="name" required placeholder="Your name" />
                  </label>

                  <label>
                    Phone *
                    <input name="phone" required placeholder="+91" />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Email
                    <input name="email" type="email" placeholder="you@example.com" />
                  </label>

                  <label>
                    Category *
                    <select name="category" required>
                      <option value="">Select</option>
                      <option>Hair</option>
                      <option>Skin</option>
                      <option>Makeup</option>
                      <option>Nails</option>
                      <option>Spa</option>
                    </select>
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Service *
                    <select name="service" required>
                      <option value="">Select service</option>
                      {services.map((service) => (
                        <option key={service.title}>{service.title}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Preferred Stylist
                    <select name="stylist">
                      <option value="">Any available</option>
                      <option>Your Stylist</option>
                      <option>Your Makeup Artist</option>
                      <option>Your Beauty Expert</option>
                    </select>
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Preferred Date *
                    <input name="date" type="date" required />
                  </label>

                  <label>
                    Preferred Time *
                    <input name="time" type="time" required />
                  </label>
                </div>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us anything we should know..."
                  />
                </label>

                <button className="primary-button dark full" type="submit">
                  Confirm Appointment <span>↗</span>
                </button>
              </form>
            )}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="section-heading centered">
            <p className="eyebrow">COME SAY HELLO</p>
            <h2>Let's make your next visit <em>beautiful.</em></h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon"><PhoneIcon /></div>
              <span>CALL US</span>
              <h3>{PHONE_DISPLAY}</h3>
              <p>For appointments and enquiries.</p>
              <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}>
                Call the Studio ↗
              </a>
            </div>

            <div className="contact-card featured-contact">
              <div className="contact-icon"><WhatsAppIcon /></div>
              <span>WHATSAPP</span>
              <h3>Chat with LUMÉRA</h3>
              <p>Ask about services, timings and appointments.</p>
              <button onClick={() => openWhatsApp()}>
                WhatsApp Us ↗
              </button>
            </div>

            <div className="contact-card">
              <div className="contact-icon"><InstagramIcon /></div>
              <span>INSTAGRAM</span>
              <h3>@lumera</h3>
              <p>Follow our latest beauty edits and work.</p>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Visit Instagram ↗
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon"><LocationIcon /></div>
              <span>LOCATION</span>
              <h3>Davangere / Karnataka</h3>
              <p>Add the verified LUMÉRA studio address here.</p>
              <button onClick={() => alert("Add the verified Google Maps link here.")}>
                Open Location ↗
              </button>
            </div>
          </div>

          <div className="contact-bottom">
            <div>
              <MailIcon />
              <span>{EMAIL}</span>
            </div>

            <div>
              <strong>HOURS</strong>
              <span>Mon – Sun · Add verified timings</span>
            </div>
          </div>
        </section>

        <section id="faq" className="faq section">
          <div className="faq-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Questions, <em>answered.</em></h2>
            <p>Everything you need to know before your appointment.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${activeFaq === index ? "open" : ""}`}
                key={faq.q}
              >
                <button onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                  <span>{faq.q}</span>
                  <strong>{activeFaq === index ? "−" : "+"}</strong>
                </button>

                {activeFaq === index && (
                  <p>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="live-location" className="live-location-section section">
          <div className="section-heading centered">
            <p className="eyebrow">VISIT LUMÉRA</p>
            <h2>Find your way to <em>beauty.</em></h2>
            <p>Explore the map below and use your live location to update the route.</p>
          </div>

          <div className="live-location-card">
            <div className="live-location-map">
              <iframe
                title="LUMÉRA location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(mapLocation)}&output=embed`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="live-location-info">
              <div className="location-pin-large">
                <LocationIcon />
              </div>
              <p className="eyebrow">LOCATION</p>
              <h3>LUMÉRA BEAUTY STUDIO</h3>
              <p>Davangere, Karnataka</p>
              <span className="location-status">{locationStatus}</span>

              <div className="location-actions">
                <button className="primary-button dark" type="button" onClick={updateLiveLocation}>
                  Update Live Location <span>↗</span>
                </button>
                <a
                  className="location-link"
                  href="https://www.google.com/maps/search/?api=1&query=Davangere%2C%20Karnataka"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <div className="floating-actions" aria-label="Contact options">
        <a
          className="float contact-call"
          href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
          aria-label="Call LUMÉRA"
        >
          <PhoneIcon />
        </a>

        <button
          className="float contact-whatsapp"
          type="button"
          onClick={() => openWhatsApp()}
          aria-label="WhatsApp LUMÉRA"
        >
          <WhatsAppIcon />
        </button>

        <a
          className="float contact-instagram"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram LUMÉRA"
        >
          <InstagramIcon />
        </a>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <button className="footer-logo" onClick={() => scrollTo("home")}>
              <span className="logo-mark">L</span>
              <span>
                <strong>LUMÉRA</strong>
                <small>BEAUTY STUDIO</small>
              </span>
            </button>

            <p>
              Beauty, thoughtfully curated. Discover a refined salon experience
              created around your style, confidence and self-care.
            </p>

            <div className="socials">
              <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} aria-label="Call">
                <PhoneIcon />
              </a>
              <button onClick={() => openWhatsApp()} aria-label="WhatsApp">
                <WhatsAppIcon />
              </button>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <button onClick={() => scrollTo("services")}>Services</button>
              <button onClick={() => scrollTo("pricing")}>Pricing</button>
              <button onClick={() => scrollTo("gallery")}>Gallery</button>
              <button onClick={() => scrollTo("offers")}>Offers</button>
            </div>

            <div>
              <h4>Visit</h4>
              <button onClick={() => scrollTo("booking")}>Book Appointment</button>
              <button onClick={() => scrollTo("contact")}>Contact</button>
              <button onClick={() => scrollTo("faq")}>FAQs</button>
              <button onClick={() => scrollTo("reviews")}>Reviews</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 LUMÉRA BEAUTY STUDIO. All rights reserved.</span>
          <span>Beauty • Style • Confidence</span>
        </div>
      </footer>

    </div>
  );
}

export default App;