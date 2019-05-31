Rails.application.routes.draw do

  #Backend controllers nested under API namespace
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
  

  #Root file
  root 'static_pages#root'

end
