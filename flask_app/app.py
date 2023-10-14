from flask import Flask, jsonify, request
from flask_cors import cross_origin

app = Flask(__name__)

@app.route('/', methods=['GET'])
@cross_origin()
def default():
    return jsonify({'a':'hello World'})

@app.route('/api/upload', methods=['POST'])
@cross_origin()
def upload_file():
    print(request.__dict__)
    print(request.files)
    file = request.files['image']
    
    # Check if the file has a name
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # If the file is valid, save it to a designated folder
    file.save(f"flask_app/uploads/{file.filename}")
    return jsonify({'message': 'File uploaded successfully'})

if __name__ == '__main__':
    app.run(debug=True)
