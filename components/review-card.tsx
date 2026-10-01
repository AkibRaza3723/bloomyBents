import { Star } from "lucide-react";
import type { Review } from "@/lib/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-card border border-border/50 rounded-2xl p-4 sm:p-5 space-y-3 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed italic">
          &ldquo;{review.comment}&rdquo;
        </p>
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-border/30 text-xs sm:text-sm">
        <span className="font-medium text-foreground">{review.name}</span>
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>
    </div>
  );
}

