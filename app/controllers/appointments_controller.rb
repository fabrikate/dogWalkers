class AppointmentsController < ApplicationController
  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destory

  end

  private
  def appointments_params
  end
  
  def appointment
    @appointment = Appointment.find(params[:id]);
  end
end
