export class Command {
    execute() {
        throw new Error("execute() must be implemented");
    }
    undo() { 
        throw new Error("undo() must be implemented");
    }
}

export class AddLineCommand extends Command {
    constructor(line, layer) {
        super();
        this.line = line;
        this.layer = layer;
    }

    execute() {
        this.layer.add(this.line);
    }

    undo() {  
        this.line.remove();
    }
}

export class ChangeColorCommand extends Command {
    constructor(line, newColor) {
        super();
        this.line = line;
        this.newColor = newColor;
        this.oldColor = line.stroke(); 
    }

    execute() {
        this.line.stroke(this.newColor);
        this.line.getLayer().batchDraw();
    }

    undo() {
        this.line.stroke(this.oldColor);
        this.line.getLayer().batchDraw();
    }
}