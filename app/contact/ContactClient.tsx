"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  LucideIcon,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string[];
  color: string;
}

export default function ContactClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.log(error);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(+91) 7814950023"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@maxoratechnology.com"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-6PM IST", "Fast Email & Phone Support"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const services = [
    "App Development",
    "Web Development",
    "WordPress Solutions",
    "eCommerce Platforms",
    "Custom CRM/ERP",
    "Other Consultation",
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let’s discuss your project and build a tailored digital solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="group glass-effect rounded-2xl p-6 hover-lift"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {item.details.map((d, idx) => (
                  <p key={idx} className="text-gray-600 dark:text-gray-300">
                    {d}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-3xl p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-10 h-10 mx-auto text-green-500 mb-4" />
                  <h2 className="text-2xl font-bold mb-2">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    We’ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-8">Send us a message</h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <input
                          {...register("name", {
                            required: "Full name is required",
                          })}
                          placeholder="Full Name *"
                          className="w-full px-4 py-3 rounded-xl glass-effect"
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Enter a valid email address",
                            },
                          })}
                          placeholder="Email Address *"
                          className="w-full px-4 py-3 rounded-xl glass-effect"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <input
                          {...register("phone", {
                            required: "Contact number is required",
                            minLength: {
                              value: 10,
                              message: "Enter a valid phone number",
                            },
                          })}
                          placeholder="Contact Number *"
                          className="w-full px-4 py-3 rounded-xl glass-effect"
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <input
                          {...register("company")}
                          placeholder="Company Name"
                          className="w-full px-4 py-3 rounded-xl glass-effect"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <select
                        {...register("service", {
                          required: "Please select a service",
                        })}
                        className="w-full px-4 py-3 rounded-xl glass-effect"
                      >
                        <option value="">Select a service *</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <textarea
                      {...register("message", { required: true })}
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl glass-effect resize-none"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="inline-block ml-3" size={20} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
