"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-4rem)] flex items-center bg-background px-4 sm:px-20"
    >
      <div className="hidden md:block w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-[#8958e8]/70 via-[#6B32E8]/70 to-[#8958e8]/70 rounded-full absolute -bottom-40 left-60 blur-3xl animate-smooth-pulse z-0"></div>
      <div className="w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-[#8958e8]/70 via-[#6B32E8]/70 to-[#8958e8]/70 rounded-full absolute -top-80 right-0 blur-3xl animate-smooth-pulse z-0"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(157,107,255,0.1),transparent)] dark:bg-[radial-gradient(ellipse_at_center,rgba(157,107,255,0.1),transparent)]" />

      <div className="container mx-auto flex flex-col justify-center h-full relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-xl mb-2">
              I am <span className="">Olana Kelbesa</span>
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#9a67ff]/70 via-[#814df1] to-[#8958e8]/70 bg-clip-text text-transparent ">
              Web Developer +<br />
              UX Designer
            </h2>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              I break down complex user experience problems to create
              integrity-focused solutions that connect billions of people
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-purple-gradient hover:opacity-90 transition-opacity"
                size="lg"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-light text-purple-light hover:bg-purple-light/10"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 mt-10">
              <a
              target="_blank"
              rel="noopener noreferrer"
                href="https://www.upwork.com/freelancers/~0102a30d6948d2b042?mp_source=share"
                className="bg-darkbg-light hover:bg-purple-dark/20 transition-colors p-3 rounded-full cursor-pointer hover:border-[#8958e8] hover:text-[#8958e8] z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M 1 9 A 1.0001 1.0001 0 0 0 0 10 L 0 24.5 C 0 30.832314 5.1676857 36 11.5 36 C 17.222701 36 21.784718 31.707225 22.650391 26.220703 C 23.266946 27.074852 23.852862 27.94719 24.548828 28.728516 C 23.305285 33.997601 21.75435 40.586226 21.003906 43.771484 A 1.0001 1.0001 0 0 0 21.976562 45 L 28.140625 45 A 1.0001 1.0001 0 0 0 29.115234 44.228516 C 29.796783 41.335284 30.661366 37.663644 31.474609 34.212891 C 33.325586 35.182074 35.46699 36 38 36 C 44.607457 36 50 30.607457 50 24 C 50 17.392543 44.607457 12 38 12 C 33.351597 12 29.329494 14.73649 27.349609 18.787109 C 25.250367 15.153046 23.679535 11.321256 23.107422 9.671875 A 1.0001 1.0001 0 0 0 22.162109 9 L 16 9 A 1.0001 1.0001 0 0 0 15 10 L 15 24.5 C 15 26.438477 13.438477 28 11.5 28 C 9.5615232 28 8 26.438477 8 24.5 L 8 10 A 1.0001 1.0001 0 0 0 7 9 L 1 9 z M 2 11 L 6 11 L 6 24.5 C 6 27.523523 8.4764768 30 11.5 30 C 14.523523 30 17 27.523523 17 24.5 L 17 11 L 21.482422 11 C 22.273404 13.215441 23.944949 17.537644 26.566406 21.546875 A 1.0001 1.0001 0 0 0 28.367188 21.269531 C 29.570504 16.954686 33.490696 14 38 14 C 43.522543 14 48 18.477457 48 24 C 48 29.522543 43.522543 34 38 34 C 35.415566 34 33.139372 33.060118 31.306641 31.933594 A 1.0001 1.0001 0 0 0 29.810547 32.556641 C 28.977084 36.092572 28.087065 39.869349 27.349609 43 L 23.240234 43 C 24.068273 39.484692 25.440674 33.656175 26.601562 28.738281 A 1.0001 1.0001 0 0 0 26.359375 27.826172 C 25.067499 26.438388 23.890106 24.834136 22.845703 23.173828 A 1.0001 1.0001 0 0 0 21 23.707031 L 21 24.5 C 21 29.747686 16.747686 34 11.5 34 C 6.2523143 34 2 29.747686 2 24.5 L 2 11 z M 38 18 C 35.267007 18 32.868994 19.854944 32.189453 22.5 C 32.117963 22.778361 31.79793 24.13658 31.296875 26.257812 A 1.0001 1.0001 0 0 0 31.640625 27.265625 C 33.155461 28.493019 35.372083 30 38 30 C 41.299377 30 44 27.299377 44 24 C 44 20.700623 41.299377 18 38 18 z M 38 20 C 40.214623 20 42 21.785377 42 24 C 42 26.214623 40.214623 28 38 28 C 36.36884 28 34.726398 27.035602 33.404297 26.041016 C 33.766735 24.509483 34.108542 23.067781 34.126953 22.996094 C 34.581412 21.22715 36.166993 20 38 20 z"></path>
                </svg>
              </a>
              <a
              target="_blank"
              rel="noopener noreferrer"
                href="https://www.linkedin.com/in/olana-kelbesa-257148283/"
                className="bg-darkbg-light hover:bg-purple-dark/20 transition-colors p-3 rounded-full cursor-pointer hover:border-[#8958e8] hover:text-[#8958e8] z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-light"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
              target="_blank"
              rel="noopener noreferrer"
                href="https://github.com/Olanakelbesa"
                className="bg-darkbg-light hover:bg-purple-dark/20 transition-colors p-3 rounded-full cursor-pointer hover:border-[#8958e8] hover:text-[#8958e8] z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
              target="_blank"
              rel="noopener noreferrer"
                href="https://t.me/Oli8080"
                className="bg-darkbg-light hover:bg-purple-dark/20 transition-colors p-3 rounded-full cursor-pointer hover:border-[#8958e8] hover:text-[#8958e8] z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 80 80"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M 70.511719 10.986328 C 69.833089 11.015588 69.157051 11.196735 68.537109 11.4375 L 68.535156 11.4375 C 67.931048 11.673297 64.049934 13.281226 58.392578 15.628906 C 52.735222 17.976586 45.3821 21.032905 38.091797 24.064453 C 23.51119 30.12755 9.1835937 36.091797 9.1835938 36.091797 L 9.2480469 36.068359 C 9.2480469 36.068359 8.4485192 36.330303 7.6484375 36.871094 C 7.2483967 37.141489 6.8283994 37.486951 6.4960938 37.966797 C 6.163788 38.446643 5.9299055 39.103809 6.0195312 39.808594 C 6.1812736 41.080477 7.0482024 41.912426 7.7636719 42.412109 C 8.4791414 42.911793 9.1660156 43.148437 9.1660156 43.148438 L 9.1738281 43.152344 L 23.1875 47.785156 C 23.418097 48.587707 27.163839 61.631062 28.046875 64.384766 C 28.50876 65.826709 28.935922 66.627156 29.335938 67.130859 C 29.535944 67.382711 29.733459 67.561543 29.931641 67.683594 C 30.016841 67.736064 30.101273 67.771554 30.183594 67.802734 C 30.197014 67.807834 30.211349 67.817736 30.224609 67.822266 C 30.252855 67.83191 30.267938 67.831811 30.302734 67.839844 C 31.62302 68.328201 32.738281 67.476563 32.738281 67.476562 L 32.769531 67.453125 L 42.376953 59 L 56.585938 70.394531 L 56.710938 70.449219 C 58.991132 71.431474 60.875783 70.891854 61.970703 70.027344 C 63.065623 69.162833 63.509766 68.03125 63.509766 68.03125 L 63.544922 67.943359 L 73.794922 16.097656 C 74.046117 14.98858 74.071392 14.057617 73.853516 13.257812 C 73.635643 12.458006 73.128863 11.807693 72.5 11.443359 C 71.871137 11.079025 71.190348 10.957066 70.511719 10.986328 z M 70.566406 13.021484 C 70.96444 13.004357 71.29991 13.059037 71.498047 13.173828 C 71.696183 13.288619 71.824951 13.420226 71.923828 13.783203 C 72.022708 14.14618 72.046557 14.758873 71.84375 15.654297 L 71.839844 15.667969 L 61.630859 67.3125 C 61.615849 67.34707 61.352842 67.965627 60.730469 68.457031 C 60.102941 68.952505 59.248838 69.318622 57.578125 68.626953 L 34.738281 50.310547 A 1.0001 1.0001 0 0 0 34 50 A 1.0001 1.0001 0 0 0 32.988281 50.974609 L 30.384766 64.923828 C 30.251656 64.61729 30.108215 64.257609 29.953125 63.773438 C 29.147161 61.260079 25.522903 48.675314 25.166016 47.435547 L 61.013672 24.226562 A 1.0001 1.0001 0 0 0 62 25 A 1.0001 1.0001 0 0 0 62.988281 23.783203 C 63.014848 23.477186 62.989225 23.17624 62.855469 22.876953 C 62.639651 22.394056 62.128723 22.100054 61.765625 22.03125 C 61.039429 21.893642 60.566406 22.158203 60.566406 22.158203 L 60.466797 22.195312 L 23.857422 45.900391 L 9.8261719 41.261719 L 9.8222656 41.259766 C 9.8185507 41.25848 9.3777555 41.099419 8.9082031 40.771484 C 8.4366726 40.442168 8.062164 40.014757 8.0039062 39.556641 C 7.9835322 39.396426 8.0143062 39.287873 8.140625 39.105469 C 8.2669443 38.923065 8.501119 38.707449 8.7675781 38.527344 C 9.3004964 38.167134 9.8886719 37.962891 9.8886719 37.962891 L 9.9199219 37.951172 L 9.953125 37.9375 C 9.953125 37.9375 24.279232 31.97306 38.859375 25.910156 C 46.149446 22.878704 53.503668 19.823883 59.160156 17.476562 C 64.816644 15.129243 68.856374 13.458984 69.261719 13.300781 C 69.707777 13.127547 70.168373 13.038612 70.566406 13.021484 z M 59.199219 25.699219 L 58.398438 26.101562 L 58.240234 26.984375 L 58.853516 27.638672 L 59.199219 27.699219 L 60 27.298828 L 60.158203 26.416016 L 59.546875 25.761719 L 59.199219 25.699219 z M 56.400391 28.400391 L 55.599609 28.800781 L 55.441406 29.683594 L 56.052734 30.337891 L 56.400391 30.400391 L 57.201172 29.998047 L 57.359375 29.117188 L 56.746094 28.462891 L 56.400391 28.400391 z M 53.599609 31.099609 L 52.798828 31.501953 L 52.640625 32.382812 L 53.251953 33.037109 L 53.599609 33.099609 L 54.400391 32.699219 L 54.558594 31.816406 L 53.947266 31.162109 L 53.599609 31.099609 z M 50.800781 33.800781 L 49.998047 34.201172 L 49.841797 35.083984 L 50.453125 35.738281 L 50.800781 35.800781 L 51.601562 35.398438 L 51.759766 34.517578 L 51.146484 33.861328 L 50.800781 33.800781 z M 48 36.5 L 47.199219 36.902344 L 47.041016 37.783203 L 47.652344 38.4375 L 48 38.5 L 48.800781 38.099609 L 48.958984 37.216797 L 48.347656 36.5625 L 48 36.5 z M 45.199219 39.199219 L 44.398438 39.601562 L 44.240234 40.484375 L 44.853516 41.138672 L 45.199219 41.199219 L 46.001953 40.798828 L 46.158203 39.916016 L 45.546875 39.261719 L 45.199219 39.199219 z M 42.400391 41.900391 L 41.599609 42.300781 L 41.441406 43.183594 L 42.052734 43.837891 L 42.400391 43.900391 L 43.201172 43.498047 L 43.359375 42.617188 L 42.746094 41.962891 L 42.400391 41.900391 z M 39.599609 44.599609 L 38.798828 45.001953 L 38.640625 45.882812 L 39.253906 46.537109 L 39.599609 46.599609 L 40.400391 46.199219 L 40.558594 45.316406 L 39.947266 44.662109 L 39.599609 44.599609 z M 36.800781 47.300781 L 35.998047 47.701172 L 35.841797 48.583984 L 36.453125 49.238281 L 36.800781 49.300781 L 37.601562 48.898438 L 37.759766 48.015625 L 37.146484 47.361328 L 36.800781 47.300781 z M 34.675781 52.824219 L 40.794922 57.730469 L 32.378906 65.132812 L 34.675781 52.824219 z"></path>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl overflow-hidden bg-darkbg-light rotate-3 cursor-pointer dark:opacity-70  hover:rotate-0 transition-transform duration-300 border-2 border-[#8958e8] shadow-xl shadow-[#8958e8]/20 z-10">
                <Image
                  src="/hero.jpg"
                  alt="Profile"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50"
      >
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center text-muted-foreground hover:text-purple-light transition-colors "
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce text-purple-light" />
        </button>
      </motion.div>
    </section>
  );
}
