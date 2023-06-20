abstract class CommandLineInterface {
    readonly defaultBash: String = "/bin/bash";

    makeDirectory(directoryPath: String){
        spawner.execute(`mkdir ${directoryPath}`);
    }

    changeDirectory(directoryPath: String){
        spawner.execute(`cd ${directoryPath}`);
    }

    move(pathArray: Array<String>){
        spawner.execute(`mv ${pathArray.join(" ")}`)
    }

    copy(pathArray: Array<String>){
        spawner.execute(`cp ${pathArray.join(" ")}`)
    }

    remove(pathArray: Array<String>){
        spawner.execute(`rm ${pathArray.join(" ")}`)
    }

    export(variable: String, value: any) {
        spawner.execute(`export ${variable}=${value}`);
    }

    abstract bash(scriptPath: String, bash: String): any;
}