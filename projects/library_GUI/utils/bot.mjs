import { question } from 'readline-sync';

export default class AskBot {
  /**
   * method that prompts the user with the provided `query` until a non-empty answer is provided.
   * @param {string} query 
   * @returns {string}
   */
  static askQuestion(query) {
    let answer;
    while (true) {
      answer = question(query)
      if (answer) break
      console.log('Please provide an answer')
    }
    return answer.trim()
  }
}