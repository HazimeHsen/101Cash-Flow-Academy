import ContactUs from "@/components/ContactUs";
import Reviews from "@/components/Reviews";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import StartPage from "@/components/StartPage";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <StartPage />
      <ContactUs />
      <Reviews />
      <ScrollToTopButton />
    </div>
  );
}
