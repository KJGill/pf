class Investment < ActiveRecord::Base
	belongs_to :investor
	has_many :series

end
