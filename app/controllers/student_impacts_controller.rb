class StudentImpactsController < ApplicationController
	before_action :authenticate_investor!

	def index
		# id = []
		# id << params[:school][:id]
		series_list = current_investor.investments.pluck(:series_id).uniq
		@investor_students = Student.where(:series_id => series_list).select(:series_id, :f_name,:l_name, :profile_pic, :longitude, :latitude, :school_id)
		# @investor_students = @investor_students.where.not(:school_id => id)
		
		school_list = current_investor.investments.pluck(:school_id).uniq
		# school_list -= id
		@investor_schools = School.where(:id => school_list)
		@geojson = Array.new

		@investor_students.each do |investor_student|
			school = School.find(investor_student.school_id)
  			@geojson << {
    		type: 'Feature',
    		geometry: {
      			type: 'Point',
      			coordinates: [investor_student.longitude, investor_student.latitude]
    		},
   			 properties: {
      		title: investor_student.f_name + " " + investor_student.l_name,	
      		icon: {
      			iconUrl: investor_student.profile_pic,
      			iconSize: [50, 50],
      			iconAnchor: [25, 25],
      			popupAnchor: [-3, -25],
      			className: "nav-thumbnail",
      		}
		      # :'marker-color' => '#00607d',
		      # :'marker-symbol' => 'circle',
		      # :'marker-size' => 'large'
			    }

			  }

			  # @geojson <<
			  # {
     #   type: "Feature",
     #   geometry: {
     #     type: "LineString",
     #     coordinates: [
     #        [investor_student.longitude, investor_student.latitude],
     #        [school.longitude, school.latitude]
     #      ]
     #    },
     #         }
			end

			@investor_schools.each do |investor_school|
				@geojson << {
    		type: 'Feature',
    		geometry: {
      			type: 'Point',
      			coordinates: [investor_school.longitude, investor_school.latitude]
    		},
   			 properties: {
      		title: investor_school.name,	
      		icon: {
      			iconUrl: '/assets/school_thumbnail.png',
      			iconSize: [50, 50],
      			iconAnchor: [25, 25],
      			popupAnchor: [-3, -25],
      			className: "nav-thumbnail",
      		}
		      # :'marker-color' => '#00607d',
		      # :'marker-symbol' => 'circle',
		      # :'marker-size' => 'large'
			    }

			  }
			end

		
			  respond_to do |format|
 				 format.html
 				 format.json { render json: @geojson }  # respond with the created JSON object
			end

	end


end
