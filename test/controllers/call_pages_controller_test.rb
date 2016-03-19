require 'test_helper'

class CallPagesControllerTest < ActionController::TestCase
  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get calling" do
    get :calling
    assert_response :success
  end

end
