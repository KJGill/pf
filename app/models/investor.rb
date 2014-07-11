class Investor < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

	has_one :school #need to change in the future

	validates :first_name, :last_name, :origin_country, :resident_country, presence: true 
	validates :email, uniqueness: true 
	# validate :resident_country_school_country 

	# private 
	# def resident_country_school_country 
	# 	if School.find(school_id).location.to_s == self.resident_country.to_s 
	# 		errors.add(:resident_country, "is the same as the school location, which is prohibited")
	# 	end
	# end 
end
