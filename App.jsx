import React, { useState, useEffect } from 'react';

// Helper component for Icons
const TechIcon = ({ children, label }) => (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-800/50 rounded-lg transition-transform duration-300 hover:scale-110 hover:bg-indigo-600/50">
        <div className="text-4xl text-indigo-400">{children}</div>
        <p className="text-sm text-gray-300 text-center">{label}</p>
    </div>
);

// Main App Component
const App = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 150;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const NavLink = ({ section, children }) => (
        <a 
            href={`#${section}`} 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeSection === section 
                ? 'text-white bg-indigo-600/50' 
                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
            }`}
        >
            {children}
        </a>
    );

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans leading-relaxed">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-indigo-900/40 to-gray-900 -z-10"></div>
            
            {/* --- Header / Navbar --- */}
            <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-700/50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#home" className="text-2xl font-bold text-white tracking-wider">SKANDA</a>
                    <div className="hidden md:flex items-center space-x-2">
                        <NavLink section="home">Home</NavLink>
                        <NavLink section="about">About</NavLink>
                        <NavLink section="experience">Experience</NavLink>
                        <NavLink section="projects">Projects</NavLink>
                        <NavLink section="skills">Skills</NavLink>
                        <NavLink section="contact">Contact</NavLink>
                    </div>
                    <div className="md:hidden">
                        {/* A mobile menu could be implemented here */}
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-6 py-12 md:py-20">
                
                {/* --- Hero Section --- */}
                <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center">
                    <div className="max-w-4xl">
                        <p className="text-xl md:text-2xl text-indigo-400 font-medium mb-2">M.S. SKANDA</p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
                            Data Engineer
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                           A results-oriented professional eager to leverage expertise in Python, SQL, and data visualization to drive actionable insights and enhance operational efficiency.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="#contact" className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                                Get in Touch
                            </a>
                            <a href="https://www.linkedin.com/in/skanda-prasad11/" target="_blank" rel="noopener noreferrer" className="bg-gray-700/50 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-600/50 transition-all duration-300 transform hover:scale-105">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- About Section --- */}
                <section id="about" className="py-20">
                    <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                    <div className="max-w-4xl mx-auto bg-gray-800/30 p-8 rounded-xl shadow-2xl border border-gray-700/50">
                        <p className="text-lg text-gray-300 mb-4">
                            I am a Data Engineer with over 4 years of experience in data analysis and business intelligence. My passion lies in translating complex data into clear business recommendations and enhancing decision-making processes.
                        </p>
                        <p className="text-lg text-gray-300 mb-4">
                            I possess strong analytical and problem-solving skills, with a focus on stakeholder collaboration and converting business needs into tangible, high-impact data solutions. I thrive in fast-paced Agile environments, working to deliver value and drive efficiency.
                        </p>
                        <p className="text-lg text-gray-300">
                            Holding a Master's in Data Science and Machine Learning, I am committed to continuous learning and applying cutting-edge technology to solve real-world data challenges.
                        </p>
                    </div>
                </section>

                {/* --- Experience Section --- */}
                <section id="experience" className="py-20">
                    <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
                    <div className="max-w-4xl mx-auto relative border-l-2 border-indigo-500/30 pl-10">
                        <div className="mb-12">
                            <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 mt-1.5 border-2 border-gray-900"></div>
                            <p className="text-sm text-gray-400 mb-1">Sep 2019 - Jan 2024</p>
                            <h3 className="text-2xl font-bold text-white">Project Engineer</h3>
                            <p className="text-lg text-indigo-400 font-semibold mb-3">Wipro | Bengaluru, India</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Ensured high data integrity (99.9% accuracy) for master data for 500+ users.</li>
                                <li>Optimized supplier qualification processes, leading to a 15% improvement in onboarding time.</li>
                                <li>Owned and streamlined critical data pipelines using SQL for downstream analytics.</li>
                                <li>Implemented version control using SVN and Git, ensuring code integrity across the team.</li>
                                <li>Performed root cause analysis for production data issues, resolving 90% of incidents within SLA.</li>
                            </ul>
                        </div>
                        <div>
                            <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 mt-1.5 border-2 border-gray-900"></div>
                            <p className="text-sm text-gray-400 mb-1">Jan 2019 - Mar 2019</p>
                            <h3 className="text-2xl font-bold text-white">Internship Trainee</h3>
                            <p className="text-lg text-indigo-400 font-semibold mb-3">GTRE, DRDO | Bengaluru, India</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Analyzed the impact of ice formation on aircraft surfaces to improve safety awareness.</li>
                                <li>Researched aircraft anti-icing systems, contributing to thermal management knowledge.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* --- Projects Section --- */}
                <section id="projects" className="py-20">
                    <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-white mb-2">AI Teaching Assistant ("Sahayak")</h3>
                            <p className="text-gray-400 mb-4">Led a team in a Google Cloud Hackathon to build an AI agent using Gemini & Vertex AI for multi-grade classrooms. Engineered a multi-modal workflow and designed the Firestore backend.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-white mb-2">Fake vs. Real Image Detection</h3>
                            <p className="text-gray-400 mb-4">Developed a CNN model with TensorFlow/Keras achieving 92% accuracy. Reduced false positives by 15% through hyperparameter tuning.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-white mb-2">Sun Spot Count Forecasting</h3>
                            <p className="text-gray-400 mb-4">Applied time series analysis (ARIMA, LSTM) to 200+ years of data, improving forecast accuracy by 10% with an RMSE of 5.2.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-white mb-2">Sentiment Analytics for Product Ratings</h3>
                            <p className="text-gray-400 mb-4">Built an NLP model on 50,000+ reviews, achieving 85% accuracy. Improved model performance by 12% through feature engineering.</p>
                        </div>
                    </div>
                </section>

                {/* --- Skills Section --- */}
                <section id="skills" className="py-20">
                    <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                        <TechIcon label="Python"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L12 15.25l5.571-3M4.5 12l7.5 4.125l7.5-4.125" /></svg></TechIcon>
                        <TechIcon label="SQL"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5M4.5 12.75l7.5 7.5 7.5-7.5" /></svg></TechIcon>
                        <TechIcon label="Java"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.5 1.591L5.25 14.25M9.75 3.104a2.25 2.25 0 00-3.262 2.562L7.5 10.5M9.75 3.104a2.25 2.25 0 013.262 2.562L11.25 10.5m0 0l-2.25 2.25m2.25-2.25L15 14.25M15 14.25l2.25-2.25m-2.25 2.25l-2.25-2.25m2.25 2.25l2.25 2.25M15 14.25l-2.25 2.25M15 14.25l2.25 2.25m-2.25-2.25L11.25 12m2.25 2.25l2.25-2.25" /></svg></TechIcon>
                        <TechIcon label="Tableau"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg></TechIcon>
                        <TechIcon label="Power BI"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.5m1-1.5l1 1.5m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.5-1.5l.5-1.5m9-3l-3-3m0 0l-3 3m3-3v12" /></svg></TechIcon>
                        <TechIcon label="Git"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg></TechIcon>
                        <TechIcon label="Spark"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.4-1.4l-1.188-.648.648-1.188a2.25 2.25 0 011.4-1.4l1.188-.648-.648 1.188a2.25 2.25 0 01-1.4 1.4l-1.188.648 1.188.648a2.25 2.25 0 011.4 1.4l.648 1.188z" /></svg></TechIcon>
                        <TechIcon label="Hadoop"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M21.75 9V5.25A2.25 2.25 0 0019.5 3h-15A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V15m-3 0l-3.262 3.262M21.75 9l-6.478 3.488" /></svg></TechIcon>
                        <TechIcon label="NoSQL"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.003 16.556 17.25 12 17.25s-8.25-1.247-8.25-2.625v-3.75" /></svg></TechIcon>
                        <TechIcon label="Shell Scripting"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg></TechIcon>
                        <TechIcon label="ETL Concepts"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662v1.5a4.5 4.5 0 004.5 4.5h3.75a4.5 4.5 0 004.5-4.5v-1.5z" /></svg></TechIcon>
                        <TechIcon label="Deep Learning"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H8.25a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25z" /></svg></TechIcon>
                    </div>
                </section>

                {/* --- Contact Section --- */}
                <section id="contact" className="py-20 text-center">
                    <h2 className="text-4xl font-bold text-center mb-6">Get In Touch</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
                    </p>
                    <a href="mailto:cfcskanda11@gmail.com" className="inline-block bg-indigo-600 text-white font-bold text-xl px-10 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                        Say Hello
                    </a>
                </section>

            </main>

            {/* --- Footer --- */}
            <footer className="border-t border-gray-700/50 py-8">
                <div className="container mx-auto px-6 text-center text-gray-400">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="https://www.linkedin.com/in/skanda-prasad11/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-300">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                        </a>
                    </div>
                    <p>&copy; 2024 MS Skanda. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
