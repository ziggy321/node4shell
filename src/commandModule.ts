const spawner = require("./spawner");

class CommandModule extends CommandLineInterface {
    readonly defaultBash: String = "/bin/bash";

    bash(scriptPath: String, bash: String = this.defaultBash){
        spawner.execute(`${bash} ${scriptPath}`);
    }
}