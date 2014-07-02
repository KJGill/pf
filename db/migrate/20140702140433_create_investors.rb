class CreateInvestors < ActiveRecord::Migration
  def change
    create_table :investors do |t|
      t.string :f_name
      t.string :l_name
      t.string :origin_country
      t.string :residency_country
      t.string :program
      t.integer :grad_year

      t.timestamps
    end
  end
end
