from flask import Flask,jsonify

app = Flask(__name__)
# 就是为了弥补myjson不能用
# by：tyza66

@app.route('/')
def hello_world():
    json = {
        'name':"tyza66",
        "age":"22",
        "interest":"eat"
    }
    return jsonify(json)


if __name__ == '__main__':
    app.run()
