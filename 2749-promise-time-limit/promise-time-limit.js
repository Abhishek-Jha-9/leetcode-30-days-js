/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((res, rej) => {
      const id = setTimeout(() => {
        rej("Time Limit Exceeded");
      }, t);
      fn(...args)
        .then((s) => res(s))
        .catch((e) => rej(e))
        .finally(() => clearTimeout(id));
    });
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */