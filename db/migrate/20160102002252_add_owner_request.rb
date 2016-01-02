class AddOwnerRequest < ActiveRecord::Migration
  def change
    add_column :appointments, :ownerRequested, :boolean
  end
end
