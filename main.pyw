import subprocess

subprocess.run("py -m http.server --directory html 8000", shell=True)
