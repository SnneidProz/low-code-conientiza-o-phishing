import React from 'react';
import { AlertTriangle, Lock, EyeOff, ShieldAlert, RefreshCw, XCircle, Users, Mail, MapPin, Calendar, KeyRound, ShieldCheck } from 'lucide-react';
import { UserData } from '../types';
import { censorCPF } from '../utils/formatters';

interface EducationPageProps {
  data: UserData;
  onReset: () => void;
  clickCount: number;
}

export const EducationPage: React.FC<EducationPageProps> = ({ data, onReset, clickCount }) => {
  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-red-600 animate-in fade-in zoom-in duration-500">
        
        {/* Header Friendly Warning */}
        <div className="bg-red-600 p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg">
            <ShieldAlert className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-2 leading-tight">
            HEY, VOCÊ QUASE CAIU EM UM GOLPE! 😲
          </h1>
          <p className="text-red-100 font-medium text-lg max-w-xl mx-auto mt-4">
            Mas fique tranquilo! Isso foi apenas uma simulação de <strong>Phishing</strong> (roubo de dados) criada como <strong>Experimento Social</strong> pelos alunos de <strong>Desenvolvimento de Sistemas (Manhã)</strong> da Proz.
          </p>
        </div>

        {/* The Reality Check */}
        <div className="p-8 md:p-12">
          <div className="mb-8 bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-inner">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
              <EyeOff className="w-5 h-5 text-red-600" />
              Se fosse um ataque real, eles teriam seus dados:
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm font-mono text-gray-600">
              <div className="bg-white p-3 rounded border border-gray-200">
                <span className="block text-xs text-gray-400 uppercase">Nome</span>
                <span className="font-bold text-gray-900">{data.fullName}</span>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <span className="block text-xs text-gray-400 uppercase">CPF</span>
                <span className="font-bold text-gray-900 tracking-wider">{censorCPF(data.cpf)}</span>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <span className="block text-xs text-gray-400 uppercase">Telefone</span>
                <span className="font-bold text-gray-900">{data.phone}</span>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <span className="block text-xs text-gray-400 uppercase">Email</span>
                <span className="font-bold text-gray-900">{data.email}</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-red-600 font-bold text-center">
              * Fique tranquilo: Nesta simulação, seus dados NÃO foram salvos em nenhum banco de dados.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="mb-8 p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-orange-800 font-semibold">Participantes do Experimento</p>
                <p className="text-xs text-orange-600">Pessoas que clicaram no botão até agora</p>
              </div>
            </div>
            <div className="text-2xl font-black text-orange-600">
              {clickCount}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">O que aprendemos com isso?</h3>
            <p className="text-gray-600">
              Sites falsos usam gatilhos como <strong>urgência</strong> ("Últimas horas") e <strong>prêmios caros</strong> (iPhone 16) para fazer você agir sem pensar.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="flex gap-4">
                <div className="mt-1">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Roubo de Identidade</h4>
                  <p className="text-gray-600 text-sm">Com CPF e Nome, golpistas podem tentar abrir contas ou pedir cartões em seu nome.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Lock className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Engenharia Social</h4>
                  <p className="text-gray-600 text-sm">Eles podem usar seu telefone para se passar por bancos e confirmar esses dados para passar credibilidade.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Security Tips */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-red-600" />
              Proteja também estes dados:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm flex gap-3 hover:shadow-md transition">
                <div className="bg-red-100 p-2 rounded-lg h-fit">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">E-mail</h4>
                  <p className="text-xs text-gray-600 mt-1">É a chave para recuperar senhas. Ative a autenticação em duas etapas (2FA) e nunca use a mesma senha do e-mail em outros sites.</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm flex gap-3 hover:shadow-md transition">
                <div className="bg-red-100 p-2 rounded-lg h-fit">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Endereço Residencial</h4>
                  <p className="text-xs text-gray-600 mt-1">Evite expor em redes sociais ou cadastros duvidosos. Criminosos usam para golpes de correspondência e contas falsas, onde se passam como uma empresa confiavel, como Vivo, Net, contas de água entre muitas outras.</p>
                </div>
              </div>

              {/* Data de Nascimento */}
              <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm flex gap-3 hover:shadow-md transition">
                <div className="bg-red-100 p-2 rounded-lg h-fit">
                  <Calendar className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Data de Nascimento</h4>
                  <p className="text-xs text-gray-600 mt-1">Dado essencial para confirmar identidade em bancos. Se possível, oculte o ano de nascimento nas redes sociais.</p>
                </div>
              </div>

              {/* Senhas */}
              <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm flex gap-3 hover:shadow-md transition">
                <div className="bg-red-100 p-2 rounded-lg h-fit">
                  <KeyRound className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Senhas e Pincode</h4>
                  <p className="text-xs text-gray-600 mt-1">Nunca informe senhas por telefone ou WhatsApp. Bancos reais nunca pedem sua senha em ligações ativas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 className="text-lg font-bold text-blue-900 mb-3">Dica de Ouro da Turma:</h3>
            <ul className="list-disc list-inside space-y-2 text-blue-800 text-sm">
              <li>Sempre verifique a URL do site (endereço no navegador).</li>
              <li>Desconfie de promoções que pedem muitos dados pessoais sem motivo claro.</li>
              <li>A Proz sempre utiliza seus canais oficiais para comunicações.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button
              onClick={onReset}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-red-900 text-white rounded-full font-bold hover:bg-red-800 transition shadow-lg"
            >
              <RefreshCw className="w-4 h-4" />
              Entendi! Voltar ao início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};