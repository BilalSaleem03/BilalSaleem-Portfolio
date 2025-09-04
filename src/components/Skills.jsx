'use client'

const skills = [
  { name: 'React', level: 80 },
  { name: 'Next js', level: 60 },
  { name: 'Redux', level: 65 },
  { name: 'Nest js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 80 },
  { name: 'REST APIs', level: 80 },
  { name: 'PostgreSQL', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'SQL', level: 70 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'Numpy', level: 80 },
  { name: 'Pandas', level: 80 },
  { name: 'Matplotlib', level: 70 },
  { name: 'Scikit-learn', level: 75 },
  { name: 'Tensorflow', level: 75 },
  { name: 'Java', level: 70 },
  { name: 'JWT', level: 90 },
  { name: 'Git', level: 65 },
  { name: 'Postman', level: 75 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are the technologies I work with and my proficiency level in each.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  <span className="text-sm text-blue-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full bg-blue-600"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}