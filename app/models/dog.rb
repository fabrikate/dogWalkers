class Dog < ActiveRecord::Base
  validates :name, presence: true
  validates :aggression, presence: true
  validates :confidence, presence: true
end
