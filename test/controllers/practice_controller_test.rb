require "test_helper"

class PracticeControllerTest < ActionDispatch::IntegrationTest
  test "should get show]" do
    get practice_show]_url
    assert_response :success
  end
end
