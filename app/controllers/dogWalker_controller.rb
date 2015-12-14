class DogWalker < ApplicationController
  def index
    @dogWalkers = DogWalker.all
  end

  private
  def dogWalker_params
    params.require(:dogWalker).permit(:location)
  end
end
