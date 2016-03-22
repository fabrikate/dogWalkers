require 'twilio-ruby'

class NotificationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def notify
    @appointment = Appointment.find(params[:id])
    @walker = User.find(@appointment.walker_id)

    client = Twilio::REST::Client.new Rails.application.secrets.twilio_account_sid, Rails.application.secrets.twilio_auth_token

    message = client.messages.create({
       from: '2532377808',
       # for testing I have hard coded a phone number,  Twilio test accounts only text to a given list of phone numbers
       to:  '4257852227',
       body: "You have a request for a walk! Visit eDoggy.herokuapp.com/#/scheduleWalk/#{@appointment.owner_id}/#{@appointment.walker_id}/#{@appointment.id}"
      })
    render plain: message.status
  end

  def confirm
    @appointment = Appointment.find(params[:id])
    @owner = User.find(@appointment.owner_id)
    client = Twilio::REST::Client.new Rails.application.secrets.twilio_account_sid, Rails.application.secrets.twilio_auth_token

    message = client.messages.create({
      from: '2532377808',
      # for testing I have hard coded a phone number,  Twilio test accounts only text to a given list of phone numbers
      to: '4257852227',
      body: "The walk has been confirmed! Visit eDoggy.herokuapp.com/#/scheduleWalk/#{@appointment.owner_id}/#{@appointment.walker_id}/#{@appointment.id}"
      })

    render plain: message.status
  end

  def deny
    @appointment = Appointment.find(params[:id])
    @owner = User.find(@appointment.owner_id)

    client = Twilio::REST::Client.new Rails.application.secrets.twilio_account_sid, Rails.application.secrets.twilio_auth_token

    message = client.messages.create({
      from: '2532377808',
      # for testing I have hard coded a phone number,  Twilio test accounts only text to a given list of phone numbers
      to: '4257852227',
      body: "The walk has been canceled. Please select another dog walker."
      })

    render plain: message.status
    flash[:success] = 'Message Sent'
  end

end
