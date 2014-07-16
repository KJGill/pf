class Investment < ActiveRecord::Base
	belongs_to :investor
	has_many :series




validates :amount, :numericality => {:greater_than => 10000, :message => "min investment required"}
end

