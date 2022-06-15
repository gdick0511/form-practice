class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def create
        new_user = User.create(user_params)
        render json: new_user, status: :created
    end

    def destroy
        deleted_user = User.find_by(id: params[:id])
        deleted_user.destroy
        head :no_content 
    end

    private 

    def user_params
        params.permit(:firstName, :lastName, :email,:username)
    end

end
