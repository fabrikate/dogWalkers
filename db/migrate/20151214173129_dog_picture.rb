class DogPicture < ActiveRecord::Migration
  def change
    add_column :dogs, :pictureURL, :string
  end
end
