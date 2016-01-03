class AddDoNotDisturbUsers < ActiveRecord::Migration
  def change
    add_column :users, :doNotDisturb, :boolean, :default => false
  end
end
