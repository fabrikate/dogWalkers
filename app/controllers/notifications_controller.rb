require 'twilio-ruby'

class NotificationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def notify
    client = Twilio::REST::Client.new Rails.application.secrets.twilio_account_sid, Rails.application.secrets.twilio_auth_token

    message = client.messages.create({
       from: '2532377808',
       to: '4257852227',
       body: 'You have a request for a walk, are you available?'
      })

    render plain: message.status
  end

end
