Rails.application.routes.draw do
	resources :todos
	resources :projects
	root 'projects#index'
	post 'todos/update'
	post 'todos/create'

	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
