class Api::TripsController < ApplicationController

before_action :set_trip, only: [:show, :new, :update, :remove_rider, :destroy, :add_rider, :remove_seat]
skip_before_filter  :verify_authenticity_token

  def index
    @trips = Trip.all
    render json: @trips
  end

  def add_rider
    @trip.rider_ids << current_user.id unless @trip.rider_ids.include?(current_user.id)
    @trip.rider_username << current_user.username
    @trip.save
    render json: @trip
  end

 def remove_seat
   if @trip.available_seats > 0
     @trip.update(available_seats: @trip.available_seats - 1)
   end
 end


 def remove_rider
    @trip = Trip.find(params[:id])
    @trip.rider_ids.delete_if { |id| id == current_user.id }
    @trip.rider_username.delete_if { |username| username == current_user.username }
    @trip.update(rider_ids: @trip.rider_ids)
    @trip.update(available_seats: @trip.available_seats + 1)
    render json: @trip
  end

  def show
      render json: @trip
  end

  def create
    @trip = current_user.trips.new(trip_params)
    @trip.driver_username << current_user.username
    if @trip.save
      render json: @trip
    else
      render json: { errors: @trip.errors, status: 422}
    end
  end

  def update
    @trip.update(trip_params)
      render json: @trip
  end


  def destroy
    @trip.destroy
  end

  private
    def set_trip
      @trip = Trip.find(params[:id])
    end

    def trip_params
      params.require(:trip).permit(:name, :date, :pickup_time, :departure_time,
      :start_address, :end_address, :user, :rider_ids, :available_seats,
      :driver_username, :rider_username)
    end

end
