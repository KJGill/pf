# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


schools = {'Cambridge Judge Business School' => "Trumpington St, Cambridge CB2 1AG, United Kingdom",
			'Cass Business School' => "106 Bunhill Row, London EC1Y 8TZ, United Kingdom",
			'Columbia Business School' => "3022 Broadway, Manhattan, NY 10027, United States",
			'Cranfield School of Management' => "Central Ave, Cranfield, Bedford MK43 0AL, United Kingdom",
			'European School of Management and Technology' => "Schloßplatz 1, 10178 Berlin, <Germany></Germany>",
			'London Business School' => "Sussex Pl, Regents Park, London NW1 4SA, United Kingdom",
			'Manchester Business School' => "Booth St W, Manchester M15 6PB, United Kingdom",
			'Oxford University Said Business School' => "Park End St, Oxford OX1 1HP, United Kingdom",
			'Vlerick Business School' => "Reep 1, 9000 Ghent, Belgium"}

schools.each do |key, value|
	School.create!(name: key, location: value)
end



all_series = [12,19,28]

all_series.each do |series|
	Series.create!(series_number: series)
end