Rails.application.routes.draw do
  resources :users

  get "/users", to:"users#index"

  post "/newuser", to:"users#create" 

  delete "/delete/:id", to: "users#destroy"

end
