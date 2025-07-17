> Link Video Explicacion del Proyecto 
[Link  Video Explicacion](https://drive.google.com/drive/folders/1gtQgKTN6myTiBwIegzV_Svdx8UAdELsZ?usp=sharing)

# 🌍 TranslateDev

Un traductor de consola diseñado específicamente para desarrolladores que necesitan traducir texto rápidamente sin interrumpir su flujo de trabajo.

## 📋 Descripción del Problema

En entornos de desarrollo y trabajo técnico, como la programación, la administración de servidores o la edición de documentación técnica, es común encontrarse con términos o frases en otros idiomas, especialmente en inglés. 

### Problemática Identificada

Según estudios realizados en nuestro equipo de desarrollo, se identificó un bajo rendimiento en programadores junior con nivel básico de inglés. Al encontrarse con documentación en inglés, estos desarrolladores deben:

1. **Cambiar de contexto**: Salir del editor/terminal
2. **Abrir navegador**: Buscar un traductor en línea
3. **Copiar y pegar**: Transferir texto entre aplicaciones
4. **Volver al trabajo**: Retomar la concentración

Este proceso interrumpe el flujo de trabajo, afecta la concentración y reduce la productividad significativamente.

### Solución Propuesta

**TranslateDev** es una herramienta de traducción que funciona directamente en la consola, permitiendo a los desarrolladores traducir texto de manera rápida, práctica y sin salir de su entorno de trabajo.

## 🛠️ Librerías Utilizadas

### 1. @vitalets/google-translate-api
- **Sitio oficial**: [https://www.npmjs.com/package/@vitalets/google-translate-api](https://www.npmjs.com/package/@vitalets/google-translate-api)
- **Propósito**: Interfaz para acceder al servicio de Google Translate desde Node.js
- **Ventajas**:
  - Acceso gratuito a Google Translate
  - Detección automática de idioma
  - Soporte para múltiples idiomas
  - API simple y directa

### 2. Inquirer.js
- **Sitio oficial**: [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)
- **Propósito**: Crear interfaces de línea de comandos interactivas
- **Ventajas**:
  - Prompts estéticos y profesionales
  - Menús de selección intuitivos
  - Validación de entrada
  - Experiencia de usuario mejorada

## 🏗️ Implementación

### Arquitectura del Proyecto

```
translatedev/
├── node_modules/     # Moudlos y dependencias 
├── index.js          # Archivo principal
├── package.json      # Dependencias y configuración
├── package-lock.json # Versiones exactas de dependencias
└── README.md        # Este archivo
```

### Funcionamiento de @vitalets/google-translate-api

La librería permite usar el traductor de Google con Node.js de manera sencilla:

```javascript
import { translate } from '@vitalets/google-translate-api';

// Traducción básica
const {text} = await translate('Hello World', {to: 'es'});
console.log(text); // "Hola Mundo"

// Con detección automática de idioma
const result = await translate('Bonjour le monde', {to: 'en'});
console.log(result.text); // "Hello World"
console.log(result.from.language.iso); // "fr"
```

### Funcionamiento de Inquirer.js

Esta librería permite crear prompts interactivos y menús estéticos:

```javascript
import inquirer from 'inquirer';

// Menú de selección
const {idioma} = await inquirer.prompt({
    type: "list",
    name: "idioma",
    message: "¿A qué idioma quieres traducir?",
    choices: [
        { name: 'Español', value: 'es' },
        { name: 'Inglés', value: 'en' },
        // ... más opciones
    ]
});

// Entrada de texto
const {texto} = await inquirer.prompt({
    type: "input",
    name: "texto",
    message: "Escribe el texto que quieres traducir:"
});
```

### Flujo de la Aplicación

1. **Selección de idioma**: Menú interactivo con 9 idiomas disponibles
2. **Entrada de texto**: Prompt para ingresar el texto a traducir
3. **Traducción**: Procesamiento mediante Google Translate API
4. **Resultado**: Mostrar la traducción en consola

## 🚀 Instalación y Uso

### Prerrequisitos

```bash
# Verificar instalación de Node.js (versión 14 o superior)
node --version

# Verificar instalación de npm
npm --version
```

### Instalación

1. **Clona el repositorio**:
```bash
git clone <url-del-repositorio>
cd translatedev
```

2. **Instala las dependencias**:
```bash
npm install @vitalets/google-translate-api inquirer
```

3. **Configura el package.json**:
```json
{
  "name": "translatedev",
  "version": "1.0.0",
  "type": "module",
  "description": "Traductor de consola para desarrolladores",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "@vitalets/google-translate-api": "^5.0.0",
    "inquirer": "^9.0.0"
  }
}
```

### Uso

```bash
# Ejecutar la aplicación
npm start

# O directamente
node index.js
```

### Ejemplo de Uso

```
? A que idioma quieres traducir? (Use arrow keys)
❯ Español
  Inglés
  Francés
  Alemán
  Italiano
  Portugués
  Ruso
  Chino
  Japonés

? Escribe el texto que quieres traducir: Hello World

Hola Mundo
```

## 🎯 Características

### Idiomas Soportados

- **Español** (es)
- **Inglés** (en)
- **Francés** (fr)
- **Alemán** (de)
- **Italiano** (it)
- **Portugués** (pt)
- **Ruso** (ru)
- **Chino** (zh-CN)
- **Japonés** (ja)

### Ventajas para Desarrolladores

- ✅ **Sin interrupciones**: Trabaja directamente en la terminal
- ✅ **Rápido**: Traducción instantánea
- ✅ **Offline-friendly**: Solo requiere conexión para la traducción
- ✅ **Multiplataforma**: Funciona en Windows, macOS y Linux
- ✅ **Ligero**: Pocas dependencias
- ✅ **Fácil de usar**: Interfaz intuitiva

## 🔧 Personalización

### Agregar Nuevos Idiomas

```javascript
const idiomas = [
    // ... idiomas existentes
    { name: 'Coreano', value: 'ko' },
    { name: 'Árabe', value: 'ar' },
    { name: 'Hindi', value: 'hi' },
]
```

### Mejorar la Interfaz

```javascript
// Añadir validación
const {texto} = await inquirer.prompt({
    type: "input",
    name: "texto",
    message: "Escribe el texto que quieres traducir:",
    validate: (input) => {
        if (input.trim().length === 0) {
            return 'El texto no puede estar vacío';
        }
        return true;
    }
});
```

**TranslateDev** - *Traducción sin interrupciones para desarrolladores* 🚀