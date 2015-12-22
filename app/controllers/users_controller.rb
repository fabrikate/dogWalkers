class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: :ok
  end

  def create
    @user = User.create(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json: {id: @user.id, email: @user.email }, status: :created
      redirect_to root_path
      flash[:success] = 'User created'
    else
      render json: @user.errors, status: :unprocessable_entity
      flash[:alert] = 'Error creating user'
    end
  end

  def edit
  end

  def update
    @user = user
    if @user.update(user_params)
      render json: { id: @user.id, email: @user.email }, status: :ok
      flash[:success] = 'User updated!'
    else
      render json: @user.errors, status: :unprocessable_entity
      flash[:alert] = 'Error updating error!'
    end
  end

  def destroy
    @user = user
    @user.destroy
    render json: {message: "#{@user.id} deleted"}, status: :unauthorized
    flash[:success] = 'User deleted'
  end

  private
  def user
    User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(
    :email,
    :password,
    :password_digest,
    :name,
    :phoneNum,
    :streetAddress,
    :zipCode,
    :phoneNum,
    :profileURL,
    :dogs,
    :dog_owner,
    :dog_walker,
    :provider,
    :uid,
    :oauth_token,
    :oauth_expires_at)
  end

end
