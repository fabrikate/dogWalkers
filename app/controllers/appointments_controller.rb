class AppointmentsController < ApplicationController
  def new
  end

  def create
    # Set amount of payment $10 for 30min $20 for hour
    @amount = 1000

    customer = Stripe::Customer.create(
    :email => params[:stripeEmail],
    :source => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
    :customer => customer.id,
    :amount => @amount,
    :description => 'eDoggy dog walker charge',
    :currency => 'usd'
    )
  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
end
