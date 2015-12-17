class AddUserWalkerRating < ActiveRecord::Migration
  def change
    add_column :users, :dogWalkerRating, :float
  end
end
