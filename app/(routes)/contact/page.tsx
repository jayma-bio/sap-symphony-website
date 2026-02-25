import { MaxWrapper } from "@/components/shared/max-wrapper";
import ContactForm from "../_components/contact/form";
import CtaSection from "@/components/modules/cta";

export default function Home() {
  return (
    <MaxWrapper className="flex flex-col bg-light-white">
      <ContactForm />
      <CtaSection />
    </MaxWrapper>
  );
}
