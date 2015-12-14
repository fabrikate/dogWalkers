class DogWalkers < ApplicationController
  def index
    @dogWalkers = DogWalker.all
    render json: @dogWakers
  end

  private
  def dogWalker_params
    params.require(:dogWalker).permit(:location)
  end
end
