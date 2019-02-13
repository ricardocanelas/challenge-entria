export const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

export const dynamicSort = (property, order = 'asc') => {
  return function (x, y) {
    const a = x[property];
    const b = y[property];
    if (isNaN(a) && isNaN(b)) {
      return order === 'desc' ? a.localeCompare(b) : b.localeCompare(a);
    } else {
      return order === 'desc' ? b - a : a - b;
    }
  }
}
