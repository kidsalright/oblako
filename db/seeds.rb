seed_file = Rails.root.join('db', 'seeds.yml')
config = YAML::load_file(seed_file)
config = ActiveSupport::HashWithIndifferentAccess.new(config)

config[:projects].each do |project|
	todos = project[:todos]
	project.delete(:todos)
	new_project = Project.create(project)
	todos.each do |todo|
		new_project.todos.create(todo)
	end
end
