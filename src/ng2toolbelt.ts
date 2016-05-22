// import * as fs from 'fs-extra';
// import * as Path from 'path';
// import * as ng2cli from 'angluar-cli';

export class NgToolbelt {
  private exec = require('child_process').exec;
  private cmd = "ng generate ";
  
  public execGenerateCommand(fileName: string, typeName: string, rootPath: string) {
    let cmd = this.cmd + typeName + ' ' + fileName;
    this.exec(cmd, {
      cwd: rootPath
    }, (error, stdout, stderr) => {
      console.log(stdout);
      console.log(error);
      console.log(stderr);
    });
  }
}