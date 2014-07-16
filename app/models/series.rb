class Series < ActiveRecord::Base
	has_many :investments
	has_one :school


def show 
	@series = current 


end 

end
