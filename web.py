from flask import Flask, render_template, request
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/markdown", methods = ['POST'])
def markdown():
    print request.form
    import markdown2
    extras = []
    if request.form['code'] == 'true':
        extras.append('fenced-code-blocks')
    return markdown2.markdown(request.form['markdown'], extras=extras)

if __name__ == "__main__":
    app.run(debug=True)
