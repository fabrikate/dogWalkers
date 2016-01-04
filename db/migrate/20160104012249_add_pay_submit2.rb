class AddPaySubmit2 < ActiveRecord::Migration
  def change
    remove_column :users, :paymentSubmitted
    add_column :appointments, :paymentSubmitted, :boolean, :default => false
  end
end
