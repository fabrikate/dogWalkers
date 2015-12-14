class DogsController < ApplicationController

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
    else
      render json @dog.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @dog.update(dog_params)
      render json: { id: @dog.id, name: @dog.name }, status: :created
    else
      render json: @dog.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @dog.destroy
    render json: {message: "#{@dog.id} deleted"}, status: :unauthorized
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
