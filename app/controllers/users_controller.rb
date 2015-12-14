class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user, status: :ok
  end

  def create
    @user = User.create(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: {id: @user.id, email: @user.email }, status: :created
      redirect_to root_path
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
    params.require(:user).permit(
    :email,
    :password,
    :password_digest,
    :name,
    :location,
    :dog_owner,
    :dog_walker,
    :provider,
    :uid,
    :oauth_token,
    :oauth_expires_at)
  end

end
