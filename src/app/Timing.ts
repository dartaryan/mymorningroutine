export interface Timing {
  name: string;
  completed: boolean;
  description?: string;
  subtimings?: Timing[];
}