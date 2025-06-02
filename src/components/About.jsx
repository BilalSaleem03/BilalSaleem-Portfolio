'use client'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About <span className="text-blue-600">Me</span>
          </h2>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              A third-year Computer Science student at COMSATS University, Islamabad, with a strong passion for <span className="font-semibold text-blue-600">MERN Stack development</span>.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              As the <span className="font-semibold">Operations Manager of the IEEE Computer Society</span>, I have honed my <span className="font-semibold">leadership, event management, and problem-solving skills</span> while actively contributing to various tech events and volunteer initiatives.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My dedication to technology and community engagement drives me to continuously learn and innovate.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Bachelor of Computer Sciences</span><br />
                COMSATS University Islamabad<br />
                2023 - 2027
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contact</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">Phone:</span> +92 3220656582<br />
                <span className="font-medium">Email:</span> mr.bilalsaleem2003@gmail.com<br />
                <span className="font-medium">Address:</span> House #266 Margalla Town, Islamabad
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Languages</h3>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-medium">English</span> - Professional<br />
                <span className="font-medium">Urdu</span> - Native
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}