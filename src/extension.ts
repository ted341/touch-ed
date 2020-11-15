// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let def = vscode.commands.registerCommand('vscode-touchbar.def', () => {
		vscode.commands.executeCommand('editor.action.revealDefinition');
	});

	let ref = vscode.commands.registerCommand('vscode-touchbar.ref', () => {
		vscode.commands.executeCommand('workbench.action.navigateBack');
	});

	let fold = vscode.commands.registerCommand('vscode-touchbar.fold', () => {
		vscode.commands.executeCommand('editor.foldAll');
	});

	let unfold = vscode.commands.registerCommand('vscode-touchbar.unfold', () => {
		vscode.commands.executeCommand('editor.unfoldAll');
	});

	let format = vscode.commands.registerCommand('vscode-touchbar.format', () => {
		vscode.commands.executeCommand('editor.action.formatDocument');
	});

	context.subscriptions.push(def, ref, fold, unfold, format);
}

// this method is called when your extension is deactivated
export function deactivate() {}

// Display a message box to the user
// vscode.window.showInformationMessage('Hello World from vscode_touchbar!');

// Use the console to output diagnostic information (console.log) and errors (console.error)
// This line of code will only be executed once when your extension is activated
// console.log('Congratulations, your extension "vscode-touchbar" is now active!');