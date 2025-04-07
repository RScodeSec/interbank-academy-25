# Reto Técnico: Procesamiento de Transacciones Bancarias (CLI)

## Objetivo:

Desarrolla una aplicación de línea de comandos (CLI) que procese un archivo CSV con transacciones bancarias y genere un reporte que incluya:

- **Balance Final:**  
  Suma de los montos de las transacciones de tipo "Crédito" menos la suma de los montos de las transacciones de tipo "Débito".

- **Transacción de Mayor Monto:**  
  Identificar el ID y el monto de la transacción con el valor más alto.

- **Conteo de Transacciones:**  
  Número total de transacciones para cada tipo ("Crédito" y "Débito").

---

## Instrucciones

1. **Repositorio Base:**  
   Clona o haz un fork del repositorio base disponible en:  
   `https://github.com/codeableorg/interbank-academy-25`

2. **Entrada de Datos:**  
   La aplicación deberá leer un archivo CSV. Ejemplo de contenido:

   ```
   id,tipo,monto
   1,Crédito,100.00
   2,Débito,50.00
   3,Crédito,200.00
   4,Débito,75.00
   5,Crédito,150.00
   ```

3. **Salida del Programa:**  
   La aplicación debe mostrar el reporte final en la terminal.  
   Ejemplo de salida:

   ```
   Reporte de Transacciones
   ---------------------------------------------
   Balance Final: 325.00
   Transacción de Mayor Monto: ID 3 - 200.00
   Conteo de Transacciones: Crédito: 3 Débito: 2
   ```

4. **Lenguaje de Programación:**  
   Utiliza el lenguaje de tu preferencia. Opciones recomendadas:

   - Python
   - Java
   - C#
   - JavaScript (Node.js)

5. **README del Proyecto:**  
   Incluye un archivo `README.md` con la siguiente estructura:

   - **Introducción:** Breve descripción del reto y su propósito.
   - **Instrucciones de Ejecución:** Cómo instalar dependencias y ejecutar la aplicación.
   - **Enfoque y Solución:** Lógica implementada y decisiones de diseño.
   - **Estructura del Proyecto:** Archivos y carpetas principales.

6. **Documentación y Calidad del Código:**
   - Código bien documentado y fácil de leer.
   - Comentarios explicando pasos clave y lógica del programa.
---------------------------------------------------
## Introducción
El reto es un programa de comando interactivo que procesa archivo en formato cvs 
y como salida se obtiene un un resumen, y como tiene como proposito analizar los requerimentos, y mediante logica resolver.  
## Requirements:
* Node 14+
## Use:
* Install dependency with command: ```npm i```
* Start CLI program: ```npm start```
## Enfoque y Solución
* Lectura: Se usó lectura por partes (chunk) para optimizar uso de recursos, y se formateo cada row a JSON utilizando dependencia csv-parser
para acceder a la informacion de la transaccion.
* Logica: Se usó funciones para cada requerimiento con clausulas condicionales, para validar y resolver el requerimiento.
En cuanto a enfoque de solucion de separó en funciones para hacer uso de: Single responsibility principle y en diferentes archibos con un nombre de dominio.
## Estructura del Proyecto:
````
.
├── src/                     # Codigo fuente
│   ├── model/               # Contantes de dominio
│   └── accountingService.js   # Servicio de contabilidad(balance)
│   └── transactionService.js  # Servicio de transaccion(numero de movimientos, mayor monto)
├── index.js                 # Entrada principal de la aplicación
├── data.csv                 # Data de transacciones
├── command.js               # CLI interactivo
├── package.json             # Manifest del proyecto
└── README.md                # 

