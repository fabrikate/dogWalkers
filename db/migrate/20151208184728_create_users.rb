class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :location
      t.string :name
      t.string :dog_owner
      t.string :dog_walker
      t.string :email
      t.string :password
      t.string :password_digest
      t.string :profileURL

      t.timestamps null: false
    end
  end
end
