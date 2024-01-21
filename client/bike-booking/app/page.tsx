import { Content } from "@/components/layout/content/Content";
import { BikesContextProvider } from "@/context/bikes-context";

export default function Home() {
  return (
    <main className="main">
      <BikesContextProvider>
        <Content />
      </BikesContextProvider>
    </main>
  );
}
