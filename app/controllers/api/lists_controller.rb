class Api::ListsController < ApplicationController
    before_action :ensure_login
    
    def create
        @list = current_user.list.new(video_id: params[:videoId])
        if @list.save
            render :show
        else
            render json: { message: "Unable to create list item" }, status: 422
        end
    end

    def destroy
        @list = current_user.list.find_by(video_id: params[:id])
        if @list
            @list.destroy
            render 'api/lists/show'
        else
            render json: { message: "Show not found" }, status: 422
        end
    end

    def show
        render :show
    end

    def index
        @videos = current_user.videos
        @lists = List.where(user_id: current_user.id)
        render :index
    end
    
end