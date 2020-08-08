require 'test_helper'

class ToolControllerTest < ActionDispatch::IntegrationTest
  test "should get calculator" do
    get tool_calculator_url
    assert_response :success
  end

end
