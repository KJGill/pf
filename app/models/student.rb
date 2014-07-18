class Student < ActiveRecord::Base
	belongs_to :school
	belongs_to :series
	validates_presence_of :place_of_origin, :origin_country
	geocoded_by :hometown
	before_save :geocode, :if => :place_of_origin_changed? || :origin_country_changed?



	def hometown
		(self.place_of_origin + "," + self.origin_country)
	end


end
