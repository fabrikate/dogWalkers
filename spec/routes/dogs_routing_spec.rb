require 'rails_helper'

RSpec.describe 'dogs_routing', type: :routing do
  #CREATE
  it 'routes to new' do
    expect(get: '/api/dogs/new').to route_to(
    controller: 'dogs',
    action: 'new'
    )
  end
  it 'routes to create' do
    expect(post: '/api/dogs').to route_to(
    controller: 'dogs',
    action: 'create'
    )
  end
  #SHOW
  it 'routes to show' do
    expect(get '/api/dogs/1').to route_to(
    controller: 'dogs',
    action: 'show',
    id: '1'
    )
  end
  #UPDATE
  it 'routes to edit' do
    expect(get: '/api/dogs/1/edit').to route_to(
    controller: 'dogs',
    action: 'edit',
    id: '1'
    )
  end
  it 'routes to update' do
    expect(patch: '/api/dogs/1').to route_to(
    controller: 'dogs',
    action: 'update',
    id: '1'
    )
  end
  #DELETE
  it 'routes to delete' do
    expect(delete: '/api/dogs/1').to route_to(
    controller: 'dogs',
    action: 'destroy',
    id: '1'
    )
  end
end
