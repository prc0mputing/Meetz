import Place from "../models/place";

export default class PlaceData {
    public getall(): Promise<Place[]> {
        return new Promise((resolve, reject) => {
            let requests = Object.assign({}, this._fakePlaces);
            resolve(requests);
        });
    }

    public get(id: number): Promise<Place> {
        return new Promise((resolve, reject) => {
            let item: Place = this._fakePlaces.find((v) => v.Id == id);
            let requests = Object.assign({}, item);
            resolve(requests);
        });
    }

    public search(criteria: { id?: number, title?: string, category?: string }): Promise<Place[]> {
        return new Promise((resolve, reject) => {
            let items: Place[] = this._fakePlaces.filter((v) =>
                (criteria.id == null || v.Id == criteria.id) &&
                (criteria.title == null || v.Title == criteria.title) &&
                (criteria.category == null || v.Category == criteria.category)
            );
            let requests = Object.assign({}, items);
            resolve(requests);
        });
    }

    public add(place: Place): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this._fakePlaces.push(place);
            resolve(true);
        });
    }

    public remove(place: Place): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let index = this._fakePlaces.findIndex((v) => v.Id == place.Id);
            this._fakePlaces.splice(index, 1);
            resolve(true);
        });
    }

    public edit(place: Place): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let index = this._fakePlaces.findIndex((v) => v.Id == place.Id);
            this._fakePlaces[index] = place;
            resolve(true);
        });
    }

    private _fakePlaces: Place[] = [
        { Id: 1, Title: "Conferece Room", Category: "Main Building" },
        { Id: 2, Title: "Meeting Room #1", Category: "Main Building" },
        { Id: 3, Title: "Analysis Meeting Room #5", Category: "Northen Building" },
        { Id: 4, Title: "Developers Meeting Room #6", Category: "Northen Building" },
        { Id: 5, Title: "General Meeting Room #8", Category: "Northern Building" },
        { Id: 6, Title: "Amphitheater", Category: "Southern Building" }
    ];
}