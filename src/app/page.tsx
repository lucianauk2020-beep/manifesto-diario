'use client'

import { useState } from 'react'
import { Sparkles, Star, Heart, Moon, Zap, ArrowRight, Check, Download, Play, Users, Award, Clock, Shield, CreditCard, Lock, Smartphone, Globe } from 'lucide-react'
import EbookViewer from '@/components/EbookViewer'

const questions = [
  {
    id: 1,
    question: "Como você se sente quando pensa em dinheiro?",
    options: [
      { text: "Ansioso(a) e preocupado(a)", type: "heart", points: 1 },
      { text: "Confiante e otimista", type: "mind", points: 3 },
      { text: "Neutro, é só uma ferramenta", type: "spirit", points: 2 },
      { text: "Empolgado(a) com as possibilidades", type: "force", points: 3 }
    ]
  },
  {
    id: 2,
    question: "Qual frase mais ressoa com você?",
    options: [
      { text: "Eu mereço abundância", type: "heart", points: 3 },
      { text: "Eu crio minha própria sorte", type: "mind", points: 3 },
      { text: "O universo conspira a meu favor", type: "spirit", points: 3 },
      { text: "Eu transformo sonhos em realidade", type: "soul", points: 3 }
    ]
  },
  {
    id: 3,
    question: "Como você toma decisões importantes?",
    options: [
      { text: "Analiso todos os dados e fatos", type: "mind", points: 3 },
      { text: "Sigo minha intuição", type: "spirit", points: 3 },
      { text: "Consulto pessoas que amo", type: "heart", points: 2 },
      { text: "Imagino o melhor cenário possível", type: "soul", points: 2 }
    ]
  },
  {
    id: 4,
    question: "O que mais te motiva no dia a dia?",
    options: [
      { text: "Alcançar meus objetivos", type: "mind", points: 3 },
      { text: "Ajudar outras pessoas", type: "heart", points: 3 },
      { text: "Descobrir coisas novas", type: "spirit", points: 2 },
      { text: "Expressar minha criatividade", type: "soul", points: 3 }
    ]
  },
  {
    id: 5,
    question: "Como você lida com desafios?",
    options: [
      { text: "Faço um plano detalhado", type: "mind", points: 3 },
      { text: "Confio que tudo vai dar certo", type: "spirit", points: 3 },
      { text: "Busco apoio emocional", type: "heart", points: 2 },
      { text: "Vejo como uma oportunidade de crescer", type: "force", points: 3 }
    ]
  },
  {
    id: 6,
    question: "Qual ambiente te deixa mais inspirado(a)?",
    options: [
      { text: "Um escritório organizado", type: "mind", points: 2 },
      { text: "A natureza", type: "spirit", points: 3 },
      { text: "Rodeado(a) de pessoas queridas", type: "heart", points: 3 },
      { text: "Um ateliê ou espaço criativo", type: "soul", points: 3 }
    ]
  },
  {
    id: 7,
    question: "Como você prefere aprender coisas novas?",
    options: [
      { text: "Lendo e estudando", type: "mind", points: 3 },
      { text: "Experimentando na prática", type: "force", points: 3 },
      { text: "Conversando com outros", type: "heart", points: 2 },
      { text: "Meditando e refletindo", type: "spirit", points: 3 }
    ]
  },
  {
    id: 8,
    question: "O que você faz quando se sente perdido(a)?",
    options: [
      { text: "Faço uma lista de prós e contras", type: "mind", points: 3 },
      { text: "Medito ou fico em silêncio", type: "spirit", points: 3 },
      { text: "Converso com alguém de confiança", type: "heart", points: 3 },
      { text: "Faço algo criativo", type: "soul", points: 2 }
    ]
  },
  {
    id: 9,
    question: "Qual é sua maior força?",
    options: [
      { text: "Minha determinação", type: "mind", points: 3 },
      { text: "Minha intuição", type: "spirit", points: 3 },
      { text: "Minha empatia", type: "heart", points: 3 },
      { text: "Minha criatividade", type: "soul", points: 3 }
    ]
  },
  {
    id: 10,
    question: "Como você se conecta com sua espiritualidade?",
    options: [
      { text: "Através da gratidão diária", type: "heart", points: 3 },
      { text: "Definindo e alcançando metas", type: "mind", points: 2 },
      { text: "Meditação e contemplação", type: "spirit", points: 3 },
      { text: "Arte e expressão criativa", type: "soul", points: 3 }
    ]
  },
  {
    id: 11,
    question: "O que mais valoriza em um relacionamento?",
    options: [
      { text: "Honestidade e transparência", type: "mind", points: 2 },
      { text: "Conexão emocional profunda", type: "heart", points: 3 },
      { text: "Crescimento mútuo", type: "spirit", points: 3 },
      { text: "Compartilhar sonhos e visões", type: "soul", points: 2 }
    ]
  },
  {
    id: 12,
    question: "Como você manifesta seus desejos?",
    options: [
      { text: "Fazendo planos concretos", type: "mind", points: 3 },
      { text: "Visualizando e sentindo", type: "soul", points: 3 },
      { text: "Agindo com o coração", type: "heart", points: 2 },
      { text: "Confiando no timing divino", type: "spirit", points: 3 }
    ]
  },
  {
    id: 13,
    question: "Qual palavra mais te representa?",
    options: [
      { text: "Determinação", type: "mind", points: 3 },
      { text: "Amor", type: "heart", points: 3 },
      { text: "Sabedoria", type: "spirit", points: 3 },
      { text: "Criatividade", type: "soul", points: 3 }
    ]
  },
  {
    id: 14,
    question: "Como você recarrega suas energias?",
    options: [
      { text: "Organizando minha vida", type: "mind", points: 2 },
      { text: "Passando tempo sozinho(a)", type: "spirit", points: 3 },
      { text: "Estando com pessoas amadas", type: "heart", points: 3 },
      { text: "Fazendo algo que amo", type: "soul", points: 3 }
    ]
  },
  {
    id: 15,
    question: "Qual é seu maior sonho?",
    options: [
      { text: "Ter sucesso profissional", type: "mind", points: 2 },
      { text: "Viver com propósito", type: "spirit", points: 3 },
      { text: "Ser amado(a) e amar", type: "heart", points: 3 },
      { text: "Deixar um legado criativo", type: "soul", points: 3 }
    ]
  },
  {
    id: 16,
    question: "Como você lida com mudanças?",
    options: [
      { text: "Planejo cada passo", type: "mind", points: 3 },
      { text: "Fluo com naturalidade", type: "spirit", points: 3 },
      { text: "Busco apoio emocional", type: "heart", points: 2 },
      { text: "Vejo como nova inspiração", type: "soul", points: 2 }
    ]
  },
  {
    id: 17,
    question: "O que te traz mais alegria?",
    options: [
      { text: "Conquistar objetivos", type: "mind", points: 2 },
      { text: "Momentos de paz interior", type: "spirit", points: 3 },
      { text: "Conexões genuínas", type: "heart", points: 3 },
      { text: "Criar algo único", type: "soul", points: 3 }
    ]
  },
  {
    id: 18,
    question: "Como você se vê daqui a 5 anos?",
    options: [
      { text: "Realizado(a) profissionalmente", type: "mind", points: 3 },
      { text: "Em paz e equilíbrio", type: "spirit", points: 3 },
      { text: "Cercado(a) de amor", type: "heart", points: 3 },
      { text: "Vivendo minha arte", type: "soul", points: 3 }
    ]
  },
  {
    id: 19,
    question: "Qual é sua forma favorita de gratidão?",
    options: [
      { text: "Reconhecer minhas conquistas", type: "mind", points: 2 },
      { text: "Agradecer em silêncio", type: "spirit", points: 3 },
      { text: "Expressar amor aos outros", type: "heart", points: 3 },
      { text: "Criar algo belo", type: "soul", points: 2 }
    ]
  },
  {
    id: 20,
    question: "O que mais te inspira?",
    options: [
      { text: "Histórias de superação", type: "force", points: 3 },
      { text: "A beleza da natureza", type: "spirit", points: 3 },
      { text: "Atos de bondade", type: "heart", points: 3 },
      { text: "Arte e criatividade", type: "soul", points: 3 }
    ]
  },
  {
    id: 21,
    question: "Qual é sua maior motivação para crescer?",
    options: [
      { text: "Alcançar independência financeira", type: "mind", points: 3 },
      { text: "Encontrar meu propósito de vida", type: "spirit", points: 3 },
      { text: "Construir relacionamentos profundos", type: "heart", points: 3 },
      { text: "Expressar minha autenticidade", type: "soul", points: 3 }
    ]
  },
  {
    id: 22,
    question: "Como você define sucesso?",
    options: [
      { text: "Atingir metas e objetivos", type: "mind", points: 3 },
      { text: "Viver em harmonia comigo mesmo", type: "spirit", points: 3 },
      { text: "Fazer diferença na vida dos outros", type: "heart", points: 3 },
      { text: "Criar algo que me representa", type: "soul", points: 3 }
    ]
  },
  {
    id: 23,
    question: "Qual é sua reação natural ao estresse?",
    options: [
      { text: "Organizo e planejo soluções", type: "mind", points: 3 },
      { text: "Respiro fundo e medito", type: "spirit", points: 3 },
      { text: "Converso com alguém querido", type: "heart", points: 2 },
      { text: "Faço algo criativo para relaxar", type: "soul", points: 2 }
    ]
  },
  {
    id: 24,
    question: "O que mais valoriza em si mesmo?",
    options: [
      { text: "Minha capacidade de resolver problemas", type: "mind", points: 3 },
      { text: "Minha sabedoria interior", type: "spirit", points: 3 },
      { text: "Minha capacidade de amar", type: "heart", points: 3 },
      { text: "Minha originalidade", type: "soul", points: 3 }
    ]
  },
  {
    id: 25,
    question: "Como você prefere celebrar conquistas?",
    options: [
      { text: "Definindo a próxima meta", type: "mind", points: 2 },
      { text: "Em silêncio e gratidão", type: "spirit", points: 3 },
      { text: "Compartilhando com pessoas queridas", type: "heart", points: 3 },
      { text: "Criando algo especial", type: "soul", points: 3 }
    ]
  },
  {
    id: 26,
    question: "Qual é sua forma favorita de aprendizado?",
    options: [
      { text: "Cursos estruturados e livros", type: "mind", points: 3 },
      { text: "Experiências e reflexão", type: "spirit", points: 3 },
      { text: "Conversas e trocas", type: "heart", points: 2 },
      { text: "Experimentação criativa", type: "soul", points: 3 }
    ]
  },
  {
    id: 27,
    question: "O que te conecta com sua essência?",
    options: [
      { text: "Momentos de clareza mental", type: "mind", points: 3 },
      { text: "Conexão com o sagrado", type: "spirit", points: 3 },
      { text: "Momentos de amor puro", type: "heart", points: 3 },
      { text: "Expressão da minha criatividade", type: "soul", points: 3 }
    ]
  },
  {
    id: 28,
    question: "Como você lida com a incerteza?",
    options: [
      { text: "Busco informações e faço planos", type: "mind", points: 3 },
      { text: "Confio no fluxo da vida", type: "spirit", points: 3 },
      { text: "Busco apoio emocional", type: "heart", points: 2 },
      { text: "Vejo como oportunidade criativa", type: "soul", points: 2 }
    ]
  },
  {
    id: 29,
    question: "Qual é sua maior fonte de energia?",
    options: [
      { text: "Conquistar objetivos", type: "mind", points: 3 },
      { text: "Momentos de paz e silêncio", type: "spirit", points: 3 },
      { text: "Conexões humanas genuínas", type: "heart", points: 3 },
      { text: "Criar e inovar", type: "soul", points: 3 }
    ]
  },
  {
    id: 30,
    question: "Como você imagina sua vida ideal?",
    options: [
      { text: "Próspera e bem estruturada", type: "mind", points: 3 },
      { text: "Em harmonia e propósito", type: "spirit", points: 3 },
      { text: "Cheia de amor e conexões", type: "heart", points: 3 },
      { text: "Criativa e autêntica", type: "soul", points: 3 }
    ]
  }
]

const vibrationalTypes = {
  mind: {
    name: "Mente Próspera",
    icon: "💎",
    description: "Você é uma pessoa focada, determinada e estratégica. Sua energia de manifestação vem da clareza mental e do poder de decisão.",
    traits: ["Focado(a) em objetivos", "Estratégico(a)", "Determinado(a)", "Analítico(a)"],
    manifestation: "Você manifesta através da ação planejada e da visualização clara dos seus objetivos.",
    affirmation: "Tudo o que toco prospera, porque minha mente cria abundância."
  },
  soul: {
    name: "Alma Criadora",
    icon: "🌿",
    description: "Sua energia vibracional flui através da criatividade e da imaginação. Você manifesta beleza e inspiração no mundo.",
    traits: ["Criativo(a)", "Imaginativo(a)", "Inspirador(a)", "Artístico(a)"],
    manifestation: "Você manifesta através da expressão criativa e da visualização emocional.",
    affirmation: "Minha criatividade é um canal divino de abundância e beleza."
  },
  heart: {
    name: "Coração Magnético",
    icon: "❤️",
    description: "Você atrai abundância através do amor, gratidão e conexões genuínas. Sua energia é calorosa e acolhedora.",
    traits: ["Empático(a)", "Amoroso(a)", "Grato(a)", "Conectivo(a)"],
    manifestation: "Você manifesta através do amor incondicional e da gratidão profunda.",
    affirmation: "Eu mereço receber tanto amor e abundância quanto dou ao mundo."
  },
  spirit: {
    name: "Espírito Intuitivo",
    icon: "🌙",
    description: "Sua conexão com o universo é profunda e intuitiva. Você flui com a vida e confia no timing divino.",
    traits: ["Intuitivo(a)", "Sábio(a)", "Conectado(a)", "Confiante"],
    manifestation: "Você manifesta através da meditação, intuição e alinhamento com o fluxo universal.",
    affirmation: "O universo conspira a meu favor e me guia para a abundância."
  },
  force: {
    name: "Força Visionária",
    icon: "⚡",
    description: "Você é um(a) visionário(a) que transforma sonhos em realidade. Sua energia inspira e motiva outros.",
    traits: ["Visionário(a)", "Inspirador(a)", "Corajoso(a)", "Transformador(a)"],
    manifestation: "Você manifesta através da ação inspirada e da liderança pelo exemplo.",
    affirmation: "Eu sou um canal de transformação e abundância no mundo."
  }
}

const manifestationPlan = [
  {
    day: 1,
    title: "Gratidão Abundante",
    practice: "Liste 10 coisas pelas quais você é grato(a) hoje",
    affirmation: "Eu reconheço e celebro toda abundância em minha vida"
  },
  {
    day: 2,
    title: "Visualização Dourada",
    practice: "Medite por 10 minutos visualizando luz dourada preenchendo sua vida",
    affirmation: "Eu vejo e sinto minha vida próspera se manifestando"
  },
  {
    day: 3,
    title: "Ação Inspirada",
    practice: "Tome uma ação concreta em direção aos seus sonhos",
    affirmation: "Minhas ações estão alinhadas com minha prosperidade"
  },
  {
    day: 4,
    title: "Energia Circulante",
    practice: "Faça um gesto de generosidade ou bondade para alguém",
    affirmation: "Quanto mais dou, mais recebo em abundância"
  },
  {
    day: 5,
    title: "Reprogramação Mental",
    practice: "Repita suas afirmações pessoais 21 vezes pela manhã",
    affirmation: "Minha mente está programada para a prosperidade"
  },
  {
    day: 6,
    title: "Silêncio Sagrado",
    practice: "Passe 15 minutos em silêncio total, apenas observando",
    affirmation: "No silêncio, eu me conecto com a fonte da abundância"
  },
  {
    day: 7,
    title: "Celebração da Vida",
    practice: "Celebre todas as suas conquistas, grandes e pequenas",
    affirmation: "Eu celebro minha jornada e atraio ainda mais motivos para comemorar"
  }
]

const testimonials = [
  {
    name: "Maria Silva",
    text: "Descobri que sou uma 'Alma Criadora' e isso mudou completamente minha perspectiva sobre manifestação. Em 30 dias, consegui atrair oportunidades incríveis!",
    type: "Alma Criadora",
    rating: 5
  },
  {
    name: "João Santos",
    text: "O teste revelou que sou uma 'Mente Próspera'. As estratégias personalizadas me ajudaram a dobrar minha renda em 3 meses.",
    type: "Mente Próspera",
    rating: 5
  },
  {
    name: "Ana Costa",
    text: "Como 'Coração Magnético', aprendi a manifestar através do amor. Minha vida se transformou em todos os aspectos!",
    type: "Coração Magnético",
    rating: 5
  }
]

type Screen = 'sales' | 'form' | 'quiz' | 'preview' | 'payment' | 'result' | 'upsell'

export default function ManifestoDiario() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('sales')
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, any>>({})
  const [isProcessing, setIsProcessing] = useState(false)
  const [showEbook, setShowEbook] = useState(false)

  const handleStartQuiz = () => {
    if (formData.name && formData.email) {
      setCurrentScreen('quiz')
    }
  }

  const handleAnswer = (questionId: number, answer: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setCurrentScreen('preview')
    }
  }

  const calculateResult = () => {
    const scores = { mind: 0, soul: 0, heart: 0, spirit: 0, force: 0 }
    
    Object.values(answers).forEach((answer: any) => {
      scores[answer.type as keyof typeof scores] += answer.points
    })

    const topType = Object.entries(scores).reduce((a, b) => 
      scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores] ? a : b
    )[0] as keyof typeof vibrationalTypes

    return vibrationalTypes[topType]
  }

  const handlePayment = async () => {
    setIsProcessing(true)
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_test_123',
          successUrl: `${window.location.origin}?success=true`,
          cancelUrl: `${window.location.origin}?canceled=true`,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.url && !data.demo) {
        window.location.href = data.url
        return
      }
      
      setTimeout(() => {
        setCurrentScreen('result')
        setIsProcessing(false)
      }, 2000)
      
    } catch (error) {
      console.error('Erro no pagamento:', error)
      setTimeout(() => {
        setCurrentScreen('result')
        setIsProcessing(false)
      }, 2000)
    }
  }

  const result = calculateResult()
  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (currentScreen === 'sales') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">✨</div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Manifesto Diário
            </h1>
            <p className="text-2xl md:text-3xl text-purple-200 mb-8">
              Descubra Sua Energia de Manifestação Única
            </p>
            <p className="text-xl text-purple-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Você sabe qual energia está guiando sua vida hoje? Descubra seu tipo vibracional personalizado 
              e ative o fluxo da prosperidade com um plano feito especialmente para você.
            </p>
            
            <button
              onClick={() => setCurrentScreen('form')}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl mb-8"
            >
              Fazer Teste Gratuito Agora
            </button>
            
            <div className="flex items-center justify-center gap-6 text-purple-200">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>+50.000 pessoas</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>100% gratuito</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problema Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              Você já se sentiu assim?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">😔</div>
                <h3 className="text-xl font-bold text-white mb-4">Perdido(a) e Sem Direção</h3>
                <p className="text-purple-200">
                  Sente que está vivendo no piloto automático, sem saber qual é seu verdadeiro propósito ou como manifestar seus sonhos.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-xl font-bold text-white mb-4">Bloqueios Financeiros</h3>
                <p className="text-purple-200">
                  Por mais que se esforce, parece que a abundância sempre escapa. Você sabe que merece mais, mas não sabe como atrair.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-white mb-4">Ciclos Repetitivos</h3>
                <p className="text-purple-200">
                  Sempre os mesmos padrões, as mesmas dificuldades. Você quer quebrar o ciclo, mas não sabe por onde começar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solução Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              A Resposta Está na Sua Energia Única
            </h2>
            
            <p className="text-xl text-purple-200 mb-12 leading-relaxed">
              Cada pessoa tem um tipo vibracional único que determina como ela manifesta abundância. 
              Quando você descobre e alinha com sua energia natural, tudo flui com mais facilidade.
            </p>
            
            <div className="grid md:grid-cols-5 gap-6 mb-16">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">💎</div>
                <h3 className="text-lg font-bold text-white mb-2">Mente Próspera</h3>
                <p className="text-purple-200 text-sm">Estratégico e focado</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🌿</div>
                <h3 className="text-lg font-bold text-white mb-2">Alma Criadora</h3>
                <p className="text-purple-200 text-sm">Criativo e imaginativo</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">❤️</div>
                <h3 className="text-lg font-bold text-white mb-2">Coração Magnético</h3>
                <p className="text-purple-200 text-sm">Amoroso e empático</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🌙</div>
                <h3 className="text-lg font-bold text-white mb-2">Espírito Intuitivo</h3>
                <p className="text-purple-200 text-sm">Sábio e conectado</p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-bold text-white mb-2">Força Visionária</h3>
                <p className="text-purple-200 text-sm">Inspirador e transformador</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              O Que Você Vai Receber
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Seu Tipo Vibracional</h3>
                </div>
                <p className="text-purple-200 mb-4">
                  Descubra qual dos 5 tipos de energia de manifestação você é, com análise detalhada 
                  das suas características únicas e como elas influenciam sua capacidade de atrair abundância.
                </p>
                <ul className="space-y-2 text-purple-200">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Análise personalizada completa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Suas características únicas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Como você manifesta naturalmente</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Plano de 7 Dias</h3>
                </div>
                <p className="text-purple-200 mb-4">
                  Um plano de manifestação personalizado para seu tipo, com práticas diárias específicas 
                  que vão ativar sua energia natural e acelerar seus resultados.
                </p>
                <ul className="space-y-2 text-purple-200">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>7 práticas personalizadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Afirmações específicas para você</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Exercícios de manifestação</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Ebook Exclusivo</h3>
                </div>
                <p className="text-purple-200 mb-4">
                  "Meditação da Riqueza e Abundância" - Um guia completo com técnicas avançadas 
                  de manifestação, meditações guiadas e exercícios práticos.
                </p>
                <ul className="space-y-2 text-purple-200">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>6 capítulos completos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Meditações guiadas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Download em PDF</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-xl">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Afirmações Personalizadas</h3>
                </div>
                <p className="text-purple-200 mb-4">
                  Conjunto exclusivo de afirmações criadas especificamente para seu tipo vibracional, 
                  para reprogramar sua mente subconsciente para a abundância.
                </p>
                <ul className="space-y-2 text-purple-200">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Afirmações específicas para seu tipo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Arquivo para download</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Guia de uso otimizado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Veja o Que Nossos Usuários Dizem
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-purple-200 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-purple-300 text-sm">{testimonial.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preço Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Transforme Sua Vida Hoje
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="text-purple-300 line-through text-2xl mb-2">De R$ 197,00</div>
              <div className="text-5xl font-bold text-amber-400 mb-4">R$ 6,99</div>
              <div className="text-purple-200 text-lg mb-6">Oferta especial por tempo limitado</div>
              
              <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Você recebe TUDO isso:</h3>
                <div className="space-y-3 text-purple-200">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Teste completo de 30 perguntas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Seu tipo vibracional personalizado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Plano de manifestação de 7 dias</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Ebook "Meditação da Riqueza e Abundância"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Afirmações personalizadas para download</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setCurrentScreen('form')}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-6 rounded-xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl mb-4"
              >
                Começar Minha Transformação Agora
              </button>
              
              <div className="flex items-center justify-center gap-4 text-purple-300 text-sm">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Pagamento seguro</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Acesso imediato</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Como funciona o teste?</h3>
                <p className="text-purple-200">
                  São 30 perguntas cuidadosamente elaboradas que analisam sua personalidade, valores e forma de pensar. 
                  Com base nas suas respostas, identificamos seu tipo vibracional único.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Quanto tempo leva para ver resultados?</h3>
                <p className="text-purple-200">
                  Muitas pessoas relatam mudanças na primeira semana seguindo o plano personalizado. 
                  Os resultados mais significativos aparecem entre 21 a 30 dias de prática consistente.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">O que torna este teste diferente?</h3>
                <p className="text-purple-200">
                  Nosso teste não apenas identifica seu tipo, mas cria um plano de ação personalizado. 
                  Você recebe estratégias específicas para SEU tipo vibracional, não conselhos genéricos.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Posso fazer o teste mais de uma vez?</h3>
                <p className="text-purple-200">
                  Sim! Sua energia pode evoluir com o tempo. Recomendamos refazer o teste a cada 3-6 meses 
                  para acompanhar seu crescimento pessoal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">
              Sua Nova Vida Começa Agora
            </h2>
            
            <p className="text-xl text-purple-200 mb-12 leading-relaxed">
              Não deixe mais um dia passar vivendo abaixo do seu potencial. 
              Descubra sua energia única e comece a manifestar a vida que você merece.
            </p>
            
            <button
              onClick={() => setCurrentScreen('form')}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-2xl mb-8"
            >
              Fazer Meu Teste Agora - R$ 6,99
            </button>
            
            <p className="text-purple-300 text-sm">
              ⏰ Oferta por tempo limitado • 🔒 Pagamento 100% seguro • ⚡ Acesso imediato
            </p>
          </div>
        </section>
      </div>
    )
  }

  if (currentScreen === 'form') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Vamos começar sua jornada
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-purple-200 mb-2">Seu nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-300/30 focus:border-amber-400 focus:outline-none"
                  placeholder="Digite seu nome"
                />
              </div>
              
              <div>
                <label className="block text-purple-200 mb-2">Seu email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-300/30 focus:border-amber-400 focus:outline-none"
                  placeholder="Digite seu email"
                />
              </div>
            </div>

            <button
              onClick={handleStartQuiz}
              disabled={!formData.name || !formData.email}
              className="w-full mt-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Iniciar Teste Vibracional
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'quiz') {
    const question = questions[currentQuestion]
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-purple-200 mb-2">
              <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-amber-500 to-yellow-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              {question.question}
            </h2>
            
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(question.id, option)}
                  className="w-full p-4 text-left bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all duration-300 hover:scale-105"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'preview') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-6xl mb-6">🔮</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Sua energia vibracional foi detectada!
            </h2>
            
            <p className="text-xl text-purple-200 mb-8 leading-relaxed">
              Seu perfil está entre <span className="text-amber-400 font-bold">💎 Mente Próspera</span> e <span className="text-amber-400 font-bold">🌿 Alma Criadora</span>.
            </p>

            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-6 mb-8">
              <p className="text-white text-lg mb-4">
                Para desbloquear seu resultado completo e receber:
              </p>
              <div className="space-y-2 text-purple-200">
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Seu Plano de Manifestação personalizado</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Ebook "Meditação da Riqueza e Abundância"</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Afirmações personalizadas para seu tipo</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-purple-300 line-through text-lg mb-2">De R$ 19,99</div>
              <div className="text-4xl font-bold text-amber-400 mb-2">R$ 6,99</div>
              <div className="text-purple-200 text-sm">Oferta especial por tempo limitado</div>
            </div>

            <button
              onClick={() => setCurrentScreen('payment')}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              Desbloquear meu resultado e receber o ebook
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'payment') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            {isProcessing ? (
              <>
                <div className="text-6xl mb-6 text-center">⏳</div>
                <h2 className="text-2xl font-bold text-white mb-4 text-center">
                  Processando pagamento...
                </h2>
                <p className="text-purple-200 text-center">
                  Aguarde enquanto liberamos seu resultado completo.
                </p>
              </>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🔐</div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Checkout Seguro
                  </h2>
                  <p className="text-purple-200">
                    Complete seu pagamento para desbloquear seu resultado personalizado
                  </p>
                </div>

                {/* Resumo do Pedido */}
                <div className="bg-white/20 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Resumo do Pedido</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200">Teste Vibracional Completo</span>
                      <span className="text-white font-bold">R$ 6,99</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200">Plano de Manifestação 7 Dias</span>
                      <span className="text-green-400">Incluído</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200">Ebook "Meditação da Riqueza"</span>
                      <span className="text-green-400">Incluído</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-200">Afirmações Personalizadas</span>
                      <span className="text-green-400">Incluído</span>
                    </div>
                    <div className="border-t border-white/20 pt-3 mt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-white">Total</span>
                        <span className="text-2xl font-bold text-amber-400">R$ 6,99</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Garantias de Segurança */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    Pagamento 100% Seguro
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-purple-200">
                      <Lock className="w-4 h-4 text-green-400" />
                      <span>SSL Criptografado</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      <CreditCard className="w-4 h-4 text-green-400" />
                      <span>Cartão Protegido</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      <Smartphone className="w-4 h-4 text-green-400" />
                      <span>PIX Instantâneo</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-200">
                      <Globe className="w-4 h-4 text-green-400" />
                      <span>Acesso Mundial</span>
                    </div>
                  </div>
                </div>

                {/* Botão de Pagamento Principal */}
                <button
                  onClick={handlePayment}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl mb-4 flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  Finalizar Pagamento - R$ 6,99
                </button>

                {/* Métodos de Pagamento */}
                <div className="text-center mb-6">
                  <p className="text-purple-200 text-sm mb-3">Aceitamos:</p>
                  <div className="flex items-center justify-center gap-4 text-xs text-purple-300">
                    <span className="bg-white/20 px-3 py-1 rounded">💳 Cartão</span>
                    <span className="bg-white/20 px-3 py-1 rounded">📱 PIX</span>
                    <span className="bg-white/20 px-3 py-1 rounded">🏦 Boleto</span>
                  </div>
                </div>

                {/* Garantias Adicionais */}
                <div className="text-center space-y-2 text-sm text-purple-300">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-green-400" />
                    <span>Acesso imediato após pagamento</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Download className="w-4 h-4 text-green-400" />
                    <span>Download vitalício dos materiais</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Garantia de satisfação de 7 dias</span>
                  </div>
                </div>

                {/* Urgência */}
                <div className="mt-6 p-4 bg-red-500/20 rounded-lg text-center">
                  <p className="text-red-300 text-sm font-bold">
                    ⏰ Oferta especial válida apenas hoje!
                  </p>
                  <p className="text-red-200 text-xs">
                    Preço normal: R$ 19,99 • Economia: R$ 13,00
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (currentScreen === 'result') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{result.icon}</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              {result.name}
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              {result.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Características */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Suas Características</h3>
              <div className="space-y-3">
                {result.traits.map((trait, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-amber-400" />
                    <span className="text-purple-200">{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Como Manifestar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Como Você Manifesta</h3>
              <p className="text-purple-200 mb-4">{result.manifestation}</p>
              <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-lg p-4">
                <p className="text-white italic">"{result.affirmation}"</p>
              </div>
            </div>
          </div>

          {/* Plano de 7 Dias */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Seu Plano de Manifestação de 7 Dias
            </h3>
            <div className="grid gap-4">
              {manifestationPlan.map((day, index) => (
                <div key={index} className="bg-white/20 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {day.day}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold">{day.title}</h4>
                      <p className="text-purple-200 text-sm">{day.practice}</p>
                      <p className="text-amber-300 text-sm italic mt-1">"{day.affirmation}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ebook Download */}
          <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl p-6 mb-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Seu Ebook Exclusivo
            </h3>
            <p className="text-purple-200 mb-6">
              "Meditação da Riqueza e Abundância" - Um guia completo para ativar sua prosperidade
            </p>
            <button
              onClick={() => setShowEbook(true)}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
            >
              <Download className="w-5 h-5" />
              Abrir Ebook
            </button>
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentScreen('upsell')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform"
            >
              Continue sua jornada
              <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
          </div>
        </div>

        <EbookViewer isOpen={showEbook} onClose={() => setShowEbook(false)} />
      </div>
    )
  }

  if (currentScreen === 'upsell') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Continue Evoluindo Sua Vibração
            </h2>
            
            <p className="text-xl text-purple-200 mb-8 leading-relaxed">
              Continue elevando sua vibração com o <span className="text-amber-400 font-bold">Plano Premium do Manifesto Diário</span>
            </p>

            <div className="bg-white/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Você receberá:</h3>
              <div className="space-y-3 text-purple-200">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Novas meditações semanais</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Afirmações diárias personalizadas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Relatórios energéticos mensais</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Acesso à comunidade exclusiva</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-purple-300 line-through text-lg mb-2">De R$ 29,90</div>
              <div className="text-4xl font-bold text-amber-400 mb-2">R$ 4,90/mês</div>
              <div className="text-purple-200 text-sm">Oferta especial para novos membros</div>
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl mb-4">
              Ativar minha vibração premium 🔮
            </button>

            <p className="text-purple-300 text-sm">
              Cancele quando quiser • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    )
  }

  return null
}