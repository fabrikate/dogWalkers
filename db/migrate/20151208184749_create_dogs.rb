class CreateDogs < ActiveRecord::Migration
  def change
    create_table :dogs do |t|
      t.string :user_id
      t.string :name
      t.string :age
      t.string :weight
      t.string :aggression
      t.string :confidence
      t.string :training
      t.string :rating

      t.timestamps null: false
    end
  end
end
