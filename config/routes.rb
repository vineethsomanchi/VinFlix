Rails.application.routes.draw do

  #Backend controllers nested under API namespace
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end
  

  #Root file
  root 'static_pages#root'

end
