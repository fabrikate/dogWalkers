class CreateAdditionalPics < ActiveRecord::Migration
  def change
    create_table :additional_pics do |t|
      t.integer :user_id
      t.integer :dog_id
      t.string :additionalURL

      t.timestamps null: false
    end
  end
end
