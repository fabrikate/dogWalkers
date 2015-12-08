class AddDogArray < ActiveRecord::Migration
  def change
    add_column :users, :dogs, :string, array: true, default: []
  end
end
