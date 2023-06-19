const spawner = require("./spawner");

class CommandLineInterface {
    readonly defaultBash: String = "/bin/bash";

    moveDirectory(directoryPath: String){
        spawner.execute(`cd ${directoryPath}`);
    }

    exportByConstant(variable: String, value: String) {
        spawner.execute(`export ${variable}=${value}`);
    }
    exportByString(variable: String, value: String) {
        spawner.execute(`export ${variable}="${value}"`);
    }
    exportByVariable(variable: String, sourceVar: String) {
        spawner.execute(`export ${variable}=$${sourceVar}`);
    }

    executeShellScript(shellScriptPath: String, bash: String = this.defaultBash){
        spawner.execute(`${bash} ${shellScriptPath}`);

    }
}