import { v4 as uuidv4} from 'uuid';

export default class Todo {
    id: string = uuidv4();
    completed: boolean = false;
    text: string;
    minutes: number = 0;
    hours: number = 0;
    sequenceNumber: number = 0;

    constructor(text: string) {
        this.text = text;
    }
}