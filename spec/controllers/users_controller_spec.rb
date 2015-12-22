require 'rails_helper'

RSpec.describe UsersController do
  describe 'GET index' do
    it 'assigns @users' do
      user = User.create
      get :index
      expect(assigns(:users)).to eq([user])
    end
  end

end
