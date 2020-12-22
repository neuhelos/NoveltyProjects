import requests

BASE  = "http://127.0.0.1:5000/" #Base URL

response = requests.get(BASE + "helloworld/Nilber/36")  #Get request - saving response data to response/res
print(response.json())

response2 = requests.get(BASE + "video/lemurs")
print(response2.json())

response3 = requests.put(BASE + "video/cats", {"name": "Nilber", "views": 100000, "likes": 10})  #Get request - saving response data to response/res
print(response3.json())

response4 = requests.get(BASE + "video/c")  #Get request - saving response data to response/res
print(response4.json())

#Information passed through API must be serializable - must be a JSON format - must return as a Python dictionary (key-value pair)

