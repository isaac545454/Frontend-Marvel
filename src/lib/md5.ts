import crypto from 'crypto';

const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!;
const privateKey = process.env.MARVEL_PRIVATE_KEY!;

export function md5() {
  const timestamp = Number(new Date()); 
  const toHash = String(timestamp) + privateKey + publicKey;

  const hash = crypto.createHash('md5').update(toHash).digest('hex');

  return {
    ts: timestamp,
    hash,
    apikey: publicKey,
  };
}
