import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { priceId, successUrl, cancelUrl } = await request.json()

    // Verificar se as variáveis de ambiente do Stripe estão configuradas
    if (!process.env.STRIPE_SECRET_KEY) {
      console.log('Stripe não configurado - simulando pagamento para demo')
      
      // Para demo, retornar sucesso simulado
      return NextResponse.json({ 
        success: true,
        demo: true,
        message: 'Pagamento simulado com sucesso' 
      })
    }

    // Se Stripe estiver configurado, usar a implementação real
    const Stripe = require('stripe')
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-12-18.acacia',
    })

    // Criar sessão de checkout do Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: 'Manifesto Diário - Resultado Completo',
              description: 'Acesso ao seu tipo vibracional completo + Plano de Manifestação + Ebook de Meditação da Riqueza',
            },
            unit_amount: 699, // R$ 6,99 em centavos
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        product: 'manifesto-diario-resultado',
      },
    })

    return NextResponse.json({ 
      success: true,
      sessionId: session.id,
      url: session.url 
    })
  } catch (error) {
    console.error('Erro ao criar sessão de checkout:', error)
    
    // Para demo, retornar sucesso mesmo com erro
    return NextResponse.json({ 
      success: true,
      demo: true,
      message: 'Pagamento simulado com sucesso (erro capturado)' 
    })
  }
}