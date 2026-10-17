import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      {/* This is a client-rendered SPA served via a catch-all rewrite, so Vercel
          always returns HTTP 200 here - there's no way to send a real 404 status.
          Without this noindex tag, every unmatched URL would otherwise inherit
          index.html's default "index, follow" robots meta while showing "page not
          found" content - a textbook Soft 404 signal to Google. */}
      <Helmet>
        <title>Page Not Found | KenyaAdverts</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
