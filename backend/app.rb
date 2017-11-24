require 'sinatra'
require 'mongo'
require 'json'

PASSWORD=ENV['PASS']
CONNECTION_STRING="mongodb://admin:#{PASSWORD}@jobhunting-shard-00-00-v8klp.mongodb.net:27017,jobhunting-shard-00-01-v8klp.mongodb.net:27017,jobhunting-shard-00-02-v8klp.mongodb.net:27017/test?ssl=true&replicaSet=JobHunting-shard-0&authSource=admin"

client = Mongo::Client.new(CONNECTION_STRING).use("jobHunting")
db = client.database

get '/' do
  puts db.collections.size
  'Hello world!'
end

get '/opportunity' do
  collection = client[:opportunity]
  collection.find.to_a.to_json
end

