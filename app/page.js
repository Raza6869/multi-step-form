"use client";
import ContactForm from "@/components/contact-form";
import StepSection from "@/components/step-section";
import { ContactProvider } from "@/context/ContactProvider";

export default function Home() {
  return (
    <main className=" bg-gray-200 h-screen overflow-hidden flex justify-center items-center">
      <div className="w-[592px] p-8 bg-white items-start flex flex-col gap-8 border-2 border-gray-100 rounded-[6px]">
        <StepSection />
        <span id="divider" className="w-full bg-gray-100 h-[1px]"></span>
        <ContactProvider>
          <ContactForm />
        </ContactProvider>
      </div>
    </main>
  );
}
