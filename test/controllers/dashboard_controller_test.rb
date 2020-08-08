require 'test_helper'

class DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get space" do
    get dashboard_space_url
    assert_response :success
  end

end
