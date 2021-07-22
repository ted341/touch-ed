// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('vscode-touchbar.bwd', () => vscode.commands.executeCommand('workbench.action.navigateBack')),
		vscode.commands.registerCommand('vscode-touchbar.fwd', () => vscode.commands.executeCommand('editor.action.revealDefinition')),
		vscode.commands.registerCommand('vscode-touchbar.clp', () => vscode.commands.executeCommand('editor.foldAll')),
		vscode.commands.registerCommand('vscode-touchbar.exp', () => vscode.commands.executeCommand('editor.unfoldAll')),
		vscode.commands.registerCommand('vscode-touchbar.fmt', () => vscode.commands.executeCommand('editor.action.formatDocument')),
		vscode.commands.registerCommand('vscode-touchbar.cmt', () => vscode.commands.executeCommand('editor.action.commentLine')),
		vscode.commands.registerCommand('vscode-touchbar.redo', () => vscode.commands.executeCommand('redo'))
	);
}

// this method is called when your extension is deactivated
export function deactivate() { }
