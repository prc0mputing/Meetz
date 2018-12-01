import Person from "./person";
import Place from "./place";

export default class Meeting {
    public Id: number;
    public Title: string;
    public StartingDateTime?: Date;
    public FinishingDateTime?: Date;
    public MeetingPlace?: Place;
    public Participants?: Person[];
    public Owner?: Person;
}