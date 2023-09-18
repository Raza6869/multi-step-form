import StepSection from "@/components/step-section";

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen overflow-hidden flex justify-center items-center">
      <div className="w-[592px] p-8 bg-white items-start flex flex-col gap-8">
        <StepSection />
      </div>
    </main>
  );
}
