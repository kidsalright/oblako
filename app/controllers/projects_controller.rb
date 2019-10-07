class ProjectsController < ApplicationController
  def index
    @projects = Project.all
	@todo = Todo.new
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    @todo = ToDo.new

    @project.save
	redirect_to root_path
  end

  private
    def project_params
      params.require(:project).permit(:title)
    end
end
