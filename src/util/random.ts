import { cryptoRandomStringAsync } from 'crypto-random-string';

export async function getRandomString(length: number): Promise<string> {
  return await cryptoRandomStringAsync({length});
}
