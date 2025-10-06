'use client'

import { useState } from 'react'
import { X, Download, ChevronLeft, ChevronRight } from 'lucide-react'

interface EbookViewerProps {
  isOpen: boolean
  onClose: () => void
}

const ebookContent = [
  {
    title: "Capa",
    content: (
      <div className="text-center py-16 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 text-white min-h-screen flex flex-col justify-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">✨</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Meditação da<br />Riqueza e Abundância
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            "A energia que você emite é a mesma que atrai."
          </p>
        </div>
        <div className="text-lg opacity-80">
          Ative o fluxo da prosperidade e desperte o poder vibracional que já existe dentro de você.
        </div>
      </div>
    )
  },
  {
    title: "Introdução",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-amber-600 mb-6 flex items-center">
          📘 Introdução – A Riqueza Começa Dentro
        </h2>
        
        <p className="text-lg leading-relaxed mb-6">
          A verdadeira prosperidade não nasce do esforço externo, mas da vibração interna.
          Cada pensamento, emoção e intenção é uma semente energética plantada no campo do universo.
          A forma como você pensa e sente sobre dinheiro, amor e sucesso define o que atrai para si.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Este ebook é um convite para reconectar-se com o poder da sua mente e da sua energia, 
          e assim alinhar-se ao fluxo natural da abundância.
        </p>

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-400 my-8">
          <p className="text-lg leading-relaxed italic">
            Aqui, você vai aprender práticas simples e poderosas de meditação, afirmações e 
            visualização que transformam sua vibração — e, consequentemente, sua realidade.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Capítulo 1",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-purple-600 mb-6 flex items-center">
          💫 Capítulo 1 – Tudo é Energia
        </h2>
        
        <p className="text-lg leading-relaxed mb-6">
          Tudo o que existe vibra. O universo inteiro responde à frequência que você emite — 
          e não apenas às palavras que pronuncia.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Quando você pensa com medo, escassez ou dúvida, envia uma vibração de falta.
          Mas quando vibra em amor, confiança e gratidão, ativa o campo da abundância.
        </p>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-xl text-center my-8">
          <p className="text-2xl font-bold text-purple-700 italic">
            "Você não atrai o que quer. Você atrai o que você é."
          </p>
        </div>

        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 my-8">
          <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center">
            🌿 Prática de percepção energética:
          </h3>
          <ul className="space-y-3 text-lg">
            <li>• Feche os olhos por 1 minuto e observe seus pensamentos.</li>
            <li>• Sinta a energia deles — leve ou pesada?</li>
            <li>• Inspire profundamente e imagine que a energia densa se dissolve em luz dourada.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Capítulo 2",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-emerald-600 mb-6 flex items-center">
          💎 Capítulo 2 – Curando a Relação com o Dinheiro
        </h2>
        
        <p className="text-lg leading-relaxed mb-6">
          O dinheiro é apenas energia em forma material. Se você o teme ou o rejeita, bloqueia o fluxo.
          Se o abençoa e o valoriza, ele flui em sua direção.
        </p>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 my-8">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Pergunte-se:</h3>
          <ul className="space-y-3 text-lg">
            <li>• Eu acredito que mereço ser próspero(a)?</li>
            <li>• Quando vejo alguém rico, sinto inspiração ou inveja?</li>
            <li>• Eu celebro minhas conquistas, mesmo as pequenas?</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200 my-8">
          <h3 className="text-xl font-bold text-amber-700 mb-4 flex items-center">
            ✨ Exercício de limpeza vibracional:
          </h3>
          <p className="text-lg mb-4">Escreva três frases e repita todos os dias:</p>
          <div className="space-y-3">
            <p className="bg-white p-4 rounded-lg italic text-amber-800">
              "Eu mereço riqueza porque ela amplia meu impacto no mundo."
            </p>
            <p className="bg-white p-4 rounded-lg italic text-amber-800">
              "O dinheiro vem até mim de formas esperadas e inesperadas."
            </p>
            <p className="bg-white p-4 rounded-lg italic text-amber-800">
              "Eu abençoo a prosperidade em mim e nos outros."
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Capítulo 3",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center">
          🧘 Capítulo 3 – A Meditação da Riqueza
        </h2>
        
        <p className="text-lg leading-relaxed mb-6">
          Esta é a prática central deste ebook. Use-a diariamente, preferencialmente pela manhã ou antes de dormir.
        </p>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200 my-8">
          <h3 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center">
            🪶 Roteiro da Meditação Guiada (10 minutos):
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-xl font-bold text-indigo-600 mb-3">Respiração (1 min)</h4>
              <p>Inspire profundamente e solte lentamente. Sinta o ar como energia de vida que te renova.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-xl font-bold text-purple-600 mb-3">Silêncio mental (2 min)</h4>
              <p>Observe seus pensamentos e deixe-os fluir sem apego.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-xl font-bold text-amber-600 mb-3">Visualização (4 min)</h4>
              <p>Imagine uma luz dourada descendo sobre sua cabeça e preenchendo seu corpo. 
              Essa luz é a energia da riqueza, limpando bloqueios e abrindo caminhos.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-xl font-bold text-emerald-600 mb-3">Afirmações vibracionais (2 min)</h4>
              <p className="mb-3">Repita mentalmente:</p>
              <div className="space-y-2 italic">
                <p>"Eu sou digno(a) de toda abundância do universo."</p>
                <p>"A riqueza flui para mim com facilidade e alegria."</p>
                <p>"Eu confio no fluxo divino da prosperidade."</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="text-xl font-bold text-pink-600 mb-3">Encerramento (1 min)</h4>
              <p>Sinta gratidão. Diga mentalmente: "Eu confio. Eu recebo. Eu manifesto."</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Capítulo 4",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-purple-600 mb-6 flex items-center">
          🌠 Capítulo 4 – Os 5 Tipos de Energia de Manifestação
        </h2>
        
        <div className="grid gap-6 my-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-700 mb-3 flex items-center">
              💎 Mente Próspera
            </h3>
            <p className="text-lg mb-3">Foco, clareza e poder de decisão. Manifesta quando acredita em si.</p>
            <p className="italic text-blue-800 bg-white p-3 rounded-lg">
              "Tudo o que toco prospera, porque minha mente cria abundância."
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-3 flex items-center">
              🌿 Alma Criadora
            </h3>
            <p className="text-lg mb-3">Energia criativa e emocional. Manifesta através da imaginação.</p>
            <p className="italic text-green-800 bg-white p-3 rounded-lg">
              "Minha emoção é a ponte entre o sonho e a realidade."
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-200">
            <h3 className="text-2xl font-bold text-pink-700 mb-3 flex items-center">
              ❤️ Coração Magnético
            </h3>
            <p className="text-lg mb-3">Atrai riqueza por meio do amor e da gratidão.</p>
            <p className="italic text-pink-800 bg-white p-3 rounded-lg">
              "Eu mereço receber tanto quanto dou."
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
            <h3 className="text-2xl font-bold text-purple-700 mb-3 flex items-center">
              🌙 Espírito Intuitivo
            </h3>
            <p className="text-lg mb-3">Flui com a vida e confia no invisível.</p>
            <p className="italic text-purple-800 bg-white p-3 rounded-lg">
              "O universo me guia em direção à prosperidade."
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-2xl font-bold text-yellow-700 mb-3 flex items-center">
              ⚡ Força Visionária
            </h3>
            <p className="text-lg mb-3">Transforma ideias em ação e inspira outros.</p>
            <p className="italic text-yellow-800 bg-white p-3 rounded-lg">
              "Eu ajo com propósito e abundância me acompanha."
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Capítulo 5",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-emerald-600 mb-6 flex items-center">
          🌻 Capítulo 5 – Desafio dos 7 Dias da Prosperidade
        </h2>
        
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-xl border border-emerald-200 my-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-emerald-200">
                  <th className="text-left py-3 px-4 font-bold text-emerald-700">Dia</th>
                  <th className="text-left py-3 px-4 font-bold text-emerald-700">Prática</th>
                  <th className="text-left py-3 px-4 font-bold text-emerald-700">Objetivo</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="bg-white rounded-lg">
                  <td className="py-4 px-4 font-bold text-emerald-600">1</td>
                  <td className="py-4 px-4">Gratidão por 3 coisas simples</td>
                  <td className="py-4 px-4">Abrir o campo da abundância</td>
                </tr>
                <tr className="bg-emerald-25">
                  <td className="py-4 px-4 font-bold text-emerald-600">2</td>
                  <td className="py-4 px-4">Visualizar sua vida próspera</td>
                  <td className="py-4 px-4">Criar clareza vibracional</td>
                </tr>
                <tr className="bg-white rounded-lg">
                  <td className="py-4 px-4 font-bold text-emerald-600">3</td>
                  <td className="py-4 px-4">Tomar uma ação inspirada</td>
                  <td className="py-4 px-4">Mostrar fé em movimento</td>
                </tr>
                <tr className="bg-emerald-25">
                  <td className="py-4 px-4 font-bold text-emerald-600">4</td>
                  <td className="py-4 px-4">Fazer uma doação ou gesto de bondade</td>
                  <td className="py-4 px-4">Circular energia</td>
                </tr>
                <tr className="bg-white rounded-lg">
                  <td className="py-4 px-4 font-bold text-emerald-600">5</td>
                  <td className="py-4 px-4">Repetir 5 afirmações de riqueza</td>
                  <td className="py-4 px-4">Reprogramar o subconsciente</td>
                </tr>
                <tr className="bg-emerald-25">
                  <td className="py-4 px-4 font-bold text-emerald-600">6</td>
                  <td className="py-4 px-4">Silenciar por 5 minutos</td>
                  <td className="py-4 px-4">Conectar-se com o fluxo</td>
                </tr>
                <tr className="bg-white rounded-lg">
                  <td className="py-4 px-4 font-bold text-emerald-600">7</td>
                  <td className="py-4 px-4">Celebrar suas conquistas</td>
                  <td className="py-4 px-4">Consolidar vibração positiva</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-8 rounded-xl text-center my-8">
          <p className="text-2xl font-bold text-amber-700 italic">
            "A abundância não é conquistada. Ela é sintonizada."
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Capítulo 6",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-rainbow-600 mb-6 flex items-center">
          🌈 Capítulo 6 – Portal da Abundância (Visualização Final)
        </h2>
        
        <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-amber-100 p-8 rounded-xl border border-purple-200 my-8">
          <p className="text-lg leading-relaxed mb-6">
            Feche os olhos e imagine uma porta dourada diante de você.
            No topo dela está escrito:
          </p>

          <div className="bg-gradient-to-r from-amber-200 to-yellow-200 p-6 rounded-xl text-center my-6">
            <p className="text-2xl font-bold text-amber-800 italic">
              "Eu sou o criador da minha realidade."
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Abra lentamente essa porta e veja a vida que deseja:
            Riqueza, liberdade, amor, saúde e alegria.
            Entre nessa cena e sinta como se tudo já fosse real.
            Grave essa sensação dentro de você.
          </p>

          <div className="bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-xl text-center my-6">
            <p className="text-2xl font-bold text-purple-800 italic">
              "O que eu vejo dentro de mim, o universo manifesta fora de mim."
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Conclusão",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 flex items-center">
          🌕 Conclusão – O Estado da Abundância
        </h2>
        
        <p className="text-lg leading-relaxed mb-6">
          A riqueza verdadeira é um estado de consciência.
          Quanto mais você vibra em gratidão, amor e confiança, mais o universo responde 
          com oportunidades e milagres.
        </p>

        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl text-center my-8">
          <p className="text-2xl font-bold text-indigo-700 italic leading-relaxed">
            "A riqueza é a vibração do merecimento.<br />
            E hoje, você já vibra na frequência da abundância."
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-200 my-8">
          <h3 className="text-2xl font-bold text-amber-700 mb-6 flex items-center">
            🚀 Continue Sua Jornada
          </h3>
          
          <p className="text-lg mb-6">
            🌟 Continue elevando sua vibração com o Plano Premium do Manifesto Diário
          </p>
          
          <p className="text-lg mb-6">
            Receba novas meditações semanais, afirmações diárias e relatórios energéticos 
            por apenas R$4,90/mês.
          </p>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
              Ativar minha vibração premium 🔮
            </button>
          </div>
        </div>
      </div>
    )
  }
]

export default function EbookViewer({ isOpen, onClose }: EbookViewerProps) {
  const [currentPage, setCurrentPage] = useState(0)

  if (!isOpen) return null

  const handleDownload = () => {
    // Criar conteúdo HTML completo do ebook
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Meditação da Riqueza e Abundância</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
          .page { page-break-after: always; margin-bottom: 50px; }
          .title { font-size: 2.5em; text-align: center; color: #d97706; margin-bottom: 20px; }
          .subtitle { font-size: 1.2em; text-align: center; color: #666; margin-bottom: 40px; }
          .chapter { font-size: 1.8em; color: #7c3aed; margin: 30px 0 20px 0; }
          .highlight { background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 20px; border-radius: 10px; margin: 20px 0; }
          .quote { font-style: italic; font-size: 1.3em; text-align: center; color: #7c3aed; margin: 30px 0; }
        </style>
      </head>
      <body>
        ${ebookContent.map(page => `
          <div class="page">
            ${page.content}
          </div>
        `).join('')}
      </body>
      </html>
    `

    const blob = new Blob([htmlContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Meditacao_da_Riqueza_e_Abundancia.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Meditação da Riqueza e Abundância
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {ebookContent[currentPage].content}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {currentPage + 1} de {ebookContent.length}
            </span>
            <div className="flex gap-1">
              {ebookContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPage ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentPage(Math.min(ebookContent.length - 1, currentPage + 1))}
            disabled={currentPage === ebookContent.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próximo
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}