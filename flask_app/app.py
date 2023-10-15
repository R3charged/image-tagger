from flask import Flask, jsonify, request
from flask_cors import cross_origin
import reverseprompt
from PIL import Image
app = Flask(__name__)

@app.route('/', methods=['GET'])
@cross_origin(origins="http://127.0.0.1:3000")
def default():
    return jsonify({'a':'hello World'})

@app.route('/api/upload', methods=['POST'])
@cross_origin(origins="*")
def upload_file():
    print(request.__dict__)
    print(request.files)
    file = request.files['file']
    
    # Check if the file has a name
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # If the file is valid, save it to a designated folder
    file.save(f"flask_app/uploads/{file.filename}")
    image = Image.open(f"flask_app/uploads/{file.filename}").convert('RGB')
    tags = reverseprompt.image_to_tags(image)
    return jsonify({'message': tags})

if __name__ == '__main__':
    app.run(debug=True)
