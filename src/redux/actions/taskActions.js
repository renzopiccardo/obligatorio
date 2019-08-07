import { ACTIONS } from "../../constants";

export function createTask(task) {
  return {
    type: ACTIONS.CREATE_TASK,
    task
  };
}

export function deleteTask(id) {
  return {
    type: ACTIONS.DELETE_TASK,
    id
  };
}

export function markAsDone(id) {
  return {
    type: ACTIONS.MARK_AS_DONE_TASK,
    id
  };
}
