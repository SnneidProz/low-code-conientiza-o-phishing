import React from 'react';
import { Smartphone, ArrowLeft, QrCode, Sparkles } from 'lucide-react';

interface FlyerProps {
  onBack: () => void;
}

export const Flyer: React.FC<FlyerProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-8">
      {/* Navigation */}
      <div className="w-full max-w-md px-4 mb-4">
        <button 
          onClick={onBack}
          className="flex items-center text-white hover:text-proz-orange transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Voltar para o App
        </button>
      </div>

      {/* FLYER CONTAINER - A4-ish Ratio */}
      <div className="bg-gradient-to-br from-proz-dark via-proz-primary to-purple-900 w-full max-w-md aspect-[1/1.414] shadow-2xl overflow-hidden relative flex flex-col text-white print:shadow-none">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-proz-orange rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-8 items-center text-center">
          
          {/* Header */}
          <div className="mt-4 mb-2">
            <span className="inline-flex items-center gap-1 bg-white text-proz-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3" /> Fim de Ano Premiado
            </span>
          </div>

          <h1 className="text-4xl font-black leading-none uppercase italic tracking-tighter mb-2">
            Ano Novo... <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-proz-orange to-yellow-400">IPHONE NOVO!</span>
          </h1>

          <p className="text-purple-200 text-sm mb-8 font-medium max-w-[90%]">
            O Natal está chegando! Aproveite as férias registrando cada momento com um iPhone 16 novinho.
          </p>

          {/* Main Prize Visual */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-proz-orange blur-xl opacity-50 rounded-full animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl transform rotate-3 transition-transform duration-700 hover:rotate-0">
              <Smartphone className="w-24 h-24 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" strokeWidth={1} />
              <div className="absolute -bottom-4 -right-4 bg-proz-orange text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg transform rotate-12">
                Presentão de Natal
              </div>
            </div>
          </div>

          {/* Call to Action Text */}
          <div className="space-y-1 mb-auto">
            <h2 className="text-2xl font-bold">Comece o ano ganhando</h2>
            <p className="text-sm text-purple-100">Escaneie o QR Code abaixo e <br/> garanta sua participação agora.</p>
          </div>

          {/* QR Code Placeholder */}
          <div className="mt-4 mb-8 bg-white p-4 rounded-xl shadow-2xl relative">
            <div className="w-32 h-32 border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-gray-400">
              <QrCode className="w-8 h-8 mb-2 opacity-50" />
              <span className="text-[10px] font-bold text-center uppercase">Cole o QR Code<br/>Aqui</span>
            </div>
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-4 border-l-4 border-proz-orange"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-4 border-r-4 border-proz-orange"></div>
          </div>

          {/* Footer */}
          <div className="w-full border-t border-white/10 pt-4 mt-2">
            <p className="text-[10px] text-purple-300 uppercase tracking-widest">
              Promoção Exclusiva para Alunos Proz
            </p>
            <p className="text-[8px] text-purple-400 mt-1">
              Sorteio válido para o período de festas. Imagens ilustrativas.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-gray-500 text-sm">
        Tire um print ou imprima este flyer para divulgar a campanha.
      </div>
    </div>
  );
};