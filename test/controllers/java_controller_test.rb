require "test_helper"

class JavaControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get java_index_url
    assert_response :success
  end
end
