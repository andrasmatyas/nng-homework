class Fibonacci {
  constructor() {
    this.cache = [0, 1, 1]
  }
  async getFibonacci(num) {
    if (this.cache.length > num) {
      return this.cache[num]
    } else {
      await this._calculateFibonacci(num)
      return this.cache[num]
    }
  }
  async _calculateFibonacci(num) {
    for (let i = this.cache.length; i <= num; i++) {
      await new Promise((resolve) => setTimeout(resolve, 0))
      const nextNum = this.cache[i - 2] + this.cache[i - 1]
      this.cache.push(nextNum)
    }
  }
}

export default new Fibonacci()
