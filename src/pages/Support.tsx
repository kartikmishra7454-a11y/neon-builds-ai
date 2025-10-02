import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, Mail, Phone, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all products. Items must be in original condition with all packaging and accessories.",
    },
    {
      question: "Do you offer warranty on products?",
      answer: "Yes! All products come with manufacturer warranty. Gaming PCs have 1-year warranty, components have 2-3 years depending on the manufacturer.",
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.",
    },
    {
      question: "Can I upgrade components later?",
      answer: "Absolutely! All our builds are designed for easy upgrades. We also offer upgrade services if you need assistance.",
    },
    {
      question: "Do you build custom PCs?",
      answer: "Yes! Use our PC Builder tool to create your custom configuration, or contact our team for personalized recommendations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How Can We Help?
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Get in touch with our support team
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} required />
                </div>
                <Button type="submit" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-lg">Email Support</h3>
                    <p className="text-muted-foreground">support@pcforge.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-lg">Phone Support</h3>
                    <p className="text-muted-foreground">1-800-PC-FORGE</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 9AM - 6PM EST</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-lg">Live Chat</h3>
                    <p className="text-muted-foreground">Available 24/7</p>
                    <Button variant="link" className="p-0 h-auto">Start Chat →</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
