class AddfloatDogWalkerRating < ActiveRecord::Migration
  def change
    remove_column :users, :dogWalkerRating
    add_column :users, :dogWalkerRating, :float
  end
end
