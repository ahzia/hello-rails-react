class V1::GreetingsController < ApplicationController
  def random
    render json: { greeting: Greeting.find(rand(1..5)) }.to_json
  end
end
