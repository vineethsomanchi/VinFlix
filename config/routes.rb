Rails.application.routes.draw do

  #Backend controllers nested under API namespace
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show]
    resources :lists, only: [:create, :destroy, :index]
  end
  

  #Root file
  root 'static_pages#root'

end
