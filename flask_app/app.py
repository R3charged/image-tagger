from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/api/upload', methods=['POST'])
def upload_file():
    # Check if a file was sent with the request
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    # Check if the file has a name
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # If the file is valid, save it to a designated folder
    file.save(f'uploads/{file.filename}')
    return jsonify({'message': 'File uploaded successfully'})

if __name__ == '__main__':
    app.run(debug=True)
