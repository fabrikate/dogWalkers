class AddPaySubmit < ActiveRecord::Migration
  def change
    add_column :users, :paymentSubmitted, :boolean, :default => false
  end
end
