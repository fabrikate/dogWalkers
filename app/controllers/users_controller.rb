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
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @user = user
    if @user.update(user_params)
      render json: { id: @user.id, email: @user.email }, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = user
    @user.destroy
    render json: {message: "#{@user.id} deleted"}, status: :ok
  end

  private
  def user
    User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(
    :dogWalkerRating,
    :doNotDisturb,
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
    :created_at,
    :updated_at,
    :oauth_token,
    :oauth_expires_at)
  end

end
