class User < ActiveRecord::Base
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      p auth
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.profileURL = auth.info.image
      user.oauth_token = auth.credentials.token
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
  end

  validates :phoneNum, presence: true
  validates :zipCode, presence: true
end
