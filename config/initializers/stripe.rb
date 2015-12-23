Rails.configuration.stripe = {
  :publishable_key => ENV['STRIPE_PUB_TEST_KEY'],
  :secret_key => ENV['STRIPE_TEST_KEY']
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
