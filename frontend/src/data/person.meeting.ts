import Place from "../models/place";
import Person from "../models/person";
import Meeting from "../models/meeting";

export default class MeetingData {
    public getall(): Promise<Person[]> {
        return new Promise((resolve, reject) => {
            let requests = Object.assign({}, this._fakePersons);
            resolve(requests);
        });
    }

    public get(id: number): Promise<Person> {
        return new Promise((resolve, reject) => {
            let item: Person = this._fakePersons.find((v) => v.Id == id);
            let requests = Object.assign({}, item);
            resolve(requests);
        });
    }

    public search(criteria: { id?: number, name?: string, email?: string }): Promise<Person[]> {
        return new Promise((resolve, reject) => {
            let items: Person[] = this._fakePersons.filter((v) =>
                (criteria.id == null || v.Id == criteria.id) &&
                (criteria.name == null || v.Name == criteria.name) &&
                (criteria.email == null || v.Email == criteria.email)
            );
            let requests = Object.assign({}, items);
            resolve(requests);
        });
    }

    public add(person: Person): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this._fakePersons.push(person);
            resolve(true);
        });
    }

    public remove(person: Person): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let index = this._fakePersons.findIndex((v) => v.Id == person.Id);
            this._fakePersons.splice(index, 1);
            resolve(true);
        });
    }

    public edit(person: Person): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let index = this._fakePersons.findIndex((v) => v.Id == person.Id);
            this._fakePersons[index] = person;
            resolve(true);
        });
    }

    private _fakeMeetings: Meeting[] = [
        {
            Id: 1, Title: "Mid-year project controlling", StartingDateTime: new Date("2018-30-11 8:30"), FinishingDateTime: new Date("2018-30-11 12:00"),
            Owner: { Id: 1, Name: "Saul Goodman", Email: "saul.go@hotmail.com", PhoneNumber: "(+1) 889-56340" },
            MeetingPlace: { Id: 2, Title: "Meeting Room #1", Category: "Main Building" },
            Participants: [
                { Id: 1, Name: "Saul Goodman", Email: "saul.go@hotmail.com", PhoneNumber: "(+1) 889-56340" },
                { Id: 2, Name: "Jack Peterson", Email: "pett.jack@gmail.com", PhoneNumber: "(+1) 775-44002" },]
        },
        {
            Id: 2, Title: "Sprint 3rd planning session", StartingDateTime: new Date("2018-01-12 9:30"), FinishingDateTime: new Date("2018-01-12 12:30"),
            Owner: { Id: 2, Name: "Jack Peterson", Email: "pett.jack@gmail.com", PhoneNumber: "(+1) 775-44002" },
            MeetingPlace: { Id: 2, Title: "Meeting Room #1", Category: "Main Building" },
            Participants: [
                { Id: 2, Name: "Jack Peterson", Email: "pett.jack@gmail.com", PhoneNumber: "(+1) 775-44002" },
                { Id: 3, Name: "Sally Pinkman", Email: "pinkysal@yahoo.com", PhoneNumber: "(+22) 705-90560" },
                { Id: 4, Name: "Jessy Tocco", Email: "toc921@msn.com", PhoneNumber: "(+12) 808-102563" },
                { Id: 5, Name: "Adam Ferry", Email: "adam.fer50@msn.com", PhoneNumber: "(+97) 105-23087" }
            ]
        }
    ];
}