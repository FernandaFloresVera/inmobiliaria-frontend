import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import "../styles/home.css"

export const HomePage = () => {
  const mockImagenes = [
    "https://picsum.photos/id/322/600",
    "https://picsum.photos/id/366/600",
    "https://picsum.photos/id/312/600",
    "https://picsum.photos/id/378/600",
    "https://picsum.photos/id/392/600",
    "https://picsum.photos/id/398/600",
  ]

  return <>
  <Navbar/>
   <h1>INMOBILIARIA</h1>
   <h2>Lo extraordinario esta ahora a tu alcance</h2>
   <Slider imagenes={mockImagenes}></Slider>
   <Footer/>
  </>
}

export default HomePage;
