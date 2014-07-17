class InvestmentsController < ApplicationController

	def new 
		@investment = Investment.new
	end

	def create
		@investor = current_investor
		@success, @message, @investment = Investment.create(investment_params)

		if @success
			current_investor.investments << @investment
			flash[:success] = @message
			redirect_to investor_path(:id)
		else 
			flash[:error] = @message
			redirect_to new_investment_path
		end 
		
	end

	private 

	def investment_params
		params.require(:investment).permit(:series_id, :amount, :school_id, :investor_id) 
	end 
end
