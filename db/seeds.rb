# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


schools = ['Cambridge Judge Business School',
			'Cass Business School',
			'Columbia Business School',
			'Cranfield School of Management',
			'European School of Management and Technology',
			'London Business School',
			'Manchester Business School',
			'Manchester Business School',
			'Oxford University Said Business School',
			'Vlerick Business School']

schools.each do |school|
	School.create!(name: school)
end

alumnus_statuses = ['Yes', 'No']

alumnus_status.each do |alumnus_status|
	Alumnus_status.create!(name: alumnus_status)
end
