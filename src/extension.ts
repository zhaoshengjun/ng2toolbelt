'use strict';
// The module 'vscode' contains the VS Code extensibility API

import * as vscode from 'vscode';
import {NgToolbelt} from './ng2toolbelt';

export function activate(context: vscode.ExtensionContext) {
    let toolbelt = new NgToolbelt();
    let disposable = vscode.commands.registerCommand('extension.ng2toolbelt', () => {
        let window = vscode.window;
        let rootPath = vscode.workspace.rootPath;
        let fileName: string;
        let typeName: string;                

        window.showInputBox({
            placeHolder: "What name do you want to use?"
        }).then((filename) => {
            if (filename) {
                fileName = filename;
                window.showQuickPick(['component', 'service', 'pipe','class','directive','route').then((typename) => {
                    if (typename) {
                        typeName = typename;
                        toolbelt.execGenerateCommand(fileName, typeName, rootPath)         
                    }
                })
            }

        })
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}