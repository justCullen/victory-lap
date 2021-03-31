class RemoveDestinationIdFromComments < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :destination_id, :integer
  end
end
