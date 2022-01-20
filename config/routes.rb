Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :v`1, default: { format: 'json` } do
    get 'greetings', to 'things#index'
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
