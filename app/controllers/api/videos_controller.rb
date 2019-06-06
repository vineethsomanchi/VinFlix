class Api::VideosController < ApplicationController
    before_action :ensure_login
    
    def index
        @videos = Video.all
    end 

    def show
        @video = Video.find(params[:id])
        # @video = Video.with_attached_movie.find(params[:id])
        render :show
    end

    # private
    # def video_params
    #     params.require(:video).permit(:id, thumbnail: [], movie: [])
    # end
end

