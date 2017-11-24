require 'sinatra'
require 'mongo'

PASSWORD=ENV['PASS']
CONNECTION_STRING="mongodb://admin:#{PASSWORD}@jobhunting-shard-00-00-v8klp.mongodb.net:27017,jobhunting-shard-00-01-v8klp.mongodb.net:27017,jobhunting-shard-00-02-v8klp.mongodb.net:27017/test?ssl=true&replicaSet=JobHunting-shard-0&authSource=admin"

get '/' do
  client = Mongo::Client.new(CONNECTION_STRING)
  db = client.database
  puts db.collections.size
  'Hello world!'
end
