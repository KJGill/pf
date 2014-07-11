class RemoveFieldNameFromInvestments < ActiveRecord::Migration
  def change
    remove_column :investments, :issue_date, :date
    remove_column :investments, :maturity_date, :date
  end
end
