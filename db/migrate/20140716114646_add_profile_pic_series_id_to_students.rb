class AddProfilePicSeriesIdToStudents < ActiveRecord::Migration
  def change
    add_column :students, :profile_pic, :string
    add_column :students, :series_id, :integer
  end
end
