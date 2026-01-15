// import Navbar from '@/components/Navbar'
// import Hero from '@/components/Hero'
// import About from '@/components/About'
// import Skills from '@/components/Skills'
// import Experience from '@/components/Experience'
// import Projects from '@/components/Projects'
// import Contact from '@/components/Contact'

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Hero />
//         <About />
//         <Skills />
//         <Experience />
//         <Projects />
//         <Contact />
//       </main>
//       <footer className="py-6 text-center text-gray-600 dark:text-gray-400">
//         <p>© {new Date().getFullYear()} Muhammad Bilal Saleem. All rights reserved.</p>
//       </footer>
//     </div>
//   )
// }






import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-600 dark:text-gray-400 bg-gradient-to-t from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm md:text-base">© {new Date().getFullYear()} Muhammad Bilal Saleem. All rights reserved.</p>
          <p className="text-xs md:text-sm mt-2 text-gray-500 dark:text-gray-500">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}