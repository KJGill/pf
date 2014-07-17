class NetworkMailer < ActionMailer::Base
  default from: "prodigyfinance@pf.com"

  def registration_confirmation(investment)
    @investor = investment.investor

    mail(:to => @investor.email , :subject => "Registered")
  end

end

