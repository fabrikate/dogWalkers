class Dog < ApplicationController
  def index
    @dogs = Dog.all
  end

  private
  def dog_params
    params.require(:dog).permit(
    :name,
    :age,
    :weight,
    :aggression,
    :confidence
    )
  end

end
