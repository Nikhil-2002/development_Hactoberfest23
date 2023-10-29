
from ctypes import _NamedFuncPointer
from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(_NamedFuncPointer)
app.secret_key = 'your_secret_key'

def get_questions():
    con = sqlite3.connect('questions.db')
    cur = con.cursor()
    cur.execute("SELECT * FROM questions")
    questions = cur.fetchall()
    con.close()
    return questions

@app.route('/')
def index():
    questions = get_questions()
    return render_template('quiz.html', questions=questions)

@app.route('/submit', methods=['POST'])
def submit():
    score = 0
    questions = get_questions()
    for q in questions:
        if request.form.get(f'question_{q[0]}') == q[5]:
            score += 1
    return render_template('result.html', score=score)

if __name__ == '__main__':
    app.run(debug=True)
