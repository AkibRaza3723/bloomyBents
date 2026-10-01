"use client";

import { useQuery } from "@tanstack/react-query";
import { reviews } from "@/lib/reviews";
import { ReviewCard } from "@/components/review-card";

export function ReviewsSection() {
  const { data = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => reviews,
  });

  return (
    <section className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border/50">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-foreground">
        What our customers say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {data.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}

