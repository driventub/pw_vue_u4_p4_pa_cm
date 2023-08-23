# pw_vue_u4_p4_pa_cm

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Taller 36

- es necesario utilizar el @CrossOrigin para cuando existan errores de network fetch ( )
- el fetch si es compatible con el metodo get, pero para el resto de verbos es necesario utilizar axios.

- 1 .then(r=>r.data) primera diferencia con axios
- 2.- no ocupa usar el await ya que de por si lo incluye.

## Taller 37

Cuando uno pregunta al servidor, la respuesta es una promesa (Promise), y el que pregunta se queda esperando (await)

para agregar atributos path variables dentro del router se tiene que cambiar el path con `:path`

# Taller 45

Técnica del diseño que permite crear páginas web con elementos que se acoplan al tamaño de las pantallas

1. Aplicar viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```


2. Utilizar siempre medidas basadas en porcentajes.
    
    2.1 Aplicar en el ancho de los elementos, unidades de porcentaje.

```css
width: 100%
```



    2.2 Debemos aplicar valores máximos a los elementos(limitar que tanto va a crecer de manera horizontal mi elemento)

```css
max-width: 100px
```
    2.3 Aplicar responsive a los textos

3. Aplicar Media Query
    Define rangos de porcentajes de nuestras pantallas, con condiciones dada la pantalla
```css
/* desde 1000px hacia arriba  */
@media screen and (min-width: 1000px){

}
@media screen and (max-width: 6000px){

}

@media screen and (min-width: 700px) and (max-width: 900px){

}

```