OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '570028399816870', '04487359fc0309bd5ac1f9e03ed05136', {:client_options => {:ssl => {:ca_file => Rails.root.join('cacert.pem').to_s}}}
end
