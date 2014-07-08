class AddSchoolIdToInvestors < ActiveRecord::Migration
  def change
    add_column :investors, :school_id, :integer
    remove_column :investors, :school 
  end
end
