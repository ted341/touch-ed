// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let forward = vscode.commands.registerCommand('vscode-touchbar.fwd', () => {
		vscode.commands.executeCommand('editor.action.revealDefinition');
	});

	let backward = vscode.commands.registerCommand('vscode-touchbar.bwd', () => {
		vscode.commands.executeCommand('workbench.action.navigateBack');
	});

	let collapse = vscode.commands.registerCommand('vscode-touchbar.clp', () => {
		vscode.commands.executeCommand('editor.foldAll');
	});

	let expand = vscode.commands.registerCommand('vscode-touchbar.exp', () => {
		vscode.commands.executeCommand('editor.unfoldAll');
	});

	let format = vscode.commands.registerCommand('vscode-touchbar.fmt', () => {
		vscode.commands.executeCommand('editor.action.formatDocument');
	});

	let redo = vscode.commands.registerCommand('vscode-touchbar.redo', () => {
		vscode.commands.executeCommand('redo');
	});

	context.subscriptions.push(forward, backward, collapse, expand, format, redo);
}

// this method is called when your extension is deactivated
export function deactivate() {}

// Display a message box to the user
// vscode.window.showInformationMessage('Hello World from vscode_touchbar!');

// Use the console to output diagnostic information (console.log) and errors (console.error)
// This line of code will only be executed once when your extension is activated
// console.log('Congratulations, your extension "vscode-touchbar" is now active!');