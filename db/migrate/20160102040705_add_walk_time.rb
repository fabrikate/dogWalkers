class AddWalkTime < ActiveRecord::Migration
  def change
    add_column :appointments, :walk_dateTime, :string
  end
end
