import asyncio

from flask import Flask, request, jsonify
from prompts import Prompts
from GeminiAI import GeminiAi
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/api/evaluate/', methods=['POST'])
def post_example():
    data = request.json

    if 'assignment' in data and 'requirements' in data and 'codeSubmitted' in data:

        assignment = data['assignment']
        requirements = data['requirements']
        codeSubmitted = data['codeSubmitted']

        print("step 1")
        promptModel = Prompts(assignment, requirements, codeSubmitted)
        GemAi = GeminiAi(promptModel.criteriaPrompt(), promptModel.errorsPrompt(), promptModel.additionalPrompt())
        responses = asyncio.run(GemAi.getResponse())

        response = {
            'status': 'success',
            'message': 'Data received successfully',
            'corrections': responses[0],
            'errors': responses[1],
            'additional': responses[2]
        }
        print("step 4")
        return jsonify(response)
    else:
        return jsonify({'error': 'All the Fields are Required.'}), 400


if __name__ == '__main__':
    app.run(debug=True)

