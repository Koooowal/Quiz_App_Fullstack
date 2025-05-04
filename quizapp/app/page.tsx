"use client"
import HomeCard from "@/components/quiz/HomeCard";
import { useGlobalContext } from "@/context/globalContext";



export default function Home() {
  const {categories} = useGlobalContext();
  return (
    <>
      <h1 className="text-4x1 font-bold">Quiz Catalogue</h1>
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {categories.map((category) => (
          <HomeCard key={category.id} category={category} />
        ))}
      </div>
    </>
  );
}
