
import { Navigation } from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container pt-32 pb-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-center mb-16">
            Frequently Asked Questions
          </h1>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="shipping" className="glass rounded-lg">
              <AccordionTrigger className="px-6">Shipping Information</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                We offer free shipping on orders over $100. Standard shipping takes 3-5 
                business days, while express shipping takes 1-2 business days. International 
                shipping is available to select countries.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="returns" className="glass rounded-lg">
              <AccordionTrigger className="px-6">Returns & Exchanges</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                We accept returns within 30 days of purchase. Items must be unworn with 
                original tags attached. Exchanges are free, but return shipping costs are 
                the responsibility of the customer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sizing" className="glass rounded-lg">
              <AccordionTrigger className="px-6">Sizing Guide</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                Our shirts run true to size. For the best fit, please refer to our detailed 
                size chart. If you're between sizes, we recommend sizing up for a more 
                relaxed fit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="care" className="glass rounded-lg">
              <AccordionTrigger className="px-6">Care Instructions</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                Machine wash cold with similar colors. Tumble dry low or hang dry. Do not 
                bleach. For best results, iron on reverse side if needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="materials" className="glass rounded-lg">
              <AccordionTrigger className="px-6">Materials & Quality</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                We use premium, sustainably sourced materials including organic cotton and 
                recycled polyester. All our shirts are pre-shrunk and colorfast.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="font-serif text-2xl mb-4">Still have questions?</h2>
            <p className="text-white/70 mb-6">
              Our customer service team is here to help. Reach out to us anytime.
            </p>
            <a
              href="mailto:support@shirtsmatter.com"
              className="glass glass-hover px-8 py-4 rounded-full inline-block"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
