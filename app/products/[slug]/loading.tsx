export default function Loading() {
  return (
    <div className="pt-24 min-h-screen max-w-6xl mx-auto px-6">
      <div className="h-6 w-32 bg-muted rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-[3/4] rounded-3xl bg-muted animate-pulse" />
        <div className="space-y-4 pt-4">
          <div className="h-4 w-20 bg-muted rounded animate-pulse" />
          <div className="h-12 w-3/4 bg-muted rounded animate-pulse" />
          <div className="h-4 w-full bg-muted rounded animate-pulse" />
          <div className="h-10 w-32 bg-muted rounded animate-pulse" />
          <div className="h-14 bg-muted rounded-full animate-pulse mt-4" />
        </div>
      </div>
    </div>
  );
}
