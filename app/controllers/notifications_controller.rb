require 'twilio-ruby'

class NotificationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  #current user id in params?
  # @current_user = User.find(session[:user_id]) if session[:user_id]

  def notify
    client = Twilio::REST::Client.new Rails.application.secrets.twilio_account_sid, Rails.application.secrets.twilio_auth_token

    message = client.messages.create({
       from: '2532377808',
       to: '4257852227',
       body: "You have a request for a walk! Visit eDoggy"
      })
    render plain: message.status
  end

  def confirm
    client = Twilio::REST::Client.new Rails.application.secrets.twilio_account_sid, Rails.application.secrets.twilio_auth_token

    message = client.messages.create({
      from: '2532377808',
      to: '4257852227',
      body: 'The walk has been confirmed!'
      })

    render plain: message.status
  end

end
