class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.integer :class_id
      t.string :f_name
      t.string :l_name
      t.string :origin_country

      t.timestamps
    end
  end
end
