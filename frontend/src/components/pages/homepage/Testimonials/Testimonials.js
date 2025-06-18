import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Testimonials.css';

// interface Testimonial {
//   initials: string;
//   name: string;
//   title: string;
//   text: string;
// }

const testimonialsData = [
  {
    initials: 'SM',
    name: 'Samantha Miller',
    title: 'Amazing Service',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    initials: 'JD',
    name: 'John Davis',
    title: 'Great Results',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    initials: 'CB',
    name: 'Chris Brown',
    title: 'Highly Recommended',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
    {
    initials: 'EB',
    name: 'Ella Blue',
    title: 'Exceeded Expectations',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    initials: 'MR',
     name: 'Mike Ross',
    title: 'Transformed our Business',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    initials: 'AS',
    name: 'Ariana Smith',
    title: 'A pleasure to work with.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const TestimonialCard = ({ testimonial }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeInOut" },
        },
    };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      className="testimonial-card"
    >
      <div className="initials-circle">{testimonial.initials}</div>
      <h3>{testimonial.title}</h3>
      <p>{testimonial.text}</p>
    </motion.div>
  );
};

const Testimonials = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);



  return (
    <section className="testimonials-section" ref={containerRef}>
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container" style={{ width: containerWidth }}>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
