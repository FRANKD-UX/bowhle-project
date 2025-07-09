"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useInView } from "framer-motion"
import "./Testimonials.css"

const testimonialsData = [
  {
    initials: "SM",
    name: "Samantha Miller",
    title: "Amazing Service",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    initials: "JD",
    name: "John Davis",
    title: "Great Results",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    initials: "CB",
    name: "Chris Brown",
    title: "Highly Recommended",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    initials: "EB",
    name: "Ella Blue",
    title: "Exceeded Expectations",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    initials: "MR",
    name: "Mike Ross",
    title: "Transformed our Business",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    initials: "AS",
    name: "Ariana Smith",
    title: "A pleasure to work with",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
]

const TestimonialCard = ({ testimonial, isActive }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      className={`testimonial-card ${isActive ? "active" : ""}`}
    >
      <div className="initials-circle">{testimonial.initials}</div>
      <h3>{testimonial.title}</h3>
      <p>{testimonial.text}</p>
      <div className="testimonial-name">- {testimonial.name}</div>
    </motion.div>
  )
}

const Testimonials = () => {
  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollIntervalRef = useRef(null)
  const resumeTimeoutRef = useRef(null)

  // Desktop drag functionality
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [hasMoved, setHasMoved] = useState(false)

  // Calculate scroll position for a given index
  const getScrollPosition = useCallback((index) => {
    if (!containerRef.current) return 0

    const container = containerRef.current
    const firstCard = container.children[0]
    if (!firstCard) return 0

    const cardWidth = firstCard.offsetWidth
    const containerStyle = window.getComputedStyle(container)
    const gap = Number.parseInt(containerStyle.gap) || 20

    return index * (cardWidth + gap)
  }, [])

  // Scroll to specific index
  const scrollToIndex = useCallback(
    (index, smooth = true) => {
      if (!containerRef.current) return

      const scrollPosition = getScrollPosition(index)
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: smooth ? "smooth" : "auto",
      })
    },
    [getScrollPosition],
  )

  // Auto scroll to next slide - cycles through ALL cards
  const autoScrollToNext = useCallback(() => {
    if (!isAutoScrolling || isPaused) return

    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex >= testimonialsData.length - 1 ? 0 : prevIndex + 1
      return nextIndex
    })
  }, [isAutoScrolling, isPaused, testimonialsData.length]);

  // Start auto scroll
  const startAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
      autoScrollIntervalRef.current = null
    }

    if (isAutoScrolling && !isPaused) {
      autoScrollIntervalRef.current = setInterval(() => {
        autoScrollToNext()
      }, 4000)
    }
  }, [autoScrollToNext, isAutoScrolling, isPaused])

  // Stop auto scroll
  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
      autoScrollIntervalRef.current = null
    }
  }, [])

  // Pause auto scroll temporarily
  const pauseAutoScroll = useCallback((duration = 5000) => {
    setIsPaused(true)

    // Clear any existing resume timeout
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }

    // Set new resume timeout
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, duration)
  }, [])

  // Navigation handlers with proper event handling
  const goToNext = useCallback(
    (e) => {
      if (e) {
        e.preventDefault()
        e.stopPropagation()
      }

      const nextIndex = currentIndex >= testimonialsData.length - 1 ? 0 : currentIndex + 1
      setCurrentIndex(nextIndex)
      pauseAutoScroll()
    },
    [currentIndex, pauseAutoScroll],
  )

  const goToPrev = useCallback(
    (e) => {
      if (e) {
        e.preventDefault()
        e.stopPropagation()
      }

      const prevIndex = currentIndex <= 0 ? testimonialsData.length - 1 : currentIndex - 1
      setCurrentIndex(prevIndex)
      pauseAutoScroll()
    },
    [currentIndex, pauseAutoScroll],
  )

  const goToSlide = useCallback(
    (index, e) => {
      if (e) {
        e.preventDefault()
        e.stopPropagation()
      }

      setCurrentIndex(index)
      pauseAutoScroll()
    },
    [pauseAutoScroll],
  )

  // Improved desktop drag handlers
  const handleMouseDown = useCallback(
    (e) => {
      if (!containerRef.current) return

      e.preventDefault()
      setIsDragging(true)
      setHasMoved(false)
      setStartX(e.pageX - containerRef.current.offsetLeft)
      setScrollLeft(containerRef.current.scrollLeft)

      // Add dragging class to prevent text selection
      containerRef.current.classList.add("dragging")

      pauseAutoScroll(3000)
    },
    [pauseAutoScroll],
  )

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging || !containerRef.current) return

      e.preventDefault()
      setHasMoved(true)

      const x = e.pageX - containerRef.current.offsetLeft
      const walk = (x - startX) * 2
      containerRef.current.scrollLeft = scrollLeft - walk
    },
    [isDragging, startX, scrollLeft],
  )

  const handleMouseUp = useCallback((e) => {
    if (containerRef.current) {
      containerRef.current.classList.remove("dragging")
    }

    setIsDragging(false)
    setHasMoved(false)
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.classList.remove("dragging")
    }

    setIsDragging(false)
    setHasMoved(false)
  }, [])

  // Prevent context menu on right click during drag
  const handleContextMenu = useCallback(
    (e) => {
      if (isDragging || hasMoved) {
        e.preventDefault()
      }
    },
    [isDragging, hasMoved],
  )

  // Touch handlers for mobile
  const handleTouchStart = useCallback(() => {
    pauseAutoScroll(3000)
  }, [pauseAutoScroll])

  // Mouse enter/leave for hover pause
  const handleSectionMouseEnter = useCallback(() => {
    setIsPaused(true)
  }, [])

  const handleSectionMouseLeave = useCallback(() => {
    setIsPaused(false)
  }, [])

  // Scroll event handler to update current index
  const handleScroll = useCallback(() => {
    if (!containerRef.current || isDragging) return

    const container = containerRef.current
    const scrollLeft = container.scrollLeft
    const firstCard = container.children[0]

    if (!firstCard) return

    const cardWidth = firstCard.offsetWidth
    const containerStyle = window.getComputedStyle(container)
    const gap = Number.parseInt(containerStyle.gap) || 20

    const newIndex = Math.round(scrollLeft / (cardWidth + gap))
    const clampedIndex = Math.max(0, Math.min(newIndex, testimonialsData.length - 1))

    if (clampedIndex !== currentIndex) {
      setCurrentIndex(clampedIndex)
    }
  }, [currentIndex, isDragging])

  // Effect to scroll when currentIndex changes
  useEffect(() => {
    scrollToIndex(currentIndex)
  }, [currentIndex, scrollToIndex])

  // Effect to manage auto-scroll
  useEffect(() => {
    if (isAutoScrolling && !isPaused) {
      startAutoScroll()
    } else {
      stopAutoScroll()
    }

    return () => {
      stopAutoScroll()
    }
  }, [isAutoScrolling, isPaused, startAutoScroll, stopAutoScroll])

  // Effect to set up event listeners
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scroll listener
    container.addEventListener("scroll", handleScroll, { passive: true })

    // Touch listeners
    container.addEventListener("touchstart", handleTouchStart, { passive: true })

    // Mouse drag listeners
    container.addEventListener("mousedown", handleMouseDown)
    container.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    container.addEventListener("mouseleave", handleMouseLeave)

    // Prevent drag on images and text
    container.addEventListener("dragstart", (e) => e.preventDefault())
    container.addEventListener("selectstart", (e) => {
      if (isDragging) e.preventDefault()
    })

    return () => {
      container.removeEventListener("scroll", handleScroll)
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("mousedown", handleMouseDown)
      container.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      container.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("dragstart", (e) => e.preventDefault())
      container.removeEventListener("selectstart", (e) => {
        if (isDragging) e.preventDefault()
      })
    }
  }, [
    handleScroll,
    handleTouchStart,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
    handleContextMenu,
    isDragging,
  ])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAutoScroll()
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
      }
    }
  }, [stopAutoScroll])

  return (
    <section
      className="testimonials-section"
      onMouseEnter={handleSectionMouseEnter}
      onMouseLeave={handleSectionMouseLeave}
    >
      <h2>What Our Clients Say</h2>

      <div className="testimonials-wrapper">
        <div className="testimonials-container" ref={containerRef} style={{ cursor: isDragging ? "grabbing" : "grab" }}>
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} isActive={index === currentIndex} />
          ))}
        </div>

        <div className="testimonials-navigation">
          <button
            className="nav-arrow"
            onClick={goToPrev}
            onMouseDown={(e) => e.stopPropagation()}
            aria-label="Previous testimonial"
            type="button"
          >
            ←
          </button>

          <div className="nav-dots">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentIndex ? "active" : ""}`}
                onClick={(e) => goToSlide(index, e)}
                onMouseDown={(e) => e.stopPropagation()}
                aria-label={`Go to testimonial ${index + 1}`}
                type="button"
              />
            ))}
          </div>

          <button
            className="nav-arrow"
            onClick={goToNext}
            onMouseDown={(e) => e.stopPropagation()}
            aria-label="Next testimonial"
            type="button"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
