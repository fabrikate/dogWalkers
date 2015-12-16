class AddUserPhone < ActiveRecord::Migration
  def change
    add_column :users, :phoneNum, :string
  end
end
