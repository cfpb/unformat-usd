/**
 * @param  {string} str  USD-formatted string to be converted into a number.
 * @return {string}      The converted number OR the original argument if a
 *   string was not passed.
 */
function unFormatUSD(str) {
  return typeof str === "string"
    ? parseFloat(str.replace(/[^0-9\.]/g, "")) || str
    : str;
}

export { unFormatUSD };
