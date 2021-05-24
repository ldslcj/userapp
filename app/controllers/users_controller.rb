class UsersController < ApplicationController
  before_action :set_user
  before_action :set_user, only: [:show, :destroy, :update, :edit]

    def index
      @users = User.all
      render component: "Users", props: {users: @users}
    end

    def show
      render component: "User", props:{user: @user}
    end

    def create
        @user = User.new(user_params)
        if (@user.save)
           redirect_to users_path
        else
        end
    end

    def new
        render component: 'UserNew'
    end

    def edit
        render component: 'UserEdit', props: {user: @user}
    end

    def update
       if @user.update(user_params)
         redirect_to users_path
       else
       end
    end

    def destroy
        @user.destroy
        redirect_to users_path
    end

 

    private
    def user_params
      params.require(:user).permit(:name, :age)
    end

    def set_user
     @user = User.find(params[:id])
    end
end