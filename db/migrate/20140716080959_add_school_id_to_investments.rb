class AddSchoolIdToInvestments < ActiveRecord::Migration
  def change
  	add_column :investments, :school_id, :integer
  end
end
