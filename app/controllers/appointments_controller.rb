class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.all
    render json: @appointments
  end

  def new
  end

  def create
    @appointment = Appointment.create(appointments_params)
    if @appointment.save
      session[:user_id] = @appointment.owner_id
      render json: {id: @appointment.id, owner_id: @appointment.owner_id, walker_id: @appointment.walker_id}, status: :created
      flash[:success] = 'Walk appointment Created'
    else
      render json: @appointment.errors, status: :unprocessable_entity
      flash[:alert] = 'Error creating walk appointment'
    end
  end

  def show
    @appointment = Appointment.create(appointments_params)
    render json: @appointment, status: :ok
  end

  def edit
  end

  def update
    @appointment = appointment
    if @appointment.update(appointments_params)
      render json: {id: @appointment.id, owner_id: @appointment.owner_id, walker_id: @appointment.walker_id}, status: :ok
      flash[:success] = 'Appointment updated!'
    else
      render json: @appointent.errors, status: :unprocessable_entity
      flash[:alert] = 'Error updating appointment'
    end
  end

  def destory
    @appointment = appointment
    @appointment.destroy
    render json: {message: "#{@appointment.id} deleted"}
    flash[:success] = 'Appointment deleted'
  end

  private
  def appointments_params
    params.require(:appointment).permit(
    :owner_id,
    :walker_id,
    :dog_id,
    :created_at,
    :updated_at,
    :meet_at,
    :walkerConfirm,
    :dogReturnedConfirm,
    :amountPayment
    )
  end

  def appointment
    Appointment.find(params[:id]);
  end
end
