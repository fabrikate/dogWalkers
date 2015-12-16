Rails.application.routes.draw do
  root to: 'home#show'

  get '/auth/:provider/callback', to: 'sessions#create'
  get '/auth/failure', to: redirect('/')

  get '/signout', to: 'sessions#destroy', as: 'signout'
  resource :sessions, only: [:create, :destroy]

  post '/twilio/voice', to: 'twilio#voice'
  post '/notifications/notify', to: 'notifications#notify'

  scope '/api' do
    resources :users
    resources :dogs
    resources :dog_walkers
  end
end
