import Image from "next/image";
import articles from "./db";
import { LearningPage } from "./learning/page";

export default function Home() {

  return (
    <main>
      <h1>Home page</h1>
      <LearningPage />
    </main>
  );
}
