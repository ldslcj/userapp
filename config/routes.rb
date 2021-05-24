Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/users', to:'users#index', as: :users
  get '/users/new', to: 'users#new'
  post '/users', to: 'users#create'
  get '/users/:id', to: 'users#show'
  delete '/users/:id', to: 'users#destroy'
  get '/users/:id/edit', to: 'users#edit'
  put '/users/:id', to: 'users#update'
  patch '/users/:id', to: 'users#update'

end
