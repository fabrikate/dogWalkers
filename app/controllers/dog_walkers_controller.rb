class DogWalkersController < ApplicationController
  def index
    @dog_walkers = DogWalker.all
    render json: @dogWalkers
  end

  def show
    @dogWalker = DogWalker.find([params:id])
    render json: @dogWalker, status: :ok
  end

  def show
    @dogWalker = DogWalker.create(dog_walker_params)
    if @dogWalker.save
      render json: {id:@dogWalker.id, availability: @dogWalker.availability}, status: :created
    else
      render json @dogWalker.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @dogWalker.update(dog_walker_params)
      render json: {id:@dogWalker.id, availability: @dogWalker.availability}, status: :created
    else
      render json: @dogWalker.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @dogWalker.destroy
    render json: {message: "#{@dogWalker.id} deleted"}, status: :unauthorized
  end

  private
  def dog_walker_params
    params.require(:dogWalker).permit(:location, :availability, :has_dogs)
  end
end
