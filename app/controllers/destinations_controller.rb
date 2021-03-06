class DestinationsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_destination, only: [:show, :update, :destroy]

  # GET /destinations
  def index
    @destinations = Destination.all

    render json: @destinations, include: [:comments]
  end

  # GET /destinations/1
  def show
    render json: @destination, include: [:user, :comments]
  end

  # POST /destinations
  def create
    @destination = Destination.new(destination_params)
    @destination.user = @current_user

    if @destination.save
      render json: @destination, status: :created, location: @destination
    else
      render json: @destination.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /destinations/1
  def update
    if @destination.update(destination_params)
      render json: @destination
    else
      render json: @destination.errors, status: :unprocessable_entity
    end
  end

  # DELETE /destinations/1
  def destroy
    @destination.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_destination
      @destination = Destination.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def destination_params
      params.require(:destination).permit(:name, :content, :img_url, :user_id)
    end
end
