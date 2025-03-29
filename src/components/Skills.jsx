import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJava, FaPhp, FaAngular } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="bg-gradient-to-r from-[#1B5E20] via-[#2E7D32] to-[#00E5FF] text-blancoTexto py-16">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-12 text-[#FFC107]">Habilidades</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* React */}
          <div className="skill-card bg-[#2E7D32] rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <FaReact className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 text-blancoTexto" />
            <h3 className="text-lg sm:text-xl font-medium text-azulOscuro">React</h3>
          </div>
          {/* Node.js */}
          <div className="skill-card bg-[#2E7D32] rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <FaNodeJs className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 text-blancoTexto" />
            <h3 className="text-lg sm:text-xl font-medium text-azulOscuro">Node.js</h3>
          </div>
          {/* CSS3 */}
          <div className="skill-card bg-[#2E7D32] rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <FaCss3Alt className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 text-blancoTexto" />
            <h3 className="text-lg sm:text-xl font-medium text-azulOscuro">CSS3</h3>
          </div>
          {/* HTML5 */}
          <div className="skill-card bg-[#2E7D32] rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <FaHtml5 className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 text-blancoTexto" />
            <h3 className="text-lg sm:text-xl font-medium text-azulOscuro">HTML5</h3>
          </div>
          {/* Java */}
          <div className="skill-card bg-[#2E7D32] rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <FaJava className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 text-blancoTexto" />
            <h3 className="text-lg sm:text-xl font-medium text-azulOscuro">Java</h3>
          </div>
          {/* PHP */}
          <div className="skill-card bg-[#2E7D32] rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <FaPhp className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 text-blancoTexto" />
            <h3 className="text-lg sm:text-xl font-medium text-azulOscuro">PHP</h3>
          </div>
          {/* Angular */}
          <div className="skill-card bg-[#2E7D32] rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <FaAngular className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 text-blancoTexto" />
            <h3 className="text-lg sm:text-xl font-medium text-azulOscuro">Angular</h3>
          </div>
          {/* TypeScript */}
          <div className="skill-card bg-[#2E7D32] rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <SiTypescript className="mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 text-blancoTexto" />
            <h3 className="text-lg sm:text-xl font-medium text-azulOscuro">TypeScript</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
