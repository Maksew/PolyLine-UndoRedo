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