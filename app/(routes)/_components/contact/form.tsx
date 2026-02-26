"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "@formspree/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Loader2, MapPin, Phone, Mail, Send } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import SectionHeader from "@/components/shared/section-header";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mgokzlke");

  // Local form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessEmail: "",
    phone: "",
    organization: "",
    interest: "Sap Studio",
    terms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "First name is required";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    if (
      !formData.businessEmail ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)
    ) {
      newErrors.businessEmail = "Valid business email is required";
    }

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.organization || formData.organization.length < 2) {
      newErrors.organization = "Organization is required";
    }

    if (!formData.interest) {
      newErrors.interest = "Please select an option";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await handleSubmit(e);

    if (state.succeeded) {
      toast.success("Message sent successfully!", {
        description: "Thanks for contacting us! We'll get back to you soon.",
      });
      resetForm();
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      businessEmail: "",
      phone: "",
      organization: "",
      interest: "",
      terms: false,
    });
    setErrors({});
  };

  return (
    <div
      id="contact"
      className="w-full responsive-padding max-w-screen-2xl mx-auto mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 bg-light-green px-10 py-8 rounded-lg">
        {/* Left Side - Contact Info */}
        <div className="flex flex-col gap-6">
          <SectionHeader
          hideTag
            tag="CONTACT US"
            title="Get in touch with us."
            description="It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you. Shoot!"
          />

          {/* Address */}
          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-lg font-semibold text-light-black">Address</h3>
            <div className="flex gap-3 items-start">
              <MapPin className="size-5 shrink-0 text-light-black mt-0.5" />
              <a
                href="https://www.google.com/maps/place/Biotechnology+and+Medical+Engineering+Department,+NIT+Rourkela/@22.2526738,84.8972507,16z/data=!4m10!1m2!2m1!1sBM-224,+BM+BT+Department+Building,+NIT+Rourkela,+Sector+1,+Rourkela,+Odisha+769008,+IN!3m6!1s0x3a201e78b80b8fed:0xa0d5e04c601605ad!8m2!3d22.2526738!4d84.9044054!15sClZCTS0yMjQsIEJNIEJUIERlcGFydG1lbnQgQnVpbGRpbmcsIE5JVCBSb3Vya2VsYSwgU2VjdG9yIDEsIFJvdXJrZWxhLCBPZGlzaGEgNzY5MDA4LCBJTlpSIlBibSAyMjQgYm0gYnQgZGVwYXJ0bWVudCBidWlsZGluZyBuaXQgcm91cmtlbGEgc2VjdG9yIDEgcm91cmtlbGEgb2Rpc2hhIDc2OTAwOCBpbpIBFXVuaXZlcnNpdHlfZGVwYXJ0bWVudJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyeFNjV0pIV1hkVVYzUkRXVzFzYWxscmRHcE9SbHBzV1RJNGVXSnNSUkFC4AEA-gEECAAQJQ!16s%2Fg%2F11g8_pqh4k?authuser=0&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-black transition-colors"
              >
                BM-224, BM BT Department Building, NIT Rourkela,
                <br /> Sector 1, Rourkela, Odisha 769008, IN
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-light-black">Contact</h3>

            <div className="flex gap-3 items-center">
              <Phone className="size-5 shrink-0 text-light-black" />
              <div className="flex flex-col gap-1">
                <a
                  href="tel:+919940515782"
                  className="text-light-black transition-colors"
                >
                  +91 99405 15782
                </a>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Mail className="size-5 shrink-0 text-light-black" />
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:jaymabiotech@gmail.com"
                  className="text-light-black hover:text-deepest-green transition-colors"
                >
                  jaymabiotech@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <Card className="p-6 md:p-8 border-0 shadow-lg shadow-muted">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-light-black">Name*</label>
              <Input
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="h-11"
                name="name"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-light-black">Email*</label>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-11"
                name="email"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            {/* Business Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-light-black">
                Business Email*
              </label>
              <Input
                type="email"
                placeholder="Enter your business email"
                value={formData.businessEmail}
                onChange={(e) =>
                  handleInputChange("businessEmail", e.target.value)
                }
                className="h-11"
                name="businessEmail"
              />
              {errors.businessEmail && (
                <p className="text-sm text-destructive">
                  {errors.businessEmail}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-light-black">Phone</label>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="h-11"
                name="phone"
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone}</p>
              )}
            </div>

            {/* Organization */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-light-black">
                Organization
              </label>
              <Input
                placeholder="Enter your organization"
                value={formData.organization}
                onChange={(e) =>
                  handleInputChange("organization", e.target.value)
                }
                className="h-11"
                name="organization"
              />
              {errors.organization && (
                <p className="text-sm text-destructive">
                  {errors.organization}
                </p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="mt-2 space-y-2">
              <div className="flex items-start gap-2">
                <Checkbox
                  checked={formData.terms}
                  onCheckedChange={(checked) =>
                    handleInputChange("terms", checked === true)
                  }
                  className="border-[#E4E4E7]! mt-0.5"
                />
                <label className="text-sm text-light-black font-normal cursor-pointer">
                  I have read and agree to the{" "}
                  <a
                    href="https://www.jaymabioinnovations.com/terms-conditions"
                    className="text-light-black underline"
                    target="_blank"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
              {errors.terms && (
                <p className="text-sm text-destructive">{errors.terms}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11 rounded-full mt-2"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <>
                  Sending
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
