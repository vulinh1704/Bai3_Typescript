import {IDocumentManager} from "./IDocumentManager";
import {Document} from "../model/document";
import {Book} from "../model/book";
import {Magazine} from "../model/magazine";

export class DocumentManager implements IDocumentManager<Document> {
    documents: Document[] = []

    add(t: Document) {
        this.documents.push(t);
    }

    delete(id: number) {
        let index = this.findById(id);
        this.documents.splice(index, 1);
    }

    edit(id: number, t: Document) {
        let index = this.findById(id);
        this.documents[index] = t;
    }

    findById(id: number) {
        for (let i = 0; i < this.documents.length; i++) {
            if(this.documents[i].id == id){
                return i;
            }
        }
        return -1;
    }

    showAll() {
        return this.documents;
    }

    findByType(choice: number){
        let doc: Document[] = [];
        if(choice == 5){
            for (let i = 0; i < this.documents.length; i++) {
                if(this.documents[i] instanceof Book){
                    doc.push(this.documents[i]);
                }
            }
        } else if (choice == 6){
            for (let i = 0; i < this.documents.length; i++) {
                if(this.documents[i] instanceof Magazine){
                    doc.push(this.documents[i]);
                }
            }
        }
        return doc;
    }
}