class AddDestinationReferenceToComments < ActiveRecord::Migration[6.1]
  def change
    add_reference :comments, :destination, null: false, foreign_key: true
  end
end
