require 'rails_helper'
# CRUD on back end API
RSpec.describe 'users_routing', type: :routing do
  #CREATE
  it 'routes to new' do
    expect(get: '/api/users/new').to route_to(
    controller: 'users',
    action: 'new'
    )
  end
  it 'routes to create' do
    expect(post: '/api/users').to route_to(
    controller: 'users',
    action: 'create'
    )
  end
  #SHOW
  it 'routes to show' do
    expect(get '/api/users/1').to route_to(
    controller: 'users',
    action: 'show',
    id: '1'
    )
  end
  #UPDATE
  it 'routes to edit' do
    expect(get: '/api/users/1/edit').to route_to(
    controller: 'users',
    action: 'edit',
    id: '1'
    )
  end
  it 'routes to update' do
    expect(patch: '/api/users/1').to route_to(
    controller: 'users',
    action: 'update',
    id: '1'
    )
  end
  #DELETE
  it 'routes to delete' do
    expect(delete: '/api/users/1').to route_to(
    controller: 'users',
    action: 'destroy',
    id: '1'
    )
  end
end
