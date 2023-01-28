"use client";

import { useGetTopic } from "@/core/api/topic/queries";
import Image from "next/image";

export default function Home() {
  const { data: Topic, isLoading } = useGetTopic();

  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <main>
      {Topic?.map((card) => {
        return (
          <div key={card.id} className="flex">
            <span>{card.name}</span>
            <Image width={100} height={100} alt={card.name} src={card.avatar} />
          </div>
        );
      })}
    </main>
  );
}
