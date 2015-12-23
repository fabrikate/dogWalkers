class AddAbilityMorePhotos < ActiveRecord::Migration
  def change
    add_column :users, :additionalPics, :string, default: [], array: true
    add_column :dogs, :additiionalPics, :string, default: [], array: true
  end
end
