class PracticesController < ApplicationController
  def show
    @question = Question.first
  end
end
