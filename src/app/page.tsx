"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Target, Heart, Zap, Flower2, Music, CreditCard, Star, Calendar, Crown, TrendingUp, Users, Award, MessageCircle, HelpCircle, BookOpen, Instagram, Facebook, Youtube } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Classes", id: "classes" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394195861-fauce9x8.jpg"
          logoAlt="HulaFit Training Center"
          brandName="HulaFit"
          button={{
            text: "Book Class",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Transform Your Fitness with Hula Hoop Training"
          description="Join our dynamic hula hoop fitness classes and discover a fun, effective way to get in shape. Build core strength, improve flexibility, and boost your cardio in a supportive community environment."
          tag="Get Fit & Have Fun"
          tagIcon={Sparkles}
          buttons={[
            { text: "Start Your Journey", href: "contact" },
            { text: "View Classes", href: "classes" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394196565-qm73vhf4.jpg",
              imageAlt: "Woman enjoying hula hoop fitness training"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394198104-stc3do6q.jpg",
              imageAlt: "Cardio hula hoop workout"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394198664-71oww4q9.jpg",
              imageAlt: "Core strength training"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394200209-8avb4hjm.jpg",
              imageAlt: "Fun fitness class atmosphere"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why Choose Hula Hoop Fitness?"
          description={[
            "Hula hoop fitness is more than just childhood play - it's a revolutionary workout that combines cardio, strength training, and flexibility into one enjoyable experience.",
            "Our expert instructors guide you through progressive techniques that build core strength, improve coordination, and burn calories while having an absolute blast."
          ]}
          buttons={[
            { text: "Learn More", href: "classes" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="classes" data-section="classes">
        <FeatureCardFive
          title="Our Training Programs"
          description="Discover our variety of hula hoop fitness classes designed for all skill levels"
          tag="Classes"
          tagIcon={Target}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          showIconBoxBackground={true}
          features={[
            { title: "Cardio Blast", icon: Heart },
            { title: "Core Strength", icon: Zap },
            { title: "Flexibility Flow", icon: Flower2 },
            { title: "Dance Fusion", icon: Music }
          ]}
          buttons={[
            { text: "Book a Class", href: "contact" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Choose Your Training Plan"
          description="Flexible pricing options to fit your fitness journey and budget"
          tag="Pricing"
          tagIcon={CreditCard}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "drop-in",
              badge: "Flexible",
              badgeIcon: Calendar,
              price: "$25",
              subtitle: "Perfect for trying us out",
              features: [
                "Single class access",
                "Equipment provided",
                "Beginner-friendly instruction",
                "Community atmosphere"
              ]
            },
            {
              id: "monthly",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$89/month",
              subtitle: "Best value for regular training",
              features: [
                "Unlimited classes",
                "Priority booking",
                "Free equipment loan",
                "Nutritional guidance",
                "Progress tracking"
              ]
            },
            {
              id: "personal",
              badge: "Premium",
              badgeIcon: Crown,
              price: "$150/session",
              subtitle: "One-on-one expert coaching",
              features: [
                "Private instruction",
                "Customized workout plan",
                "Flexible scheduling",
                "Advanced techniques",
                "Goal-specific training"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="See how we're transforming lives through hula hoop fitness"
          tag="Results"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              value: "500+",
              title: "members",
              description: "Happy students training with us",
              icon: Users
            },
            {
              id: "2",
              value: "3",
              title: "years",
              description: "Empowering fitness journeys",
              icon: Award
            },
            {
              id: "3",
              value: "25",
              title: "classes",
              description: "Weekly sessions available",
              icon: Calendar
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Students Say"
          description="Real stories from our amazing hula hoop fitness community"
          tag="Success Stories"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              testimonial: "I never thought fitness could be this fun! The hula hoop classes have completely transformed my core strength and I actually look forward to working out now.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394201684-ot2qmnsv.jpg",
              imageAlt: "Sarah Johnson testimonial"
            },
            {
              id: "2",
              name: "Maria Rodriguez",
              role: "Teacher",
              testimonial: "The instructors are incredible and the community is so supportive. I've gained confidence, strength, and made amazing friends through these classes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394202405-o6y02cg0.jpg",
              imageAlt: "Maria Rodriguez testimonial"
            },
            {
              id: "3",
              name: "Emily Chen",
              role: "Entrepreneur",
              testimonial: "After trying countless fitness programs, hula hoop training finally stuck. It's challenging, fun, and the results speak for themselves.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394203110-gg8yxnk6.jpg",
              imageAlt: "Emily Chen testimonial"
            },
            {
              id: "4",
              name: "Jessica Williams",
              role: "Nurse",
              testimonial: "This is the perfect stress relief after long work days. The combination of movement, music, and community is exactly what I needed.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394203694-q19e9mjq.jpg",
              imageAlt: "Jessica Williams testimonial"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="As Featured In"
          description="Trusted by fitness enthusiasts and featured in leading wellness publications"
          tag="Media"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our hula hoop fitness classes"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do I need my own hula hoop?",
              content: "No! We provide all equipment including weighted fitness hula hoops designed specifically for exercise. You're welcome to bring your own if you have one you prefer."
            },
            {
              id: "2",
              title: "What should I wear to class?",
              content: "Wear comfortable athletic clothing that allows for movement. Fitted tops work best as loose clothing can get caught in the hoop. Athletic shoes with good grip are recommended."
            },
            {
              id: "3",
              title: "Are classes suitable for beginners?",
              content: "Absolutely! We offer beginner-friendly classes and our instructors provide modifications for all fitness levels. Everyone starts somewhere and we create a welcoming environment for all."
            },
            {
              id: "4",
              title: "How many calories can I burn?",
              content: "Hula hoop fitness can burn 400-600 calories per hour depending on intensity and your body weight. It's an excellent cardio and core workout combined."
            },
            {
              id: "5",
              title: "Can I try a class before committing?",
              content: "Yes! We offer drop-in rates so you can try a class before purchasing a membership. We're confident you'll love the experience."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Fitness Tips & Updates"
          description="Stay informed with our latest hula hoop fitness tips and studio news"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          blogs={[
            {
              id: "1",
              category: "Technique",
              title: "5 Essential Hula Hoop Moves for Beginners",
              excerpt: "Master these fundamental techniques to build your confidence and skills in hula hoop fitness",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Beginner hula hoop techniques",
              authorName: "Coach Maya",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Nutrition",
              title: "Fuel Your Workout: Pre and Post Class Nutrition",
              excerpt: "Optimize your energy and recovery with these simple nutrition tips for hula hoop training",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Healthy workout nutrition",
              authorName: "Dr. Lisa Park",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "10 Jan 2025"
            },
            {
              id: "3",
              category: "Wellness",
              title: "The Mental Benefits of Hula Hoop Fitness",
              excerpt: "Discover how this joyful movement practice can boost your mood and reduce stress",
              imageSrc: "/placeholders/placeholder1.webp",
              imageAlt: "Mental wellness through fitness",
              authorName: "Sarah Chen",
              authorAvatar: "/placeholders/placeholder1.webp",
              date: "5 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Start Your Journey?"
          description="Get in touch with us to book your first class or ask any questions about our hula hoop fitness programs."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your fitness goals or ask any questions...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394195861-fauce9x8.jpg"
          logoText="HulaFit"
          logoWidth={120}
          logoHeight={40}
          columns={[
            {
              title: "Classes",
              items: [
                { label: "Cardio Blast", href: "classes" },
                { label: "Core Strength", href: "classes" },
                { label: "Flexibility Flow", href: "classes" },
                { label: "Dance Fusion", href: "classes" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Instructors", href: "about" },
                { label: "Testimonials", href: "testimonials" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Class Schedule", href: "classes" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/hulafit", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com/hulafit", ariaLabel: "Follow us on Facebook" },
            { icon: Youtube, href: "https://youtube.com/hulafit", ariaLabel: "Subscribe to our YouTube channel" }
          ]}
          copyrightText="© 2025 HulaFit Training Center. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}