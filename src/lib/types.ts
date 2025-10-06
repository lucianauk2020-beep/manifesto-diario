// Tipos para o aplicativo Manifesto Diário

export interface Question {
  id: number
  question: string
  options: QuestionOption[]
}

export interface QuestionOption {
  text: string
  type: EnergyType
}

export type EnergyType = 'prosperous' | 'creative' | 'magnetic' | 'intuitive' | 'visionary'

export interface EnergyProfile {
  icon: string
  name: string
  description: string
  traits: string[]
}

export interface UserData {
  name: string
  email: string
}

export interface ManifestationDay {
  title: string
  task: string
  affirmation: string
}

export interface ManifestationPlan {
  [key: string]: ManifestationDay
}

export type AppStep = 'welcome' | 'userInfo' | 'quiz' | 'preview' | 'fullResult'

export interface QuizState {
  currentStep: AppStep
  userData: UserData
  currentQuestion: number
  answers: Record<number, string>
  energyResult: string
  isPaid: boolean
  isProcessingPayment: boolean
}