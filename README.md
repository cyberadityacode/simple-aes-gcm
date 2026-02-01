# AES-GCM Crypto Library

A simple, lightweight wrapper for the Web Crypto API.

## Installation

```bash
npm install your-package-name
```

## Usage

```javascript
import { deriveKey, encrypt, decrypt } from "your-package-name";

const key = await deriveKey("my-password", "unique-salt");
const encrypted = await encrypt("Hello World", key);
const originalText = await decrypt(encrypted, key);
```
