import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] size-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] size-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
          <SearchX className="size-8" />
        </div>

        {/* 404 */}
        <p className="mt-8 font-heading text-8xl font-bold tracking-tight text-primary sm:text-9xl">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Page Not Found<span className="text-primary">.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
          Sorry, the page you are looking for does not exist or may have been
          moved to another location.
        </p>

        {/* Back Home */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
          >
            <Home className="size-4" />
            Back to Home
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-muted-foreground">
          Ricksan Wira · Fullstack Developer
        </p>
      </div>
    </main>
  );
}