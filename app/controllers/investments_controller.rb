class InvestmentsController < ApplicationController

def new 
	@investment = Investment.new
	
	

end

def create
	@investor = current_investor
	@investment = Investment.create(investment_params)

	if @investment.save 
		flash[:success] = "Investment Application Successfully Created" 
		current_investor.investments << @investment
		redirect_to new_investment_path

	else 
		flash[:error] = "Error"
		redirect_to new_investment_path
	end 
	
end

private 

def investment_params
		params.require(:investment).permit(:series_id, :amount) 
	end 
end
