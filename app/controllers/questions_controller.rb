class QuestionsController < ApplicationController
  def index
    @questions = Question.all
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
    @question = Question.find(params[:id])
  end

  def update
    @question = Question.find(params[:id])
    @question.update(question_params)
      redirect_to questions_path
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
      redirect_to questions_path
  end

  private

  def question_params
    params.require(:question).permit(:title, :answer, :category_id)
  end
end
