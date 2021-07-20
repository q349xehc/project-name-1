import { readFileSync } from "fs";

class ConfigReader {
	redmineUrl: String;
	constructor() {
		const rawConfig: string = readFileSync('./config.json', {encoding: 'utf8'});
		// TODO: Надо rawConfig распарсить (преобразовать) в объект
		// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON#methods - краткая инфа
		// https://learn.javascript.ru/json - всё очень подробно
		// 
		// т.е надо:
		// ... // что-то тут ещё можно сделать, а потом:
		// this.redmineUrl = ...
	}
}

export const config = new ConfigReader(); // config можно загружать в другие части сервиса с помощью:
										  // import { config } from './config-reader'
										  // потом из config можно использовать redmineUrl с помощью:
										  // config.redmineUrl