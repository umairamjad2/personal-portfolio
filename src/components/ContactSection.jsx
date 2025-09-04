import { CheckCircle, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import ContactSectionleft from "./ContactSectionleft";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    e.target.reset();
    setTimeout(() => {
      toast.success(
        <div>
          <strong className="text-foreground">Message sent! </strong>
          <p className="text-sm sm:text-base">
            Thank you for your message. I'll get back to you soon.
          </p>
        </div>,
        {
          icon: <CheckCircle className="text-primary/80" />,
          progressClassName: "toast-progress-success",
        }
      );
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-sm sm:text-base text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactSectionleft />

          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xs">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Send a message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400 text-sm sm:text-base"
                  placeholder="Umair Amjad..."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400 text-sm sm:text-base"
                  placeholder="umairamjad970@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder-gray-400 text-sm sm:text-base"
                  placeholder="Hello, I'd like to talk about..."
                  required
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default ContactSection;


  // import {
  //   CheckCircle,
  //   Facebook,
  //   Instagram,
  //   Linkedin,
  //   Mail,
  //   MapPin,
  //   Phone,
  //   Send,
  // } from "lucide-react";
  // import { cn } from "../lib/utils";
  // import { ToastContainer, toast } from "react-toastify";
  // import { useState } from "react";
  // import ContactSectionleft from "./ContactSectionleft";

  // const ContactSection = () => {
  //   const [isSubmitting, setIsSubmitting] = useState(false);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     setIsSubmitting(true);

  //     e.target.reset();

  //     setTimeout(() => {
  //       toast.success(
  //         <div>
  //           <strong className="text-foreground">Message sent! </strong>
  //           <p className="text-sm ">
  //             Thank you for your message. I'll get back to you soon.
  //           </p>
  //         </div>,
  //         {
  //           icon: <CheckCircle className="text-primary/80 " />,
  //           progressClassName: "toast-progress-success",
  //         }
  //       );
  //       setIsSubmitting(false);
  //     }, 1000);
  //   };

  //   return (
  //     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
  //       <div className="container mx-auto max-w-5xl">
  //         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
  //           Get In <span className="text-primary">Touch</span>
  //         </h2>

  //         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
  //           Have a project in mind or want to collaborate? Feel free to reach out.
  //           I'm always open to discussing new opportunities.
  //         </p>

  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  //           <ContactSectionleft />


  //           <div
  //             className="bg-card p-8   rounded-lg shadow-xs"
  //             onSubmit={handleSubmit}
  //           >
  //             <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
  //             <form className="space-y-6">
  //               <div>
  //                 <label
  //                   htmlFor="name"
  //                   className="block text-sm font-medium mb-2"
  //                 >
  //                   Your Name
  //                 </label>
  //                 <input
  //                   type="text"
  //                   id="name"
  //                   name="name"
  //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary  placeholder-gray-400"
  //                   placeholder="Umair Amjad..."
  //                   required
  //                 />
  //               </div>
  //               <div>
  //                 <label
  //                   htmlFor="email"
  //                   className="block text-sm font-medium mb-2"
  //                 >
  //                   Your Email
  //                 </label>
  //                 <input
  //                   type="email"
  //                   id="email"
  //                   name="email"
  //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary placeholder-gray-400"
  //                   placeholder="umairamjad970@gmail.com"
  //                   required
  //                 />
  //               </div>
  //               <div>
  //                 <label
  //                   htmlFor="message"
  //                   className="block text-sm font-medium mb-2"
  //                 >
  //                   Your Message
  //                 </label>
  //                 <textarea
  //                   id="message"
  //                   name="message"
  //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary resize-none placeholder-gray-400"
  //                   placeholder="Hello, I'd like to talk about..."
  //                   required
  //                 />
  //               </div>
  //               <button
  //                 disabled={setIsSubmitting}
  //                 type="submit"
  //                 className={cn(
  //                   "cosmic-button w-full flex items-center justify-center gap-2"
  //                 )}
  //               >
  //                 {isSubmitting ? "Sending..." : "Send Message"}
  //                 <Send size={16} />
  //               </button>
  //             </form>
  //           </div>
  //         </div>
  //       </div>
  //       <ToastContainer
  //         position="bottom-right"
  //         autoClose={3000}
  //         hideProgressBar={false}
  //         newestOnTop={false}
  //         closeOnClick
  //         rtl={false}
  //         pauseOnFocusLoss
  //         draggable
  //         pauseOnHover
  //         theme="dark"
  //       />
  //     </section>
  //   );
  // };

  // export default ContactSection;


  // // import {
  // //   CheckCircle,
  // //   Facebook,
  // //   Instagram,
  // //   Linkedin,
  // //   Mail,
  // //   MapPin,
  // //   Phone,
  // //   Send,
  // // } from "lucide-react";
  // // import { cn } from "../lib/utils";
  // // import { ToastContainer, toast } from "react-toastify";
  // // import { useState } from "react";
  // // import ContactSectionleft from "./ContactSectionleft";

  // // const ContactSection = () => {
  // //   const [isSubmitting, setIsSubmitting] = useState(false);

  // //   const handleSubmit = async (e) => {
  // //     e.preventDefault();
  // //     setIsSubmitting(true);

  // //     const formData = new FormData(e.target);
  // //     formData.append("access_key", "3497365b-e3d3-449e-86b4-a30e4d38346b"); // 🔑 Replace with your real key from Web3Forms

  // //     const object = Object.fromEntries(formData);
  // //     const json = JSON.stringify(object);

  // //     try {
  // //       const res = await fetch("https://api.web3forms.com/submit", {
  // //         method: "POST",
  // //         headers: {
  // //           "Content-Type": "application/json",
  // //           Accept: "application/json",
  // //         },
  // //         body: json,
  // //       }).then((res) => res.json());

  // //       if (res.success) {
  // //         toast.success(
  // //           <div>
  // //             <strong className="text-foreground">Message sent! </strong>
  // //             <p className="text-sm">
  // //               Thank you for your message. I'll get back to you soon.
  // //             </p>
  // //           </div>,
  // //           {
  // //             icon: <CheckCircle className="text-primary/80" />,
  // //             progressClassName: "toast-progress-success",
  // //           }
  // //         );
  // //         e.target.reset();
  // //       } else {
  // //         toast.error("Something went wrong. Please try again.");
  // //       }
  // //     } catch (error) {
  // //       toast.error("Network error. Please try again later.");
  // //     }

  // //     setIsSubmitting(false);
  // //   };

  // //   return (
  // //     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
  // //       <div className="container mx-auto max-w-5xl">
  // //         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
  // //           Get In <span className="text-primary">Touch</span>
  // //         </h2>

  // //         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
  // //           Have a project in mind or want to collaborate? Feel free to reach
  // //           out. I'm always open to discussing new opportunities.
  // //         </p>

  // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  // //           {/* left side */}
  // //           {/* <ContactSectionleft /> */}
  // //           <div className="space-y-8 ">
  // //             <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
  // //             <div className="space-y-6 justify-center ">
  // //               <div className="flex items-start space-x-4">
  // //                 <div className="p-3 rounded-full bg-primary/10">
  // //                   <Mail className="h-6 w-6 text-primary" />
  // //                 </div>
  // //                 <div>
  // //                   <h4 className="font-medium">Email</h4>{" "}
  // //                   <a
  // //                     href="mailto:umairamjad970@gmail.com"
  // //                     className="text-muted-foreground hover:text-primary transition-colors"
  // //                   >
  // //                     umairamjad970@gmail.com
  // //                   </a>
  // //                 </div>
  // //               </div>
  // //               <div className="flex items-start space-x-4">
  // //                 <div className="p-3 rounded-full bg-primary/10">
  // //                   <Phone className="h-6 w-6 text-primary" />
  // //                 </div>
  // //                 <div>
  // //                   <h4 className="font-medium">Phone</h4>{" "}
  // //                   <a
  // //                     href="tel:+923473249678"
  // //                     className="text-muted-foreground hover:text-primary transition-colors"
  // //                   >
  // //                     +92 347 3249678
  // //                   </a>
  // //                 </div>
  // //               </div>
  // //               <div className="flex items-start space-x-4">
  // //                 <div className="p-3 rounded-full bg-primary/10">
  // //                   <MapPin className="h-6 w-6 text-primary" />
  // //                 </div>
  // //                 <div>
  // //                   <h4 className="font-medium">Location</h4>{" "}
  // //                   <a className="text-muted-foreground hover:text-primary transition-colors">
  // //                     Orangi Town, Karachi, Pakistan
  // //                   </a>
  // //                 </div>
  // //               </div>
  // //             </div>

  // //             <div className="pt-8">
  // //               <h4 className="font-medium mb-4"> Connect With Me</h4>
  // //               <div className="flex space-x-4 justify-center">
  // //                 <a
  // //                   href="https://www.linkedin.com/in/umair-amjad-44ab15277/"
  // //                   target="_blank"
  // //                 >
  // //                   <Linkedin />
  // //                 </a>
  // //                 <a href="#" target="_blank">
  // //                   <Instagram />
  // //                 </a>
  // //                 <a href="#" target="_blank">
  // //                   <Facebook />
  // //                 </a>
  // //               </div>
  // //             </div>
  // //           </div>

  // //           {/* right side form */}
  // //           <div className="bg-card p-8 rounded-lg shadow-xs">
  // //             <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
  // //             <form className="space-y-6" onSubmit={handleSubmit}>
  // //               <div>
  // //                 <label
  // //                   htmlFor="name"
  // //                   className="block text-sm font-medium mb-2"
  // //                 >
  // //                   Your Name
  // //                 </label>
  // //                 <input
  // //                   type="text"
  // //                   id="name"
  // //                   name="name"
  // //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
  // //                   placeholder="Umair Amjad..."
  // //                   required
  // //                 />
  // //               </div>
  // //               <div>
  // //                 <label
  // //                   htmlFor="email"
  // //                   className="block text-sm font-medium mb-2"
  // //                 >
  // //                   Your Email
  // //                 </label>
  // //                 <input
  // //                   type="email"
  // //                   id="email"
  // //                   name="email"
  // //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
  // //                   placeholder="umairamjad970@gmail.com"
  // //                   required
  // //                 />
  // //               </div>
  // //               <div>
  // //                 <label
  // //                   htmlFor="message"
  // //                   className="block text-sm font-medium mb-2"
  // //                 >
  // //                   Your Message
  // //                 </label>
  // //                 <textarea
  // //                   id="message"
  // //                   name="message"
  // //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder-gray-400"
  // //                   placeholder="Hello, I'd like to talk about..."
  // //                   required
  // //                 />
  // //               </div>
  // //               <button
  // //                 disabled={isSubmitting}
  // //                 type="submit"
  // //                 className={cn(
  // //                   "cosmic-button w-full flex items-center justify-center gap-2"
  // //                 )}
  // //               >
  // //                 {isSubmitting ? "Sending..." : "Send Message"}
  // //                 <Send size={16} />
  // //               </button>
  // //             </form>
  // //           </div>
  // //         </div>
  // //       </div>
  // //       <ToastContainer
  // //         position="bottom-right"
  // //         autoClose={3000}
  // //         hideProgressBar={false}
  // //         newestOnTop={false}
  // //         closeOnClick
  // //         rtl={false}
  // //         pauseOnFocusLoss
  // //         draggable
  // //         pauseOnHover
  // //         theme="dark"
  // //       />
  // //     </section>
  // //   );
  // // };

  // // export default ContactSection;

