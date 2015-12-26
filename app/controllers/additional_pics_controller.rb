class AdditionalPicsController < ApplicationController
  def index
    @additional_pics = AdditionalPic.all
    render json: @additional_pics
  end

  def show
    @additional_pic = AdditionalPic.find(params[:id])
    render json: @additional_pic, status: :ok
  end

  def create
    @additional_pic = AdditionalPic.create(additional_pic_params)
    if @additional_pic.save
      render json: {id: @additional_pic.id, user_id: @additional_pic.user_id, dog_id: @additional_pic.user_pic}, status: :created
    else
      render json: @additional_pic.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    @additional_pic = AdditionalPic.find(params[:id])
    if @additional_pic.update(additional_pic_params)
      render json: {id: @additional_pic.id, user_id: @additional_pic.user_id, dog_id: @additional_pic.user_pic}, status: :updated
    else
      render json: @additional_pic.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @additional_pic = AdditionalPic.find(params[:id])
    @additional_pic.destroy
    render json: {message: "#{@additional_pic.id} deleted"}, status: :ok
  end

  private
  def additional_pic_params
    params.require(:additional_pic).permit(:id, :user_id, :dog_id, :additionalURL)
  end
end
