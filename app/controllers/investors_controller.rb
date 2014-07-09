class InvestorsController < ApplicationController
		before_action :auth_user, except: [:new]

 def dashboard
  end
end
