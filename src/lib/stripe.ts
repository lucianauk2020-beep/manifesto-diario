import { loadStripe } from '@stripe/stripe-js'

// Configuração do Stripe
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_...'
)

// Função para criar sessão de checkout
export const createCheckoutSession = async (priceId: string, successUrl: string, cancelUrl: string) => {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        successUrl,
        cancelUrl,
      }),
    })

    const session = await response.json()
    return session
  } catch (error) {
    console.error('Erro ao criar sessão de checkout:', error)
    throw error
  }
}

// Função para redirecionar para o checkout
export const redirectToCheckout = async (sessionId: string) => {
  const stripe = await stripePromise
  if (!stripe) throw new Error('Stripe não carregado')

  const { error } = await stripe.redirectToCheckout({
    sessionId,
  })

  if (error) {
    console.error('Erro no redirecionamento:', error)
    throw error
  }
}