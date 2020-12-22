from flask import Flask, request #request object
from flask_restful import Api, Resource, reqparse, abort

app = Flask(__name__)
api = Api(app) #initialize API

names = {"Nilber": {"age" : 36, "gender": "nonbinary"}, 
        "Tim": {"age": 19, "gender": "male"}
    }

video_puts_args = reqparse.RequestParser() #automatically parse request that is being sent
video_puts_args.add_argument("name", type=str, help="Name of the Video is Required", required=True) #help - error message
video_puts_args.add_argument("views", type=int, help="Views of the Video is Required", required=True) 
video_puts_args.add_argument("likes", type=int, help="Likes of the Video is Required", required=True) 

videos = {"cats": "cats", "hippos" : "hippos", "lemurs": "lemurs"}

def abort_if_video_id_doesnt_exist(video_id):
    if video_id not in videos:
        abort(404, message="Could not find video")

class HelloWorld(Resource):
    def get(self, name, age):
        #return { "name": name, "test" : test } #{} Python Dictionary
        return names[name]

    def post(self) :
        return { "data" : "Posted"}

class Video(Resource):
    def get(self, video_id):
        abort_if_video_id_doesnt_exist(video_id)
        return videos[video_id]

    def put(self, video_id):
        #print(request.method)
        #print(request.form["likes"]) #request object as form
        args = video_puts_args.parse_args()
        videos[video_id] = args
        return videos[video_id], 201 #also can return status code


api.add_resource(HelloWorld, "/helloworld/<string:name>/<int:age>") #"/" default URL , Parameters are Class Resource and URL endpoint <> Params in route
api.add_resource(Video, "/video/<string:video_id>")


if __name__ == "__main__": #start server and Flask application
    app.run(debug=True) #in debug mode with logging, in development environment

