export interface Task {
  id: string;
  text: string;
  icon: string;
  step: number;
  done: boolean;
  uid: string;
  morning: boolean;
  afternoon: boolean;
  evening: boolean;
  night: boolean;
}
