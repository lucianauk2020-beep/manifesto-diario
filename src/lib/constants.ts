// Constantes para o aplicativo Manifesto Diário

export const APP_CONFIG = {
  name: 'Manifesto Diário',
  subtitle: 'Descubra Sua Energia de Manifestação',
  price: {
    result: {
      original: 19.99,
      current: 6.99,
      currency: 'R$'
    },
    premium: {
      original: 29.90,
      current: 4.90,
      currency: 'R$'
    }
  },
  totalQuestions: 30,
  manifestationDays: 7,
}

export const COLORS = {
  primary: 'from-yellow-400 to-pink-500',
  secondary: 'from-purple-500 to-pink-600',
  success: 'from-green-500 to-blue-600',
  background: 'from-indigo-900 via-purple-900 to-pink-900',
}

export const ANIMATIONS = {
  hover: 'hover:scale-105 transition-all duration-300',
  pulse: 'animate-pulse',
  spin: 'animate-spin',
}

export const MESSAGES = {
  welcome: {
    title: 'Você sabe qual energia está guiando sua vida hoje?',
    subtitle: 'Descubra seu tipo vibracional e ative o fluxo da prosperidade.',
    cta: 'Começar meu teste gratuito'
  },
  preview: {
    title: 'Sua energia vibracional foi detectada com alta precisão!',
    subtitle: 'Seu perfil está entre 💎 Alma Criadora e 🌿 Mente Próspera.',
    description: 'Para desbloquear seu resultado completo e receber seu Plano de Manifestação + Ebook de Meditação da Riqueza, finalize seu acesso por apenas:',
    cta: 'Desbloquear meu resultado e receber o ebook'
  },
  upsell: {
    title: 'Continue evoluindo sua vibração',
    description: 'Continue evoluindo sua vibração com o Plano Premium do Manifesto Diário – receba novas meditações semanais, frases diárias e relatórios energéticos por apenas:',
    cta: 'Ativar minha vibração premium'
  }
}