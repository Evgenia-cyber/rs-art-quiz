import { MAX_PERCENT, MIN_PERCENT } from '../constants';

const paintProgressBackground = (currentValueInPercent) =>
  `linear-gradient(to right, #9c702e ${MIN_PERCENT}%, #9c702e ${currentValueInPercent}%, #a99578 ${currentValueInPercent}%, #a99578 ${MAX_PERCENT}%)`;

export default paintProgressBackground;
