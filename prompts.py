class Prompts:
    def __init__(self, assignment, requirements, codeSubmitted):
        self.assignment = assignment
        self.requirements = requirements
        self.codeSubmitted = codeSubmitted

    def criteriaPrompt(self):
        return f"""
        The Assignment is {self.assignment}
        The criteria is
        {self.requirements}
        answer in english
        which criteria points did the code follow and unfollow give me in the format of json
        the json should contain fields criteriaName, followed, description in json format
        just only give the json only only thej json
        \"\"\"
        {self.codeSubmitted}
        \"\"\"
        """

    def errorsPrompt(self):
        return f"""
        The Assignment is {self.assignment}
        The criteria is
        answer in english
        {self.requirements}
        what are the syntax and logical errors in this code give me in the format of json
        the json should contain the fields errorType, errorDescription, element, lineNumber in json format
        just only give the json only only thej json
        \"\"\"
        {self.codeSubmitted}
        \"\"\"
        """

    def additionalPrompt(self):
        return f"""
        The Assignment is {self.assignment}
        The criteria is
        {self.requirements}
        answer in english
        what are the additional feedback for this code regarding code readability and maintainability, code duplicacy and additional standards in this code give me in the format of json
        the json should contain the fields feedbackName, feedbackDesc in json format
        just only give the json only only thej json
        \"\"\"
        {self.codeSubmitted}
        \"\"\"
        """


# print(Prompts("create a image display using html", "1. use flex", "<div> <img src='1.png'/> </div>").criteriaPrompt())