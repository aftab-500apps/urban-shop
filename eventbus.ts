import mitt, { type Emitter } from "mitt";

type MyEvents = {
  [key: string]: any;
};

type EventBus = Emitter<MyEvents>;

const emitter: EventBus = mitt<MyEvents>();

export default emitter;
