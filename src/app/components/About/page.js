"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "../Header";
import AboutUs from "../AboutUs";
import Footer from "../Footer";
import WhatsAppButton from "../WatsappButton";

export default function AboutMain() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{ backgroundColor: "#04092F" }}
    >
      <Head>
        <title>
          PT. Georgy Solusi Digital | Jasa Pembuatan Website & Solusi Digital
          Terpercaya Semarang
        </title>
        <meta
          name="description"
          content="PT. Georgy Solusi Digital adalah perusahaan IT konsultan terpercaya di Semarang yang menyediakan jasa pembuatan website profesional, pengembangan aplikasi, dan solusi digital komprehensif untuk mengembangkan bisnis Anda. ✓Berpengalaman ✓Tim Profesional ✓Harga Terjangkau"
        />
        <meta
          name="keywords"
          content="jasa pembuatan website semarang, website profesional, IT konsultan semarang, pengembangan aplikasi, solusi digital, PT Georgy Solusi Digital"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Indonesia" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="PT. Georgy Solusi Digital" />
        <meta
          property="og:title"
          content="PT. Georgy Solusi Digital | Jasa Pembuatan Website & Solusi Digital Terpercaya Semarang"
        />
        <meta
          property="og:description"
          content="PT. Georgy Solusi Digital adalah perusahaan IT konsultan terpercaya di Semarang yang menyediakan jasa pembuatan website profesional, pengembangan aplikasi, dan solusi digital komprehensif untuk mengembangkan bisnis Anda."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <link rel="canonical" href="https://www.georgysolusidigital.com" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header isLoaded={isLoaded} />
      <AboutUs isLoaded={isLoaded} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
