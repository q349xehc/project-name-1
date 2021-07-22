import { readFileSync } from "fs";

class ConfigReader {
	redmineUrl: string;
	constructor() {
        const rawConfig: string = readFileSync('./config.json', {encoding: 'utf8'});
        const parsedConfig = JSON.parse(rawConfig);
		this.redmineUrl = parsedConfig.redmineUrl;
	}
}

export const config = new ConfigReader();