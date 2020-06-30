import subprocess

def execution(command_list):
  execution_name = subprocess.run(command_list, shell = True, capture_output = True, text = True)
  print("Ejecucion: {stand}\nCodigo de Error: {errCODE}\nError: {err}".format(stand = execution_name.stdout, errCODE = execution_name.returncode, err = execution_name.stderr))

#git add .
execution(['git','add','.'])

#git commit -m " [Reason] "
commit_text = str(input('Commit Reason: '))
execution(['git','commit','-m',commit_text])

#git push -u origin master
execution(['git','push','-u','origin','master'])