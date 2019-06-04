class Api::VideosController < ApplicationController
    before_action :ensure_login
    
    def index
        @videos = Video.all
        # @videos = Video.where("title ILIKE ?", "%#{params[:title]}%")
        render :index
    end 

    def show
        @video = Video.find(params[:id])
        render :show
    end
end