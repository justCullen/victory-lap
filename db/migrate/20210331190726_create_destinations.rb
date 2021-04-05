class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :name
      t.string :content
      t.string :img_url
      t.integer :user_id

      t.timestamps
    end
  end
end
