class RemoveUserIdFromDestinations < ActiveRecord::Migration[6.1]
  def change
    remove_column :destinations, :user_id, :integer
  end
end
