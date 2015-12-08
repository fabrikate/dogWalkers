class CreateDogWalkers < ActiveRecord::Migration
  def change
    create_table :dog_walkers do |t|
      t.string :user_id
      t.string :has_dogs
      t.string :availability
      t.string :rating
      t.string :fbInfo

      t.timestamps null: false
    end
  end
end
