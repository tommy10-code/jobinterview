class InquiryController < ApplicationController
  def inquiry
    @question = Question.all.sample
    redirect_to practice_path(question_id: @question.id)
  end

  def answer
    @question = Question.find(params[:question_id])
  end
end
