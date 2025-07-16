import { translate } from '@vitalets/google-translate-api';
import inquirer from 'inquirer';


const idiomas = [
    { name: 'Español', value: 'es' },
    { name: 'Inglés', value: 'en' },
    { name: 'Francés', value: 'fr' },
    { name: 'Alemán', value: 'de' },
    { name: 'Italiano', value: 'it' },
    { name: 'Portugués', value: 'pt' },
    { name: 'Ruso', value: 'ru' },
    { name: 'Chino', value: 'zh-CN' },
    { name: 'Japonés', value: 'ja' },
]

async function main() {

    const {idioma} = await inquirer.prompt({
        type: "list",
        name: "idioma",
        message: "Aque idioma quieres traducir?",
        choices: idiomas,

    })

    const {texto} = await inquirer.prompt({
        type: "input ",
        name: "texto",
        message: "Escribe el texto que quieres traducir",   
    })

    const {text} = await translate(texto,{to: idioma})
    console.log(text)

}
main()