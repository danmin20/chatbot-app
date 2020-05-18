import { SAVE_MESSAGE } from "./types";

export const SAVE_MESSAGE = (data) => {
  return {
    type: SAVE_MESSAGE,
    payload: data,
  };
};
