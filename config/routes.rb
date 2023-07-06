Rails.application.routes.draw do
  root to: "pages#home"
  namespace :api do
    resources :posts, only: %i[index show create destroy update]
  end
  # match "*path" => "pages#home", via: [:get, :post]  
end
