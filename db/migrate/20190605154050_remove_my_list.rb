class RemoveMyList < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :my_list
  end
end
