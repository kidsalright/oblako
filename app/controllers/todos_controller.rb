class TodosController < ApplicationController
	def index
		@todos = Todo.all
	end

	def show
		@todos = Todo.all
		redirect_to root_path
	end

	def new
		@todo = Todo.new
	end

	def create

		todo = Todo.new text: params[:text], project_id: params[:project_id]
		todo.isCompleted = false
		todo.save
		redirect_to root_path
	end


	def update
		todo = Todo.find_by id: params[:id].to_i
		todo.isCompleted = !todo.isCompleted
		todo.save

		redirect_to root_path
	end
	private
	def todo_params
		params.require(:todo).permit(:text, :isCompleted, :project_id)
	end
end
