const root = require("app-root-path");
const child_process = require("child_process");
const spawn = child_process.spawn;

class Spawner {
  readonly defaultStdoutFunction = function (data: String) {
    console.log(data);
  }
  readonly defaultErrFunction = function (data: String) {
    console.log(data);
  }
  readonly defaultCloseFunction = function (exitCode: Number) {
    console.log(exitCode);
  }

  execute(
    command: String, 
    encoding: String = "utf8", 
    stdoutFunction: (data: String) => void = this.defaultStdoutFunction, 
    errFunction: (data: String) => void = this.defaultErrFunction,
    closeFunction: (exitCode: Number) => void = this.defaultCloseFunction
  ) {
    const spawned = spawn(command, { shell: true });
    spawned.stdout.setEncoding(encoding);
    spawned.stderr.setEncoding(encoding);
    spawned.stdout.on("data", stdoutFunction);
    spawned.stderr.on("data", errFunction);
    spawned.on("close", closeFunction);
  }

  executeSeries(
    commands: Array<String>, 
    encoding: String = "utf8", 
    stdoutFunction: (data: String) => void = this.defaultStdoutFunction, 
    errFunction: (data: String) => void = this.defaultErrFunction,
    closeFunction: (exitCode: Number) => void = this.defaultCloseFunction
  ) {
    const spawned = spawn(commands.join(" && "), { shell: true });
    spawned.stdout.setEncoding(encoding);
    spawned.stderr.setEncoding(encoding);
    spawned.stdout.on("data", stdoutFunction);
    spawned.stderr.on("data", errFunction);
    spawned.on("close", closeFunction);
  }

};
  