"use client";

import {
  Brain,
  Code,
  Database,
  Github,
  Linkedin,
  Terminal,
} from "lucide-react";

export default function Sobre() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header/Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-6 py-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Vinicius Abreu
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Software Developer @ Celeste
            </p>
            <p className="text-lg opacity-90">
              Go • Node.js • TypeScript • Python • React
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/vinnedev"
                className="p-2 hover:text-blue-200 transition-colors"
                target="_blank"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/vs-abreu/"
                className="p-2 hover:text-blue-200 transition-colors"
                target="_blank"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
              <p>
                With 4 years of experience in software development, I bring a
                unique perspective combining my background in Law and Data
                Science. Currently pursuing a Software Engineering degree to
                further expand my technical expertise.
              </p>
              <p>
                I specialize in building robust backend services and modern web
                applications, with a focus on clean code and scalable
                architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Core Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Terminal className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Backend Development
                </h3>
                <p className="text-gray-600">
                  Go, Node.js, Python, REST APIs, Microservices
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Code className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Frontend Development
                </h3>
                <p className="text-gray-600">
                  React, TypeScript, Tailwind CSS, JavaScript
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Database className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Science</h3>
                <p className="text-gray-600">
                  Data Analysis, Python, SQL, Machine Learning
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-xl font-semibold">
                    Software Engineering
                  </h3>
                  <p className="text-gray-600">Currently Pursuing</p>
                </div>
                <Brain className="hidden md:block text-blue-600" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-xl font-semibold">Data Science</h3>
                  <p className="text-gray-600">Completed</p>
                </div>
                <Database className="hidden md:block text-blue-600" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-xl font-semibold">Law Degree</h3>
                  <p className="text-gray-600">Completed</p>
                </div>
                <Code className="hidden md:block text-blue-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-4">Let&apos;s work together</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/vinnedev"
                className="hover:text-blue-400 transition-colors"
                target="_blank"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vs-abreu/"
                className="hover:text-blue-400 transition-colors"
                target="_blank"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
