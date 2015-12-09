class UsersController < ApplicationController
  def index
  end

  def show
    render json: @user
  end

  def create
    @user = User.create(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: {id: @user.id, email: @user.email }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @user.update(user_params)
      render json: { id: @user.id, email: @user.email }, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    render json: {message: "#{@user.id} deleted"}, status: :unauthorized
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :name, :provider, :uid, :oauth_token, :oauth_expires_at)
  end

end
