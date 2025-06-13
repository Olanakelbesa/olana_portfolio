"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init("kWdpfbBoCLV4uQflR");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const templateParams = {
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      await emailjs.send(
        "service_xyhnx6i",
        "template_gtze4f8",
        templateParams,
        "kWdpfbBoCLV4uQflR"
      );

      console.log("Email sent successfully!");

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form using the form element from the event
      const form = e.target as HTMLFormElement;
      if (form) {
        form.reset();
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-purple-light mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="grid gap-6">
              <Card className="bg-darkbg-light border-darkbg-light">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-purple-dark/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">
                      Email
                    </h4>
                    <p className="font-medium">olanakelbesa@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-darkbg-light border-darkbg-light">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-purple-dark/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">
                      Phone
                    </h4>
                    <p className="font-medium">+251980438627</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-darkbg-light border-darkbg-light">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-purple-dark/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">
                      Location
                    </h4>
                    <p className="font-medium">Addis Ababa, Ethiopia</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className=" border-darkbg-light focus:border-purple-light"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    className=" border-darkbg-light focus:border-purple-light"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Subject of your message"
                  className=" border-darkbg-light focus:border-purple-light"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message"
                  className="min-h-[150px] resize-none  border-darkbg-light focus:border-purple-light"
                />
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto bg-purple-gradient hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
