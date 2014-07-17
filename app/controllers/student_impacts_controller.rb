class StudentImpactsController < ApplicationController
	before_action :authenticate_investor!

	def index
		series_list = current_investor.investments.pluck(:series_id).uniq
		@investor_students = Student.where(:series_id == series_list).select(:series_id, :f_name,:l_name, :profile_pic, :longitude, :latitude)
		@geojson = Array.new

		@investor_students.each do |investor_student|
  			@geojson << {
    		type: 'Feature',
    		geometry: {
      			type: 'Point',
      			coordinates: [investor_student.longitude, investor_student.latitude]
    		},
   			 properties: {
      		title: investor_student.f_name + " " + investor_student.l_name,	
      		icon: {
      			iconUrl: '/assets/student_class.png',
      			iconSize: [50, 50],
      			iconAnchor: [25, 25],
      			popupAnchor: [-3, -25]
      		},



		      :'marker-color' => '#00607d',
		      :'marker-symbol' => 'circle',
		      :'marker-size' => 'large'
			    }
			  }
			end

			  respond_to do |format|
 				 format.html
 				 format.json { render json: @geojson }  # respond with the created JSON object
			end
	end

end
