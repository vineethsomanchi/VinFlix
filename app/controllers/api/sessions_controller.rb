class Api::SessionsController < ApplicationController
    
    #Login
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        
        if @user
            login(@user)
            render :show
        else
            render json: ["Sorry, we can't find an account with this email address. Please try again or create a new account."], status: 401 #Unauthorized
        end
    
    end
  
    #Logout
    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: { message: 'You are not currently logged in'}, status: 404 #Page not found
        end
    end

end