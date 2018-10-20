from flask import Flask, render_template, send_file, url_for

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/tiles/<zoom>/<y>/<x>')
def get_art(zoom, y, x):
    # //gibs.earthdata.nasa.gov/wmts/epsg4326/best/' + 'VIIRS_SNPP_CorrectedReflectance_TrueColor/default/2018-04-19/250m/
    return send_file('static/duck.png', mimetype='image/png')

if __name__ == '__main__':
    app.run()
