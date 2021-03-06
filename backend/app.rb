require 'sinatra'
require 'mongo'
require 'json'
require 'sinatra/cross_origin'

configure do
  enable :cross_origin
end

set :allow_methods, [:get, :post, :put, :options]

PASSWORD=ENV['PASS']
CONNECTION_STRING="mongodb://admin:#{PASSWORD}@jobhunting-shard-00-00-v8klp.mongodb.net:27017,jobhunting-shard-00-01-v8klp.mongodb.net:27017,jobhunting-shard-00-02-v8klp.mongodb.net:27017/test?ssl=true&replicaSet=JobHunting-shard-0&authSource=admin"

client = Mongo::Client.new(CONNECTION_STRING).use("jobHunting")
db = client.database

options "*" do
  response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"

  response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"

  200
end

get '/' do
  puts db.collections.size
  'Hello world!'
end

get '/opportunity' do
  collection = client[:opportunity]
  collection.find.to_a.to_json
end

put '/applicant' do
  request.body.rewind
  request_payload = JSON.parse request.body.read
  doc = {name: request_payload["name"]}

  collection = client[:applicant]
  res = collection.insert_one(doc)
  "Done #{res.n}"
end

post '/applicant/:name' do
  name = params[:name]
  request.body.rewind
  request_payload = JSON.parse(request.body.read, :symbolize_names => true)

  collection = client[:applicant]
  puts request_payload
  result = collection.update_one({'name' => name},
                                 {'$addToSet' => {
                                     'questions' =>
                                         {'questionId' => request_payload[:question],
                                          'answer' => request_payload[:answer]
                                         }
                                 }})


  "Done #{result.modified_count}"
end

post '/opportunity' do
  request.body.rewind
  opportunity = JSON.parse(request.body.read, :symbolize_names => true) 
  collection =  client[:opportunity]
  res = collection.insert_one(opportunity);
  "{'message' : 'opportunity added successfully', 'id': #{res.n}}".to_json 
end
