import { v4 as uuidv4} from 'uuid';

export default class Todo {
    id: string = uuidv4();
    completed: boolean = false;
    text: string;
    sequenceNumber: number = 0;

    constructor(text: string) {
        this.text = text;
    }
}