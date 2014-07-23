class NetworkMailer < ActionMailer::Base
  default from: "prodigyfinance@pf.com"

  def invite_investor(email, name, sender, body)
  	@name = name
  	@sender = sender
 	@body = body
  	mail(:to => email, :subject => "Prodigy Finance", :body => body)
  end

  def registration_confirmation(investment)
    @investor = investment.investor

    mail(:to => @investor.email , :subject => "Registered")
  end

end

