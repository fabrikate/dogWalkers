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
    @appointment = appointment
    render json: @appointment, status: :ok
  end

  def edit
  end

  def update
    @appointment = appointment
    if @appointment.update(appointments_params)
      render json: {id: @appointment.id, owner_id: @appointment.owner_id, walker_id: @appointment.walker_id}, status: :ok
    else
      render json: @appointent.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @appointment = appointment
    @appointment.destroy
    render json: {message: "#{@appointment.id} deleted"}, status: :ok
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
    :amountPayment,
    :ownerRequested,
    :walk_dateTime
    )
  end

  def appointment
    Appointment.find(params[:id]);
  end
end
