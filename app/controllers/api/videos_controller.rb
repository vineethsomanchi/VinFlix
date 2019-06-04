class Api::VideosController < ApplicationController
    before_action :ensure_login
    
    def index
        @videos = Video.all
        render :index
    end 

    def show
        @video = Video.find(params[:id])
        debugger
        render :show
    end
end



# @videos = Video.where("title ILIKE ?", "%#{params[:title]}%")