class TicketsController < ApplicationController
    wrap_parameters format: []

    def create
        ticket = Ticket.create(ticket_params)
        render json: ticket
    end 
    private

    def ticket_params
        params.permit(:ticket_owner,:show_id, :price, :willcall)
    end 
end
