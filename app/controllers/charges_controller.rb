class ChargesController < ApplicationController

  def new
    @user = User.find(current_user.id)
  end

  def create
      # Set amount of payment $15 for 30min
      @amount = 1500
      @user = User.find(current_user.id)

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
      redirect_to new_charges_path
  end
end
