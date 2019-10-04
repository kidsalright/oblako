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
		@project = Project.find(params[:selected_project])
		@todo = @project.todos.create(params.require(:todo).permit(:text))

		redirect_to root_path
	end

	def update
		Todo.find(params[:commit]).update(isCompleted:params[:isCompleted])

		redirect_to root_path
	end
	private
	def todo_params
		params.require(:todo).permit(:text, :isCompleted, :project_id)
	end
end
