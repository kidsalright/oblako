class ProjectsController < ApplicationController
  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all
	@todo = Todo.new
  end

  # GET /projects/new
  def new
    @project = Project.new
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(project_params)
    @todo = ToDo.new

    @project.save
	redirect_to :root
  end

  private
    def project_params
      params.require(:project).permit(:title)
    end
end
