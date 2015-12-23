class DeleteWalkAppointments < ActiveRecord::Migration
  def change
    drop_table :walkAppointments
  end
end
