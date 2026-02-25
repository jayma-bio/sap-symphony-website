import { MaxWrapper } from "@/components/shared/max-wrapper";
import UseCasePageHero from "../_components/use-cases/hero";


export default function Home() {
  return (
    <MaxWrapper className="flex flex-col">
      <UseCasePageHero />
    </MaxWrapper>
  );
}
