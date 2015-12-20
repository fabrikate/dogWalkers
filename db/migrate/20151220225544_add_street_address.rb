class AddStreetAddress < ActiveRecord::Migration
  def change
    remove_column :users, :location, :string
    add_column :users, :streetAddress, :string
    add_column :users, :zipCode, :string
  end
end
