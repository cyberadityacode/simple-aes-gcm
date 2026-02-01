import test from 'node:test';
import assert from 'node:assert';
import { deriveKey, encrypt, decrypt } from '../src/index.js';
import { webcrypto } from 'node:crypto';

// Polyfill crypto for Node.js if needed (though node 20+ has it globally)
if (!globalThis.crypto) {
    globalThis.crypto = webcrypto;
}

test('encryption and decryption should work', async () => {
  const password = 'test-password';
  const salt = 'test-salt';
  const text = 'Hello, AES-GCM!';

  const key = await deriveKey(password, salt);
  const encrypted = await encrypt(text, key);
  const decrypted = await decrypt(encrypted, key);

  assert.strictEqual(decrypted, text);
});

test('decryption should fail with wrong key', async () => {
  const password = 'test-password';
  const salt = 'test-salt';
  const text = 'Hello, AES-GCM!';

  const key = await deriveKey(password, salt);
  const wrongKey = await deriveKey('wrong-password', salt);
  
  const encrypted = await encrypt(text, key);
  
  await assert.rejects(async () => {
    await decrypt(encrypted, wrongKey);
  });
});
