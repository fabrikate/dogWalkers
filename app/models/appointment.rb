class Appointment < ActiveRecord::Base
  validates :owner_id, presence: true
  validates :dog_id, presence: true
  validates :walker_id, presence: true
  validates :amountPayment, presence: true
end
