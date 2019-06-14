class Api::ProfilesController < ApplicationController
    before_action :ensure_login

    def index
        @profiles = current_user.profiles
        render :index
    end

    def show
        @profile = Profile.find(params[:id])
        render :show
    end
    
    def create
        @profile = Profile.new(profile_params)
        @profile.user_id = current_user.id
        if @profile.save
            render :show
        else
            render json: @user.errors.full_messages, status: 401 #Unauthorized
        end
    end

    def update
        @profile = Profile.find(params[:id])
        @profile.update(profile_params);
        render :show
    end
    
    def destroy
        @profile = Profile.find(params[:id])
        @profile.destroy!
        render :show
    end

    private
    def profile_params
        params.require(:profile).permit(:name, :image)
    end
    
end