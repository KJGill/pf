class Investment < ActiveRecord::Base
	belongs_to :investor
	belongs_to :series
	validates :amount, presence: true


	def self.create(investment_params) 
		investment = Investment.new(investment_params)
		investment_amount = investment_params[:amount].to_f

		if investment_amount < 10000
			return [false, "The minimum investment is $10,000", investment]
		end

		if investment.save!
			return [true, "You have successfully invested.", investment]
		end
	end

end

