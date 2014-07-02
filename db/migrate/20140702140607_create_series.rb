class CreateSeries < ActiveRecord::Migration
  def change
    create_table :series do |t|
      t.integer :class_id
      t.integer :series_number

      t.timestamps
    end
  end
end
