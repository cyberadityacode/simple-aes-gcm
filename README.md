# AES-GCM Crypto Library

A simple, lightweight wrapper for the Web Crypto API. Intended for Browser/Web Crypto API environments

## npm : 

https://www.npmjs.com/package/@cyberadityacode/simple-aes-gcm

## Installation

```bash
npm i @cyberadityacode/simple-aes-gcm
```

## Usage

```javascript
import { deriveKey, encrypt, decrypt } from "simple-aes-gcm";

const key = await deriveKey("my-password", "unique-salt");
const encrypted = await encrypt("Hello World", key);
const originalText = await decrypt(encrypted, key);
```

## Author

Aditya Dubey
(cyberadityacode)
