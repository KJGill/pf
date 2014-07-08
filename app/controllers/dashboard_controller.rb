class DashboardController < ApplicationController
  def dashboard
  end
  def school
 	@school = School.all
  end

end
