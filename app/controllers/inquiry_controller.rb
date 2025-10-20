class InquiryController < ApplicationController
  def inquiry
    @question = Question.first
  end
end
