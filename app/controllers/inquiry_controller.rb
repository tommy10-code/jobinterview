class InquiryController < ApplicationController
  def inquiry
    @question = Question.order("RANDOM()").first
  end

  def answer
    @question = Question.find(params[:question_id])
  end
end
