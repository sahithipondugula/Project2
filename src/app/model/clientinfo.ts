import { Projects } from "../model/projects";
import { CaseStudies } from "../model/casestudies";
import { Encyclopedia } from './encyclopedia';

export class Clientinfo {
    clientAutoId: string;
    clientId: string;
    name: string;
    city: string;
    state: string;
    country: string;
    address: string;
    phone: string;
    active: number;
    about: string;
    culture: string;
    project: Projects;
    caseStudy: CaseStudies;
    encyclopedia : Encyclopedia;
    events: any;
    exam: any;
}
