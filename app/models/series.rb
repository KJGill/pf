class Series < ActiveRecord::Base
	belongs_to :investment
	has_one :school
end
