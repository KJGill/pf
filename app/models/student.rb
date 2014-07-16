class Student < ActiveRecord::Base
	belongs_to :school
	validates_presence_of :place_of_origin, :origin_country
	geocoded_by :hometown
	after_save :geocode, :if => :hometown_changed?



	def hometown
		(self.place_of_origin + "," + self.origin_country)
	end


end
