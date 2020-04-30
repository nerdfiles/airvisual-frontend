import {
  DATA_LOADED,
  DATA_REQUESTED
} from '../constants/action-types';

export function getData(url) {
  return {
    type: DATA_REQUESTED,
    payload: { url }
  };
}
