class DogsController < ApplicationController

  def new
  end

  def index
    @dogs = Dog.all
    render json: @dogs
  end

  def show
    @dog = Dog.find(params[:id])
    render json: @dog, status: :ok
  end

  def create
    @dog = Dog.create(dog_params)
    if @dog.save
      render json: {id: @dog.id, name: @dog.name}, status: :created
      flash[:success] = 'Dog created!'
    else
      render json: @dog.errors, status: :unprocessable_entity
      flash[:alert] = 'Problem creating dog in database.'
    end
  end

  def edit
  end

  def update
    @dog = Dog.find(params[:id])
    if @dog.update(dog_params)
      render json: { id: @dog.id, name: @dog.name }, status: :created
      flash[:success] = 'Dog updated successfully!'
    else
      render json: @dog.errors, status: :unprocessable_entity
      flash[:alert] = 'Problem updating dog.'
    end
  end

  def destroy
    @dog.destroy
    render json: {message: "#{@dog.id} deleted"}, status: :unauthorized
    flash[:alert] = 'Dog deleted!'
  end

  private
  def dog_params
    params.require(:dog).permit(
    :name,
    :age,
    :weight,
    :aggression,
    :confidence,
    :training,
    :pictureURL
    )
  end

end
