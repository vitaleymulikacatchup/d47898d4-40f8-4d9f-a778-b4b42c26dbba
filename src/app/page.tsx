"use client";

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Zap, Settings, BarChart2 } from "lucide-react";

const assetMap = [
  {"id":"heroImage","url":"https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman with digital code projections on her face, representing technology and future concepts."},
  {"id":"featureImage","url":"https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A sleek office setup featuring an Apple iMac, iPad, and keyboard on a wooden desk."},
  {"id":"aboutImage","url":"https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation."},
  {"id":"customerImage","url":"https://images.pexels.com/photos/4173266/pexels-photo-4173266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Positive elegant female in trendy coat carrying paper bags while using smartphone on street near restaurant entrance"}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="YourSaaS"
          buttonText="Contact Us"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Revolutionize Your Workflow"
            description="Discover the power of AI with our cutting-edge SaaS platform."
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: "Get Started", href: "#features" },
              { text: "Learn More", href: "#about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Empowering Businesses with AI"
            buttons={[
              { text: "Our Vision", href: "#vision" }
            ]}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Features Overview"
            features={[
              { title: "Intuitive Design", description: "User interfaces that are easy to navigate.", icon: Zap },
              { title: "Smart Automation", description: "Automate mundane tasks with ease.", icon: Settings },
              { title: "Robust Analytics", description: "Gain insights with powerful data analysis tools.", icon: BarChart2 }
            ]}
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardTwo
            title="Choose Your Plan"
            plans={[
              { id: "basic", badge: "Starter", price: "$19/mo", subtitle: "Ideal for small teams", buttons: [{ text: "Get Started" }], features: ["Basic Support", "Up to 10 Users"] },
              { id: "pro", badge: "Pro", price: "$49/mo", subtitle: "For growing teams", buttons: [{ text: "Try Free" }], features: ["Priority Support", "Up to 50 Users"] }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="We'd Love to Hear from You"
            description="Whether you have questions or would like to give feedback, we're here to listen."
            imageSrc={assetMap.find(a => a.id === "featureImage")?.url ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Product", items: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
              { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Contact", href: "#contact" }] }
            ]}
            copyrightText="© 2025 | YourSaaS"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
