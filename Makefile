all: clean venv

clean:
	rm -rf venv

venv:
	virtualenv venv
	. venv/bin/activate; pip install -r requirements.txt

