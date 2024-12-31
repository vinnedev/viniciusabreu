"use client";

import React, { useState } from "react";
import {
  Cloud,
  CheckCircle2,
  ArrowRight,
  Server,
  Shield,
  Settings,
  BookOpen,
  Video,
} from "lucide-react";

export default function Tunneling() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
  };

  const features = [
    {
      icon: <Server className="w-6 h-6 text-green-400" />,
      text: "Configure um servidor em casa acessível de qualquer lugar",
    },
    {
      icon: <Cloud className="w-6 h-6 text-green-400" />,
      text: "Técnicas de tunneling para contornar IP fixo",
    },
    {
      icon: <Settings className="w-6 h-6 text-green-400" />,
      text: "Ferramentas e softwares para gerenciamento em nuvem",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      text: "Práticas avançadas de segurança do sistema",
    },
  ];

  const benefits = [
    "Economia: use equipamentos que você já tem",
    "Acessibilidade: funciona sem IP fixo",
    "Segurança: controle total sobre seus dados",
    "Conhecimento prático e aplicável",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
              Monte sua Própria Plataforma de Serviços em Nuvem
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              sem IP Fixo ou Portas Abertas
            </p>

            {/* Email Capture Form */}
            <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
              <h2 className="text-xl font-bold mb-4">
                Preço Promocional: R$5,00 + taxas
              </h2>
              <p className="text-sm text-gray-400 mb-4">
                Não tem condições de pagar? Entre em contato por email para
                solicitar isenção.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Quero Aproveitar Esta Oportunidade</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Description */}
        <div className="prose prose-invert max-w-none mb-16">
          <p className="text-lg text-gray-300">
            Descubra como transformar qualquer espaço em uma central poderosa de
            serviços em nuvem! Neste curso completo, você aprenderá passo a
            passo como configurar sua própria plataforma de serviços em nuvem
            sem precisar de IP fixo ou abrir portas no roteador.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-gray-800 p-6 rounded-lg"
            >
              {feature.icon}
              <p className="text-gray-300">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-green-400">
            O que está incluso:
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <BookOpen className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">PDF exclusivo</h3>
                <p className="text-gray-400">
                  &quot;Guia Completo para Configurar sua Cloud Caseira&quot;
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Video className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Vídeo aula detalhada</h3>
                <p className="text-gray-400">
                  Tutoriais práticos e explicações simples, sem enrolação
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-green-400">
            Benefícios:
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Para quem é este curso:
          </h2>
          <p className="text-gray-300">
            Ideal para entusiastas de tecnologia, pequenos empreendedores,
            programadores e qualquer pessoa interessada em criar sua própria
            infraestrutura de nuvem sem complicações.
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Leve seu conhecimento de tecnologia para o próximo nível!
          </h2>
          <button
            onClick={() =>
              document
                .querySelector("form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Começar Agora
          </button>
        </div>
      </div>
    </div>
  );
}
