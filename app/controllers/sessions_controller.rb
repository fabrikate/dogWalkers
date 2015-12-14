class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to root_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  private
  def user_params
    params.require(:user).permit(
    :email,
    :password,
    :password_digest,
    :name,
    :provider,
    :uid,
    :oauth_token,
    :oauth_expires_at)
  end
end
