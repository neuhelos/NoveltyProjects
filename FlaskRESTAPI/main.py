from flask import Flask, request #request object
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app) #initialize API
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db' #setting name of the database, relative path - creating db in current directory
db = SQLAlchemy(app)

class VideoModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    views = db.Column(db.Integer, nullable=False)
    likes = db.Column(db.Integer, nullable=False)
    
    def __repr__(self):
        #return f"Video(name={name}, views={views}, likes={likes})" 
        return name
        
#db.create_all() #only initialized once

names = {"Nilber": {"age" : 36, "gender": "nonbinary"}, 
        "Tim": {"age": 19, "gender": "male"}
    }

video_puts_args = reqparse.RequestParser() #automatically parse request that is being sent
video_puts_args.add_argument("name", type=str, help="Name of the Video is Required", required=True) #help - error message
video_puts_args.add_argument("views", type=int, help="Views of the Video is Required", required=True) 
video_puts_args.add_argument("likes", type=int, help="Likes of the Video is Required", required=True) 

#videos = {"cats": "cats", "hippos" : "hippos", "lemurs": "lemurs"}

# def abort_if_video_id_doesnt_exist(video_id):
#     if video_id not in videos:
#         abort(404, message="Could not find video")

# def abort_if_video_exists(video_id):
#     if video_id in videos:
#         abort(409, message="Video Exists")

class HelloWorld(Resource):
    def get(self, name, age):
        #return { "name": name, "test" : test } #{} Python Dictionary
        return names[name]

    def post(self) :
        return { "data" : "Posted"}

resource_fields = {
    "id": fields.Integer,
    "name": fields.String,
    "views": fields.Integer,
    "likes": fields.Integer
}


class Video(Resource):
    @marshal_with(resource_fields)
    def get(self, video_id):
        #abort_if_video_id_doesnt_exist(video_id)
        #return videos[video_id]
        result = VideoModel.query.get(id=video_id)
        return result

    @marshal_with(resource_fields)
    def put(self, video_id):
        #print(request.method)
        #print(request.form["likes"]) #request object as form
        #abort_if_video_exists(video_id)
        args = video_puts_args.parse_args()
        #videos[video_id] = args
        video = VideoModel(id=video_id, name=args["name"], views=args["views"], likes=args["likes"])
        db.session.add(video)
        db.session.commit()
        #return videos[video_id], 201 #also can return status code
        return video, 201
        
    
    def delete(self, video_id):
        #abort_if_video_id_doesnt_exist(video_id)
        #del videos[video_id]
        return "", 204

api.add_resource(HelloWorld, "/helloworld/<string:name>/<int:age>") #"/" default URL , Parameters are Class Resource and URL endpoint <> Params in route
api.add_resource(Video, "/video/<string:video_id>")


if __name__ == "__main__": #start server and Flask application
    app.run(debug=True) #in debug mode with logging, in development environment

