class CreateInvestments < ActiveRecord::Migration
  def change
    create_table :investments do |t|
      t.float :amount
      t.date :issue_date
      t.integer :series_id
      t.integer :investor_id
      t.date :maturity_date

      t.timestamps
    end
  end
end
