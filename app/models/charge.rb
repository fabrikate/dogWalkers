class Charge < ActiveRecord::Base
  validates :stripeEmail, presence: true
end
