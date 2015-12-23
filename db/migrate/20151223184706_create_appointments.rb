class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.integer :owner_id
      t.integer :dog_id
      t.integer :walker_id
      t.timestamps :walked_at
      t.string :meet_at
      t.boolean :walkerConfirm
      t.boolean :dogReturnedConfirm
      t.float :amountPayment
      t.string :stripeToken
      t.string :stripeEmail
      t.timestamps

      t.timestamps null: false
    end
  end
end
