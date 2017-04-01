class Api::UsersController < ApplicationController
  def logged_in_user
    if current_user
      render json: current_user
    else
      render json: {}
    end
  end

  def update
    current_user.update(user_params) 
    # binding.pry
    render json: current_user
  end 

  def destroy 
    current_user.destroy
    render json: current_user 
  end 

  private 

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email)
  end 
end
