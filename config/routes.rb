Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  root to: 'home#show'

  scope '/api' do
    resources :users
    resources :dogs
    resources :dog_walkers
  end

  resources :sessions, only: [:create, :destroy]
end
