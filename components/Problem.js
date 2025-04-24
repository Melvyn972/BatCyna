const Arrow = ({ extraStyle }) => {
  return (
    <svg
      className={`shrink-0 w-12 fill-neutral-content opacity-70 ${extraStyle}`}
      viewBox="0 0 138 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.9644 5.31431C98.8774 43.8211 83.3812 88.048 54.9567 120.735C54.4696 121.298 54.5274 122.151 55.0896 122.639C55.6518 123.126 56.5051 123.068 56.9922 122.506C86.2147 88.9044 101.84 43.3918 75.2003 3.80657C74.7866 3.18904 73.9486 3.02602 73.3287 3.44222C72.7113 3.85613 72.5484 4.69426 72.9644 5.31431Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M56.5084 121.007C56.9835 118.685 57.6119 115.777 57.6736 115.445C59.3456 106.446 59.5323 97.67 58.4433 88.5628C58.3558 87.8236 57.6824 87.2948 56.9433 87.3824C56.2042 87.4699 55.6756 88.1435 55.7631 88.8828C56.8219 97.7138 56.6432 106.225 55.0203 114.954C54.926 115.463 53.5093 121.999 53.3221 123.342C53.2427 123.893 53.3688 124.229 53.4061 124.305C53.5887 124.719 53.8782 124.911 54.1287 125.015C54.4123 125.13 54.9267 125.205 55.5376 124.926C56.1758 124.631 57.3434 123.699 57.6571 123.487C62.3995 120.309 67.4155 116.348 72.791 113.634C77.9171 111.045 83.3769 109.588 89.255 111.269C89.9704 111.475 90.7181 111.057 90.9235 110.342C91.1288 109.626 90.7117 108.878 89.9963 108.673C83.424 106.794 77.3049 108.33 71.5763 111.223C66.2328 113.922 61.2322 117.814 56.5084 121.007Z"
        />
      </g>
    </svg>
  );
};
const Step = ({ emoji, text }) => {
  return (
    <div className="w-full md:w-48 flex flex-col gap-2 items-center justify-center">
      <span className="text-4xl">{emoji}</span>
      <h3 className="font-bold">{text}</h3>
    </div>
  );
};

const ProblemCard = ({ number, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-start gap-5">
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          {number}
        </span>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Problem Agitation: A crucial, yet overlooked, component for a landing page that sells.
// It goes under your Hero section, and above your Features section.
// Your Hero section makes a promise to the customer: "Our product will help you achieve XYZ".
// Your Problem section explains what happens to the customer if its problem isn't solved.
// The copy should NEVER mention your product. Instead, it should dig the emotional outcome of not fixing a problem.
// For instance:
// - Hero: "ShipFast helps developers launch startups fast"
// - Problem Agitation: "Developers spend too much time adding features, get overwhelmed, and quit." (not about ShipFast at all)
// - Features: "ShipFast has user auth, Stripe, emails all set up for you"
const Problem = () => {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900 opacity-95 z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="inline-block py-1 px-3 text-xs bg-white/10 text-white rounded-full mb-6">
            Le défi
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            83% des entreprises font face à des <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">pertes financières</span> dues à une sécurité inadéquate
        </h2>
          <p className="text-xl text-gray-300">
            Menaces persistantes avancées, réglementations de conformité, architecture de sécurité fragmentée — le paysage actuel de la cybersécurité présente une complexité sans précédent.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <ProblemCard 
            number="01"
            title="Surface d'attaque vulnérable"
            description="Les entreprises disposent en moyenne de 254 applications critiques, créant une surface d'attaque extensive que les équipes de sécurité peinent à surveiller efficacement."
          />
          
          <ProblemCard 
            number="02"
            title="Temps de détection prolongé"
            description="Le temps moyen de détection d'une violation est de 287 jours, permettant aux attaquants d'accéder aux systèmes critiques et de dérober des données sensibles."
          />
          
          <ProblemCard 
            number="03"
            title="Impact catastrophique pour l'entreprise"
            description="Le coût moyen d'une violation de données atteint 4,35 millions de dollars, sans compter les dommages à la réputation et la perte de confiance des clients."
          />
        </div>
        
        <div className="mt-20 relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-16 max-w-5xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H16L14 15H10L8 12H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11V5.11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">500+</h4>
                <p className="text-gray-400">Entreprises protégées</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">99.8%</h4>
                <p className="text-gray-400">Taux de détection</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.93 4.93L7.76 7.76" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.24 16.24L19.07 19.07" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.93 19.07L7.76 16.24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.24 7.76L19.07 4.93" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">15 min</h4>
                <p className="text-gray-400">Temps de réponse moyen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
