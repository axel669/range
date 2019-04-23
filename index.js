'use strict';

const range = (start, end = null, step = 1, map = i => i) => {
  	if (typeof end === "function") {
      	map = end;
      	end = null;
    }
    if (typeof step === "function") {
        map = step;
        step = 1;
    }
  	if (end === null) {
      	[start, end] = [0, start];
    }
    const factor = (end < start) ? -step : step;
    return Array.from(
        {length: Math.floor(Math.abs(end - start) / step)},
        (_, i) => map(start + i * factor)
    );
};

module.exports = range;
