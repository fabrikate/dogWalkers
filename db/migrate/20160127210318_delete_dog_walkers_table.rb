class DeleteDogWalkersTable < ActiveRecord::Migration
  def change
    drop_table :dog_walkers
  end
end
