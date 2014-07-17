class School < ActiveRecord::Base
	belongs_to :investor
	belongs_to :series
	geocoded_by :location
	before_save :geocode

end

