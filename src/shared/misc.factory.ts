import { firstNames, lastNames } from './values';

export function applyChances(obj: any, meta: any) {
  for (const key in meta) {
    if (randomBool(meta[key].chanceOfNull)) {
      delete obj[key];
    }
  }
}

export function getDomain(email: string) {
  if (!email) {
    return undefined;
  }
  const parts = email.split('@');
  return parts[1];
}

export function randomBase64Id(): string {
  return randomString(
    12,
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  );
}

export function validateBase64Id(id: string): boolean {
  const regex = /^[A-Za-z0-9\-_]{12}$/;
  return regex.test(id);
}

export function randomPhoneNumber(): string {
  const areaCode = Math.floor(Math.random() * 900) + 100;
  const prefix = Math.floor(Math.random() * 900) + 100;
  const lineNumber = Math.floor(Math.random() * 9000) + 1000;
  return areaCode.toString() + prefix.toString() + lineNumber.toString();
}

export function randomName(valueLists: Array<Array<string>>): string {
  return valueLists
    .map((list: Array<string>) => list[Math.floor(Math.random() * list.length)])
    .join(' ');
}

export function randomFirstName(): string {
  return firstNames[Math.floor(Math.random() * firstNames.length)];
}

export function randomLastName(): string {
  return lastNames[Math.floor(Math.random() * lastNames.length)];
}

export function randomHexColor(): string {
  const randomHex = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + '0'.repeat(6 - randomHex.length) + randomHex;
}

export function randomString(
  length: number,
  charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
): string {
  let id = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    id += charset.charAt(randomIndex);
  }

  return id;
}

export function randomNumber(): number {
  return Math.random() * 1000;
}

export function randomInt(min: number, max: number) {
  return min + Math.floor(Math.random() * max);
}

export function randomPercent() {
  return randomInt(0, 100) / 100;
}

export function randomBool(chanceOfTrue: number = 0.5): boolean {
  return randomPercent() < chanceOfTrue;
}

export function randomDate() {
  const numDays = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    30,
    31,
    30,
    31
  ]
  const month = randomInt(1, 12);
  return randomInt(2000, 2023)
  + '-' + month
  + '-' + randomInt(1, numDays[month - 1])
}