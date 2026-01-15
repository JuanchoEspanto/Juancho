#librerias
import re

"""
espresiones regulares en python
problemas Reales
"""

#codigo
print ("libreria cargado correctamente")
# ejemplo 1
texto="Mi numero es 12345"
resultado=re.search(r"\d+",texto)
print (f"{texto} Resultado.groups {resultado.group()}")
texto="MI Número es 12345-985"
resultado=re.search(r"\d+",texto)
print (f"{texto} Resultado.groups {resultado.group()}")