import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const ContactSectionleft = () => {
  return (
    <div className="space-y-8 pt-8 mb-10 ">
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 items-center text-center sm:text-left">
          <div className="p-3 rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Email</h4>{" "}
            <a
              href="mailto:umairamjad970@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              umairamjad970@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 items-center text-center sm:text-left ">
          <div className="p-3 rounded-full bg-primary/10">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Phone</h4>{" "}
            <a
              href="tel:+923473249678"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +92 347 3249678
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 items-center text-center sm:text-left">
          <div className="p-3 rounded-full bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Location</h4>{" "}
            <a className="text-muted-foreground hover:text-primary transition-colors">
              Orangi Town, Karachi, Pakistan
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h4 className="font-medium mb-4 "> Connect With Me</h4>
        <div className="flex space-x-10 justify-center">
          <a
            href="https://www.linkedin.com/in/umair-amjad-44ab15277/"
            target="_blank"
          >
            <Linkedin className="hover:text-primary transition-colors" />
          </a>
          <a href="https://github.com/umairamjad2" target="_blank">
            <Github className="hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/__umairamjad?igsh=dHAxc2FmaGp2a3N2"
            target="_blank"
          >
            <Instagram className="hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionleft;
