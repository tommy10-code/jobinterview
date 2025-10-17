class QuestionsController < ApplicationController
  def index
  end

  def show

  end

  def new
    @question = Question.new
  end

  def create
    @question = Question.new(question_params)
    @question.save
      redirect_to questions_path
  end

  def edit
    @question = Question.(params[:id])
  end

  def update
  end

  def destroy
  end

  private

  def question_params
    params.require(:question).permit(:title, :answer)
  end
end
