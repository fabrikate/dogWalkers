class DogWalkersController < ApplicationController
  def index
    @dog_walkers = DogWalker.all
    render json: @dog_walkers
  end

  def show
    @dog_walker = DogWalker.find(params[:id])
    render json: @dog_walker, status: :ok
  end

  def create
    @dog_walker = DogWalker.create(dog_walker_params)
    if @dog_walker.save
      render json: {id:@dog_walker.id, availability: @dog_walker.availability}, status: :created
    else
      render json @dog_walker.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @dog_walker = DogWalker.find(params[:id])
    if @dog_walker.update(dog_walker_params)
      render json: {id:@dog_walker.id, availability: @dog_walker.availability}, status: :created
    else
      render json: @dog_walker.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @dog_walker = DogWalker.find(params[:id])
    @dog_walker.destroy
    render json: {message: "#{@dogWalker.id} deleted"}, status: :unauthorized
  end

  private
  def dog_walker_params
    params.require(:dog_walker).permit(:id, :availability)
  end
end
