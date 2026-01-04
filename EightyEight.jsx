'use client';

import React, { useState, useEffect } from 'react';
import {
    Star,
    MapPin,
    Wifi,
    Car,
    Wind,
    Accessibility,
    CheckCircle,
    Phone,
    Menu,
    X,
    Tv,
    ShowerHead,
    Clock,
    ArrowRight,
    BedDouble,
    Instagram,
    Facebook,
    ChevronLeft,
    ChevronRight,
    ExternalLink
} from 'lucide-react';

const EightyEightHotel = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeReview, setActiveReview] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const bookingLinks = [
        {
            name: "Agoda",
            price: "₱1,224",
            url: "https://www.google.com/aclk?sa=l&ai=DChsSEwjTu_6Ay_KRAxVm10wCHSxFLtAYACICCAEQBRoCdG0&co=1&ase=2&gclid=Cj0KCQiAvOjKBhC9ARIsAFvz5lhaUCMSJQGUVV6FPkoM2DXD_SgCoy3WbK3P53pqoglXQcrfCTwkaXcaAtF_EALw_wcB&cid=CAASuwHkaPHMXuwkfBEkBSmKr4iHUB2Pq1bI61wjSq4oMw7WuQ2rrgghSADSamL_1vfXJfVJ62yHHUGQuTxi6nOQ8zsQOp6uKIBVRcM2DHvArHl_6SMzm5DQWHMtNYga6E8EjDXJhFZmNYE52-T0ZvNdZ8HHm2guxt4Q-ux4loWm57HQOHhnXyz837oL6HjVwVKcaXba8vSQ0NcubBZpImeBYepWsdMS5_Brm37lobRP7UJ2uYOd89hFREXqU8V4&category=acrcp_v1_48&sig=AOD64_0yBmH0mLnIjmU8LEttRMfI3hWmMA&nis=4&adurl",
            color: "bg-blue-600"
        },
        {
            name: "Trip.com",
            price: "₱1,225",
            url: "https://www.google.com/travel/clk?pc=AA80Osxz_Bobs_0Mn5nl8flDdWZdFSscEPIT_46EeM7Qy8VlFEwIOEhFV-c2RYI50-WsSe51glr9KlicOFMXW0vfMujg_M_jJL057po4M3lp0uUIodjtzqVGi3eTAWODPazIi-OAyZoM_f5CdENeFCL0MOBI8BFqA_g6bGQnDw0OtXv5li5QBmc&pcurl=https://ph.trip.com/hotels/redirect?hotelid%3D9631965%26city%3D61423%26shoppingid%3DMiwI8dLTJQL8%26adult%3D2%26children%3D0%26ages%3D%26checkin%3D2026-02-03%26checkout%3D2026-02-04%26curr%3DPHP%26Allianceid%3D15214%26Sid%3D1349480%26prid%3DLANG_PH%26trip_sub1%3D03_02_2026_1_mapresults_9631965_PH_desktop_default___0_0-LANG_PH-landing%26hpaopts%3Dstand%5BH4sIAAAAAAAA_-Py5GKSYBJi4mCUsudY07DoN7PFRKEAjhmMdz-eZlnByLiDkeki4zr3h1UinhMcHjIW2nJdX6w02eEF49SnJ6YxLmBhXMhaLQKU14p2kOLxzSz3tEjxCfEK9LFQYNR4Pv3VKTYPxiA2S2cXIwOnKBku5gCPAME0MNhnLwXiKcJ4SaypeboBHhnzRLoYmTwYVzEyfGIUQDYw3tDEAAA0DNywrgAAAA%5Dfgt%5B1%5D%26br%3D1224.66%26tf%3D182.39%26display%3Dincavg%26locale%3Den_ph%26crn%3D1%26roomid%3D1063813164&s=AD1XQnmC10bBy5B5Has0f81tZJQ6",
            color: "bg-blue-500"
        },
        {
            name: "Booking.com",
            price: "₱1,368",
            url: "https://www.google.com/aclk?sa=l&ai=DChsSEwjTu_6Ay_KRAxVm10wCHSxFLtAYACICCAEQBxoCdG0&co=1&ase=2&gclid=Cj0KCQiAvOjKBhC9ARIsAFvz5lgqE2Cz6uPg9TAToQRs8s0HDRLc_UbsvzxkTUJQan3ER9ea7HE4twEaAnReEALw_wcB&cid=CAASuwHkaPHMXuwkfBEkBSmKr4iHUB2Pq1bI61wjSq4oMw7WuQ2rrgghSADSamL_1vfXJfVJ62yHHUGQuTxi6nOQ8zsQOp6uKIBVRcM2DHvArHl_6SMzm5DQWHMtNYga6E8EjDXJhFZmNYE52-T0ZvNdZ8HHm2guxt4Q-ux4loWm57HQOHhnXyz837oL6HjVwVKcaXba8vSQ0NcubBZpImeBYepWsdMS5_Brm37lobRP7UJ2uYOd89hFREXqU8V4&category=acrcp_v1_48&sig=AOD64_2bbsw9LGZ8zbGYtmmjKuEupWEFQg&nis=4&adurl",
            color: "bg-blue-800"
        }
    ];

    const reviews = [
        {
            quote: "Location is very convenient as it is only in front of KCC mall. Room is clean, I’m so happy about the hair dryer.",
            author: "Rose Anne Tuban",
            source: "Google Reviews"
        },
        {
            quote: "Quiet place and accessible to all needs. Recommended for your stay and affordable. Same as advertised.",
            author: "Trip.com Member",
            source: "Trip.com"
        },
        {
            quote: "Reception and staff are nice. Room was comfortable enough for our three day stay. Location is good.",
            author: "Sean",
            source: "Google Reviews"
        }
    ];

    const galleryImages = [
        { src: "/images/outside.png", category: "Outside", alt: "Outside the Hotel" },
        { src: "/images/lobby.png", category: "Lobby", alt: "Guest Lobby" },
        { src: "/images/hallway.png", category: "Hallway", alt: "Hotel Hallway" },
        { src: "/images/rooms.png", category: "Rooms", alt: "Room Details" },
        { src: "/images/inside.png", category: "Inside", alt: "Inside the Hotel" },
        { src: "/images/meeting.png", category: "Meeting Facility", alt: "Meeting Facility" }
    ];

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Rotate reviews automatically
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveReview((prev) => (prev + 1) % reviews.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextReview = () => {
        setActiveReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const openBookingModal = (e) => {
        e.preventDefault();
        setIsBookingModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-amber-100 selection:text-amber-900">

            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className={`font-bold text-2xl tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                        <img
                            src="/images/logo.png"
                            alt="Eighty Eight Logo"
                            style={{ width: 50, height: 50, borderRadius: 50 }}
                            className="object-cover"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['About', 'Amenities', 'Rooms', 'Location'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`text-sm font-medium tracking-wide uppercase hover:text-amber-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-200'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={openBookingModal}
                            className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold tracking-wide uppercase transition-colors"
                        >
                            Book Now
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-amber-500"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center space-y-6">
                        {['About', 'Amenities', 'Rooms', 'Location'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-gray-800 font-medium text-lg"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={(e) => {
                                setIsMobileMenuOpen(false);
                                openBookingModal(e);
                            }}
                            className="px-8 py-3 bg-amber-600 text-white font-bold uppercase"
                        >
                            Book Now
                        </button>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="images/bedrooms.png"
                        alt="Modern Hotel Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16">
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20">
                            <Star size={16} className="text-amber-400 fill-amber-400" />
                            <Star size={16} className="text-amber-400 fill-amber-400" />
                            <Star size={16} className="text-amber-400 fill-amber-400" />
                            <Star size={16} className="text-amber-400 fill-amber-400" />
                            <Star size={16} className="text-amber-400 fill-amber-400 half" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
                            <span className="ml-2 text-xs font-semibold tracking-wider uppercase text-gray-200">Top Rated in Koronadal</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                        Urban Comfort. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                            Refined Living.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
                        Experience the perfect balance of business efficiency and leisure at Eighty Eight Hotel.
                        Sleek, professional, and perfectly located on Gensan Drive.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => scrollToSection('rooms')}
                            className="w-full md:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-wide uppercase transition-all transform hover:scale-105 shadow-lg shadow-amber-900/20"
                        >
                            Check Availability
                        </button>
                        <a
                            href="tel:09696175434"
                            className="w-full md:w-auto px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-gray-900 font-bold tracking-wide uppercase transition-all"
                        >
                            Call: 0969 617 5434
                        </a>
                    </div>
                </div>
            </header>

            {/* Social Proof Strip */}
            <div className="bg-gray-50 border-b border-gray-200 transition-all duration-300">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center md:text-left">
                        <div className="shrink-0 flex flex-col items-center md:items-start">
                            <p className="text-3xl font-bold text-gray-900">4.3<span className="text-lg text-gray-500 font-normal">/5</span></p>
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <div className="flex">
                                    {[1, 2, 3, 4].map(i => <Star key={i} size={14} className="text-amber-500 fill-amber-500" />)}
                                    <Star size={14} className="text-amber-500 fill-amber-500 opacity-50" />
                                </div>
                                <p className="text-sm text-gray-600">Based on 444+ Google Reviews</p>
                            </div>
                        </div>

                        <div className="h-12 w-px bg-gray-300 hidden lg:block"></div>

                        <div className="flex-1 flex items-center justify-center lg:justify-start w-full gap-2 md:gap-4">
                            <button
                                onClick={prevReview}
                                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-400 hover:text-gray-600 flex-shrink-0"
                                aria-label="Previous Review"
                            >
                                <ChevronLeft size={24} />
                            </button>

                            <div className="flex-1 flex flex-col items-center lg:items-start min-h-[6rem] justify-center px-2">
                                <p className="text-gray-700 italic text-lg leading-relaxed transition-all duration-500 fade-in">
                                    "{reviews[activeReview].quote}"
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-amber-600 font-bold text-sm uppercase tracking-wide">
                                        {reviews[activeReview].author}
                                    </span>
                                    <span className="text-gray-400 text-xs">•</span>
                                    <span className="text-gray-500 text-xs font-medium">
                                        {reviews[activeReview].source}
                                    </span>
                                </div>
                            </div>

                            <button
                                onClick={nextReview}
                                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-400 hover:text-gray-600 flex-shrink-0"
                                aria-label="Next Review"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        <div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 shrink-0">
                            {/* Logos would go here, using text placeholders for now */}
                            <span className="font-bold text-gray-800">Agoda</span>
                            <span className="font-bold text-gray-800">Trip.com</span>
                            <span className="font-bold text-gray-800">Booking.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="py-20 md:py-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2 relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-tl-3xl -z-10"></div>
                            <img
                                src="images/eighty.png"
                                alt="Hotel Lobby"
                                className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-lg max-w-xs hidden md:block">
                                <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Location</p>
                                <p className="text-gray-600">Gensan Drive, Koronadal City<br />9506 South Cotabato</p>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <h4 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">About Us</h4>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">A Sanctuary in the City.</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Whether you're in Koronadal for a business conference or a family getaway, Eighty Eight Hotel sets the standard for modern hospitality. We offer a polished, full-service experience that outperforms the typical 3-star stay.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Located on the prime Gensan Drive strip",
                                    "Ideal for business travelers & couples",
                                    "Secure, private, and professionally managed"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center space-x-3">
                                        <CheckCircle size={20} className="text-amber-600" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => scrollToSection('rooms')} className="group flex items-center text-gray-900 font-bold uppercase tracking-wide border-b-2 border-amber-600 pb-1 hover:text-amber-700 transition-colors">
                                View Accommodations <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities Grid */}
            <section id="amenities" className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Amenities</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Everything you need for a seamless stay, included in our exceptional value.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Wifi, label: "High-Speed Wi-Fi" },
                            { icon: Car, label: "Free Secure Parking" },
                            { icon: Wind, label: "Air Conditioning" },
                            { icon: Accessibility, label: "Accessible Facilities" }
                        ].map((amenity, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group">
                                <amenity.icon size={32} className="text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium text-gray-300 text-center">{amenity.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rooms & Value */}
            <section id="rooms" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h4 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">Our Rooms</h4>
                            <h2 className="text-4xl font-bold text-gray-900">Affordable Luxury</h2>
                        </div>
                        <p className="text-gray-500 mt-4 md:mt-0">Best rates guaranteed when booking direct.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Standard Room Card */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="images/rooms.png"
                                    alt="Double Room"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Free Cancellation
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Double Room</h3>
                                        <p className="text-gray-500 text-sm mt-1">1 large double bed.</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-amber-600">₱1,224</p>
                                        <p className="text-xs text-gray-400">/ night</p>
                                    </div>
                                </div>
                                <hr className="border-gray-100 my-4" />
                                <div className="flex gap-4 mb-6">
                                    <div className="flex items-center text-xs text-gray-500"><Wifi size={14} className="mr-1" /> Free Wifi</div>
                                    <div className="flex items-center text-xs text-gray-500"><Wind size={14} className="mr-1" /> AC</div>
                                    <div className="flex items-center text-xs text-gray-500"><Tv size={14} className="mr-1" /> Flat-screen TV</div>
                                    <div className="flex items-center text-xs text-gray-500"><ShowerHead size={14} className="mr-1" /> Private bathroom</div>
                                    <div className="flex items-center text-xs text-gray-500"><BedDouble size={14} className="mr-1" /> Double Bed</div>
                                </div>
                                <button
                                    onClick={openBookingModal}
                                    className="block w-full text-center bg-gray-900 text-white py-3 font-bold uppercase text-sm tracking-wide hover:bg-gray-800 transition-colors"
                                >
                                    Book This Room
                                </button>
                            </div>
                        </div>

                        {/* Deluxe Room Card */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="images/bedroom.png"
                                    alt="Twin Room"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Free Cancellation
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Twin Room</h3>
                                        <p className="text-gray-500 text-sm mt-1">2 single beds.</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-amber-600">₱1,224</p>
                                        <p className="text-xs text-gray-400">/ night</p>
                                    </div>
                                </div>
                                <hr className="border-gray-100 my-4" />
                                <div className="flex gap-4 mb-6">
                                    <div className="flex items-center text-xs text-gray-500"><Wifi size={14} className="mr-1" /> Free Wifi</div>
                                    <div className="flex items-center text-xs text-gray-500"><Wind size={14} className="mr-1" /> AC</div>
                                    <div className="flex items-center text-xs text-gray-500"><Tv size={14} className="mr-1" /> Flat-screen TV</div>
                                    <div className="flex items-center text-xs text-gray-500"><ShowerHead size={14} className="mr-1" /> Private bathroom</div>
                                    <div className="flex items-center text-xs text-gray-500"><BedDouble size={14} className="mr-1" /> Double Bed</div>
                                </div>
                                <button
                                    onClick={openBookingModal}
                                    className="block w-full text-center bg-amber-600 text-white py-3 font-bold uppercase text-sm tracking-wide hover:bg-amber-700 transition-colors"
                                >
                                    Book This Room
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2">Visual Tour</h4>
                            <h2 className="text-3xl md:text-4xl font-bold">Experience Eighty Eight</h2>
                        </div>
                        <p className="text-gray-400 mt-4 md:mt-0">A glimpse into our modern spaces.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Dynamic Grid Layout */}
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={`relative group overflow-hidden rounded-lg cursor-pointer aspect-square ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                                <div className="absolute bottom-4 left-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-xs font-bold uppercase tracking-wider bg-amber-600 text-white px-2 py-1 rounded">{img.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={40} />
                    </button>
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.alt}
                        className="max-w-full max-h-[90vh] rounded shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <div className="absolute bottom-8 left-0 right-0 text-center text-white/80">
                        <p className="text-lg font-medium">{selectedImage.alt}</p>
                    </div>
                </div>
            )}

            {/* Booking Modal */}
            {isBookingModalOpen && (
                <div
                    className="fixed inset-0 z-[70] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setIsBookingModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-2xl font-bold text-gray-900">Select Booking Site</h3>
                            <button
                                onClick={() => setIsBookingModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-gray-600 mb-4">Choose your preferred booking platform to see availability and complete your reservation.</p>

                            {bookingLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-amber-500 hover:shadow-md transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`font-bold text-lg ${link.name === 'Agoda' ? 'text-gray-800' : link.name === 'Trip.com' ? 'text-blue-600' : 'text-blue-900'}`}>
                                            {link.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded text-sm">
                                            {link.price}
                                        </span>
                                        <ExternalLink size={18} className="text-gray-400 group-hover:text-amber-600" />
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                            <p className="text-xs text-gray-500">Prices are estimates and may vary by date.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Location & Contact */}
            <section id="location" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Info Side */}
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <MapPin className="text-amber-600 mt-1 mr-4" size={24} />
                                    <div>
                                        <h5 className="font-bold text-gray-900">Address</h5>
                                        <p className="text-gray-600">Gensan Dr, Koronadal<br />9506 South Cotabato, Philippines</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="text-amber-600 mt-1 mr-4" size={24} />
                                    <div>
                                        <h5 className="font-bold text-gray-900">Phone</h5>
                                        <p className="text-gray-600 mb-1">For reservations & inquiries:</p>
                                        <a href="tel:09696175434" className="text-xl font-bold text-gray-900 hover:text-amber-600 transition-colors">
                                            0969 617 5434
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <h5 className="font-bold text-gray-900 mb-4 flex items-center">
                                        <Clock size={18} className="mr-2 text-amber-600" /> Hotel Policies
                                    </h5>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-600">Check-in</span>
                                        <span className="font-bold text-gray-900">2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Check-out</span>
                                        <span className="font-bold text-gray-900">11:00 AM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Side */}
                        <div className="lg:w-2/3 h-96 lg:h-auto min-h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-inner relative group">
                            <iframe
                                src="https://maps.google.com/maps?q=Eighty%20Eight%20Hotel%20Koronadal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Eighty Eight Hotel Location"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer */}
            <footer className="bg-gray-900 text-white pt-20 pb-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left">
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for your stay?</h2>
                            <p className="text-gray-400">Experience the best value in Koronadal City.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:09696175434"
                                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold tracking-wide uppercase transition-colors rounded"
                            >
                                Call to Book
                            </a>
                            <a
                                href="#"
                                className="px-8 py-4 bg-transparent border border-gray-600 hover:border-white text-white font-bold tracking-wide uppercase transition-colors rounded flex items-center justify-center gap-2"
                            >
                                <Facebook size={18} /> Message Us
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Eighty Eight Hotel. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default EightyEightHotel;