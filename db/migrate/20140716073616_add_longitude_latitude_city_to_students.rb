class AddLongitudeLatitudeCityToStudents < ActiveRecord::Migration
  def change
    add_column :students, :latitude, :float
    add_column :students, :longitude, :float
    add_column :students, :place_of_origin, :string
    add_column :students, :school_id, :integer
  end
end
