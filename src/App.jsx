import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import "./App.css";

const slides = [
  {
    title: "Hair artistry",
    text: "Colour, cuts and styling created around you.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=2400&q=95",
  },
  {
    title: "Nail artistry",
    text: "Elegant details designed to complete your look.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=2400&q=95",
  },
  {
    title: "Eye makeup",
    text: "Beautifully defined eyes with refined makeup artistry.",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=2400&q=95",
  },
  {
    title: "Spa rituals",
    text: "Slow down, relax and reconnect with yourself.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2400&q=95",
  },
  {
    title: "Indian bridal beauty",
    text: "Timeless bridal elegance for your most beautiful day.",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=2400&q=95",
  },
];

const services = [
  {
    title: "Hair",
    description: "Cuts, colour, styling and nourishing treatments.",
    price: "From ₹699",
  },
  {
    title: "Nails",
    description: "Manicure, gel finishes and refined nail artistry.",
    price: "From ₹499",
  },
  {
    title: "Makeup",
    description: "Soft glam, occasion and bridal looks.",
    price: "From ₹1,499",
  },
  {
    title: "Skin",
    description: "Personalised facials for healthy, luminous skin.",
    price: "From ₹899",
  },
  {
    title: "Spa",
    description: "Relaxing rituals for complete rejuvenation.",
    price: "From ₹999",
  },
];

const prices = [
  ["Signature Hair Cut", "₹699"],
  ["Hair Colour", "₹1,499"],
  ["Luxury Facial", "₹899"],
  ["Classic Manicure", "₹499"],
  ["Gel Nail Finish", "₹899"],
  ["Soft Glam Makeup", "₹1,499"],
  ["Relaxation Spa", "₹999"],
  ["Bridal Makeup", "₹5,999"],
];

const team = [
  {
    name: "Ananya Rao",
    role: "Hair Artist",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Meera Shah",
    role: "Makeup Artist",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=90",
  },
  {
    name: "Ishita Menon",
    role: "Beauty Specialist",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=90",
  },
];

const gallery = [
  {
    type: "Hair",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    type: "Nails",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=90",
  },
  {
    type: "Makeup",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=90",
  },
  {
    type: "Bridal",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1200&q=90",
  },
  {
    type: "Spa",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=90",
  },
  {
    type: "Salon",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=90",
  },
];

const reviews = [
  {
    quote:
      "The entire experience felt calm and luxurious. My hair colour turned out exactly the way I imagined.",
    name: "Priya M.",
  },
  {
    quote:
      "Beautiful interiors, thoughtful service and incredibly neat makeup. Everything felt effortless.",
    name: "Aditi R.",
  },
  {
    quote:
      "I loved the attention to detail. The team made the whole appointment feel very personal.",
    name: "Sneha K.",
  },
];

const faqs = [
  {
    question: "Should I book before visiting?",
    answer:
      "Appointments are recommended so your preferred service and time can be reserved.",
  },
  {
    question: "Can I request a particular stylist?",
    answer:
      "Yes. You can mention your preferred stylist in the appointment form.",
  },
  {
    question: "Are bridal services available?",
    answer:
      "Yes. Bridal makeup and selected beauty services are available by appointment.",
  },
  {
    question: "Can an appointment be rescheduled?",
    answer:
      "Yes. Please contact the studio in advance to change your appointment.",
  },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="instagram-icon">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [faq, setFaq] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const filteredGallery =
    filter === "All"
      ? gallery
      : gallery.filter((item) => item.type === filter);

  return (
    <div className="app">
      {/* NAVIGATION */}
      <header className="header">
        <div className="nav">
          <button className="brand" onClick={() => goTo("home")}>
            <span className="brand-mark">L</span>

            <span className="brand-name">
              <strong>LUMERA</strong>
              <small>BEAUTY STUDIO</small>
            </span>
          </button>

          <nav className={menuOpen ? "navigation show" : "navigation"}>
            <button onClick={() => goTo("home")}>Home</button>
            <button onClick={() => goTo("services")}>Services</button>
            <button onClick={() => goTo("pricing")}>Pricing</button>
            <button onClick={() => goTo("about")}>About</button>
            <button onClick={() => goTo("gallery")}>Gallery</button>
            <button onClick={() => goTo("contact")}>Contact</button>

            <button
              className="nav-appointment"
              onClick={() => goTo("booking")}
            >
              Book Appointment
            </button>
          </nav>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`hero-slide ${
              activeSlide === index ? "visible" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
        ))}

        <div className="hero-shade" />

        <div className="hero-layout">
          <div className="hero-copy">
            <span className="overline">LUXURY BEAUTY STUDIO</span>

            <h1>
              Beauty
              <br />
              <i>without compromise.</i>
            </h1>

            <p>{slides[activeSlide].text}</p>
          </div>

          <div className="hero-side">
            <span>
              {String(activeSlide + 1).padStart(2, "0")}
            </span>

            <div className="hero-line" />

            <strong>{slides[activeSlide].title}</strong>
          </div>

          <div className="hero-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={activeSlide === index ? "selected" : ""}
                onClick={() => setActiveSlide(index)}
                aria-label={`View ${slide.title}`}
              />
            ))}
          </div>
        </div>

        <div className="hero-scroll">
          SCROLL
          <ChevronDown size={15} />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <div className="section-top">
          <div>
            <span className="section-label">WHAT WE DO</span>

            <h2>
              Beauty,
              <br />
              <i>with intention.</i>
            </h2>
          </div>

          <p className="section-intro">
            Every service begins with understanding what you want and ends
            with attention to the smallest detail.
          </p>
        </div>

        <div className="services-table">
          {services.map((service, index) => (
            <div className="service-item" key={service.title}>
              <span className="service-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <strong>{service.price}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="pricing-photo">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=90"
            alt="Elegant salon interior"
          />
        </div>

        <div className="pricing-menu">
          <span className="overline">LUMERA MENU</span>

          <h2>
            Beauty
            <br />
            <i>at a glance.</i>
          </h2>

          <div className="price-list">
            {prices.map(([name, price]) => (
              <div className="price-row" key={name}>
                <span>{name}</span>
                <div />
                <strong>{price}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=1400&q=90"
            alt="Luxury beauty studio"
          />
        </div>

        <div className="about-copy">
          <span className="section-label">THE LUMERA PHILOSOPHY</span>

          <h2>
            Quiet luxury,
            <br />
            <i>personal beauty.</i>
          </h2>

          <p>
            LUMERA is designed for people who value beautiful results and a
            beautiful experience. Our approach is thoughtful rather than
            rushed, personal rather than routine.
          </p>

          <p>
            From the consultation to the final touch, every detail is
            considered to make your time with us feel effortless.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="team section">
        <div className="team-heading">
          <span className="section-label">THE PEOPLE</span>

          <h2>
            Meet the
            <br />
            <i>artists.</i>
          </h2>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-photo">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="team-meta">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="gallery">
        <div className="gallery-header">
          <div>
            <span className="overline">THE LUMERA EDIT</span>

            <h2>
              Beauty in
              <br />
              <i>every detail.</i>
            </h2>
          </div>

          <div className="gallery-filters">
            {["All", "Hair", "Nails", "Makeup", "Bridal", "Spa"].map(
              (item) => (
                <button
                  key={item}
                  className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        <div className="gallery-grid">
          {filteredGallery.map((item, index) => (
            <div
              className={`gallery-card card-${index + 1}`}
              key={item.image}
            >
              <img src={item.image} alt={item.type} />

              <div className="gallery-tag">{item.type}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section className="offer">
        <div className="offer-number">01</div>

        <div className="offer-main">
          <span>WELCOME TO LUMERA</span>

          <h2>
            Your first visit,
            <br />
            <i>made special.</i>
          </h2>
        </div>

        <div className="offer-value">
          <strong>15%</strong>

          <p>
            Enjoy 15% off your first selected beauty service.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews section">
        <div className="reviews-heading">
          <span className="section-label">GUEST NOTES</span>

          <h2>
            Words from
            <br />
            <i>our guests.</i>
          </h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <article className="review" key={review.name}>
              <span className="review-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="stars">★★★★★</div>

              <p>“{review.quote}”</p>

              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section className="booking" id="booking">
        <div className="booking-intro">
          <span className="overline">PRIVATE APPOINTMENTS</span>

          <h2>
            Make time
            <br />
            <i>for you.</i>
          </h2>

          <p>
            Share your preferred service and time. Our team will confirm your
            appointment with you.
          </p>
        </div>

        <form
          className="booking-form"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Your appointment request has been submitted.");
          }}
        >
          <div className="form-group">
            <label>NAME</label>
            <input required type="text" placeholder="Your name" />
          </div>

          <div className="form-group">
            <label>PHONE</label>
            <input required type="tel" placeholder="Your phone number" />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>SERVICE</label>

              <select defaultValue="" required>
                <option value="" disabled>
                  Select service
                </option>

                <option>Hair</option>
                <option>Nails</option>
                <option>Makeup</option>
                <option>Skin</option>
                <option>Spa</option>
                <option>Bridal</option>
              </select>
            </div>

            <div className="form-group">
              <label>DATE</label>
              <input required type="date" />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>TIME</label>
              <input required type="time" />
            </div>

            <div className="form-group">
              <label>STYLIST</label>

              <select defaultValue="">
                <option value="">No preference</option>
                <option>Ananya Rao</option>
                <option>Meera Shah</option>
                <option>Ishita Menon</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>NOTE</label>

            <textarea
              rows="3"
              placeholder="Anything we should know?"
            />
          </div>

          <button className="submit">
            Send Appointment Request
            <ArrowRight size={17} />
          </button>
        </form>
      </section>

      {/* FAQ */}
      <section className="faq section">
        <div className="faq-heading">
          <span className="section-label">NEED TO KNOW</span>

          <h2>
            Before
            <br />
            <i>you visit.</i>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-row" key={item.question}>
              <button
                onClick={() =>
                  setFaq(faq === index ? null : index)
                }
              >
                <span>{item.question}</span>

                <strong>
                  {faq === index ? "−" : "+"}
                </strong>
              </button>

              <div
                className={
                  faq === index
                    ? "faq-content open"
                    : "faq-content"
                }
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section className="location" id="contact">
        <div className="location-map">
          <iframe
            title="LUMERA Bengaluru location"
            src="https://www.google.com/maps?q=Bengaluru,Karnataka&output=embed"
            loading="lazy"
          />
        </div>

        <div className="location-info">
          <span className="overline">FIND LUMERA</span>

          <h2>
            Come as you are.
            <br />
            <i>Leave glowing.</i>
          </h2>

          <div className="location-details">
            <div>
              <MapPin />

              <span>
                Bengaluru, Karnataka
                <small>India</small>
              </span>
            </div>

            <div>
              <Clock />

              <span>
                Monday — Sunday
                <small>10:00 AM — 8:00 PM</small>
              </span>
            </div>

            <div>
              <Phone />

              <span>
                +91 90000 00000
                <small>Studio enquiries</small>
              </span>
            </div>
          </div>

          <div className="social-links">
            <a href="tel:+919000000000">
              <Phone size={17} />
              Call
            </a>

            <a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              <InstagramIcon />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          <span>L</span>

          <div>
            <strong>LUMERA</strong>
            <small>BEAUTY STUDIO</small>
          </div>
        </div>

        <p>Beauty, beautifully refined.</p>

        <span>© 2026 LUMERA</span>
      </footer>
    </div>
  );
}

export default App;