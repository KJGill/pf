class School < ActiveRecord::Base
	belongs_to :investor
	belongs_to :series
end

