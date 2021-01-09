import requests

BASE  = "http://127.0.0.1:5000/" #Base URL

data = [{"name": "Nilber", "views": 60000, "likes": 10}, {"name": "Udu", "views": 800000, "likes": 5}, {"name": "Danielle", "views": 100000, "likes": 15}]

for i in range(len(data)):
    response = requests.put(BASE + "video/" + str(i), data[i])  #Get request - saving response data to response/res
    print(response.json())

#response = requests.delete(BASE + "video/0")

for i in range(len(data)):
    response = requests.get(BASE + "video/" + str(i), data[i])  #Get request - saving response data to response/res
    print(response.json())

#print(response.json()) - Delete is not returning a json
# response = requests.get(BASE + "helloworld/Nilber/36")  #Get request - saving response data to response/res
# print(response.json())

response2 = requests.get(BASE + "video/lemurs")
print(response2.json())

response4 = requests.get(BASE + "video/c")  #Get request - saving response data to response/res
print(response4.json())


#Information passed through API must be serializable - must be a JSON format - must return as a Python dictionary (key-value pair)

