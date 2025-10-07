import Stack from './stack';

class UndoManager {
    constructor() {
        this.undoStack = new Stack();
        this.redoStack = new Stack();
    }

    execute(command) {
        command.execute();
        this.undoStack.push(command);   
        this.redoStack = new Stack();
    }

    canUndo() {  
        return !this.undoStack.isEmpty();
    }

    canRedo() {  
        return !this.redoStack.isEmpty();
    }

    undo() {
        if (!this.undoStack.isEmpty()) {
            const command = this.undoStack.pop();
            command.undo();
            this.redoStack.push(command);
        }
    }

    redo() {
        if (!this.redoStack.isEmpty()) {
            const command = this.redoStack.pop();
            command.execute();
            this.undoStack.push(command);
        }
    }
}

export default UndoManager;