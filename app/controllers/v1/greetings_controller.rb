class V1::GreetingsController < ApplicationController
    def getRandom
       render json: { :gretting => Greeting.find(1+rand(5))}.to_json
    end
end
