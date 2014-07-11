class InvestorsController < ApplicationController
		before_action :authenticate_investor!

 def dashboard
  end

 def show
  	render 'before_returns'
  end
end
