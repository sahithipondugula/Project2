import { Question } from "../model/questions";
export class Exam {
    examId : number;
    examName :string;
    examDescription : string;
    active: number;
    questions : Question;
}
