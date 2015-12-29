class CreateCharges < ActiveRecord::Migration
  def change
    create_table :charges do |t|
      t.integer :owner_id
      t.integer :walker_id
      t.float :amountPayment
      t.string :stripeToken
      t.string :stripeEmail

      t.timestamps null: true
    end
    remove_column :appointments, :stripeToken
    remove_column :appointments, :stripeEmail
  end
end
