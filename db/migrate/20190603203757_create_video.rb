class CreateVideo < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.string :maturity_rating, null: false
      t.string :runtime, null: false
      t.text :description, null: false
      t.boolean :my_list, null: false
      t.string :director
      t.string :cast
      t.string :writer
      t.string :genre
      t.string :theme

      t.timestamps
    end
    add_index :videos, :title, unique: true
  end
end


