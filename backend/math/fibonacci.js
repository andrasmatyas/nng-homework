class Fibonacci {
  constructor() {
    this.cache = [0, 1, 1]
  }
  getFibonacci(num) {
    if (this.cache.length > num) {
      return this.cache[num]
    } else {
      this.calculateFibonacci(num)
      return this.cache[num]
    }
  }
  calculateFibonacci(num) {
    for (let i = this.cache.length; i <= num; i++) {
      const nextNum = this.cache[i - 2] + this.cache[i - 1]
      this.cache.push(nextNum)
    }
  }
}

export default new Fibonacci()
