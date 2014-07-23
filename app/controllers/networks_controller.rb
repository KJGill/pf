class NetworksController < ApplicationController
  def show
  end

 def invite_investors
    name = params[:name]
    email = params[:email]
    sender = Investor.find(params[:sender_id])
    body = params[:body]
    NetworkMailer.invite_investor(email, name, sender, body).deliver

    redirect_to root_path
  end
	
end
