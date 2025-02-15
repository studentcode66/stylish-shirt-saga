
import { Navigation } from "@/components/Navigation";
import { Building, Users, Heart, Timer } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container pt-32 pb-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-6">Our Story</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Founded in 2024, Shirts Matter was born from a simple idea: that quality essentials 
            should be both accessible and sustainable. We create timeless pieces that blend 
            minimalist design with premium craftsmanship.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass rounded-lg p-8">
            <Building className="mb-4" size={32} />
            <h3 className="font-serif text-xl mb-3">Sustainable Production</h3>
            <p className="text-white/70">
              Every piece is crafted using eco-friendly materials and ethical manufacturing 
              processes, ensuring minimal environmental impact.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <Users className="mb-4" size={32} />
            <h3 className="font-serif text-xl mb-3">Community First</h3>
            <p className="text-white/70">
              We believe in building lasting relationships with our customers and creating 
              a community around shared values.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <Heart className="mb-4" size={32} />
            <h3 className="font-serif text-xl mb-3">Quality Commitment</h3>
            <p className="text-white/70">
              Each shirt is meticulously crafted using premium materials, ensuring comfort 
              and durability that lasts.
            </p>
          </div>

          <div className="glass rounded-lg p-8">
            <Timer className="mb-4" size={32} />
            <h3 className="font-serif text-xl mb-3">Timeless Design</h3>
            <p className="text-white/70">
              Our designs transcend trends, focusing on clean lines and versatile styles 
              that remain relevant season after season.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Chen", role: "Founder & Creative Director" },
              { name: "Sarah Miller", role: "Head of Design" },
              { name: "James Wilson", role: "Sustainability Lead" },
            ].map((member) => (
              <div key={member.name} className="glass rounded-lg p-6">
                <div className="w-32 h-32 rounded-full glass mx-auto mb-4 overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/200x200?portrait`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl mb-2">{member.name}</h3>
                <p className="text-white/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
