class AdditionalPic < ActiveRecord::Base
  validates :additionalURL, presence: true
end
