import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLogInForm, setIsLogInForm] = useState(true);
  const [message, setMessage] = useState("");

  const toggleForm = () => {
    setIsLogInForm((previous) => !previous);
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(
      `${isLogInForm ? "Sign-in" : "Sign-up"} is not available yet. Authentication is still being set up.`,
    );
  };

  return (
    <div className="relative isolate min-h-dvh bg-neutral-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <img
          className="h-full w-full object-cover object-center"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/29195c81-5ebb-453e-82e9-d3a50737dfb3/web/IN-en-20261026-TRIFECTA-perspective_ef561213-292c-4768-aef0-c1db800e385e_medium.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/10 to-black/30" />
      </div>

      <Header />

      <main className="flex min-h-dvh items-center justify-center px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
        <section
          aria-labelledby="sign-in-title"
          className="w-full max-w-md rounded-lg border border-white/10 bg-black/80 px-6 py-10 shadow-2xl backdrop-blur-sm sm:px-14 sm:py-12"
        >
          <h1
            id="sign-in-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {isLogInForm ? "Sign In" : "Sign Up"}
          </h1>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            {isLogInForm
              ? "Welcome back. Your next favourite story awaits."
              : "Create an account and discover your next favourite story."}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-neutral-200"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                placeholder="you@example.com"
                required
                className="w-full rounded border border-neutral-600 bg-neutral-900/80 px-4 py-3.5 text-base text-white outline-none transition placeholder:text-neutral-500 focus:border-white focus:ring-2 focus:ring-white/25"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-neutral-200"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogInForm ? "current-password" : "new-password"}
                placeholder="Enter your password"
                required
                className="w-full rounded border border-neutral-600 bg-neutral-900/80 px-4 py-3.5 text-base text-white outline-none transition placeholder:text-neutral-500 focus:border-white focus:ring-2 focus:ring-white/25"
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded bg-red-600 px-4 py-3.5 font-semibold transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:bg-red-800"
            >
              {isLogInForm ? "Sign In" : "Sign Up"}
            </button>
            <p role="status" className="text-sm leading-6 text-neutral-300">
              {message}
            </p>
          </form>
          <p className="mt-6 text-sm text-neutral-400">
            {isLogInForm ? "New to Netflix? " : "Already have an account? "}
            <button
              type="button"
              onClick={toggleForm}
              className="cursor-pointer rounded-sm font-medium text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {isLogInForm ? "Sign up now" : "Sign in now"}
            </button>
          </p>
          <p className="mt-6 border-t border-white/10 pt-6 text-xs leading-5 text-neutral-500">
            A Netflix-inspired movie discovery experience.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Login;
