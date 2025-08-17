const request = require('supertest');
const express = require('express');
const app = require('../app');

describe('App Tests', () => {
  it('should return OK on /health', async () => {
    const res = await request('http://localhost:3000').get('/health');
    expect(res.status).toBe(200);
    expect(res.text).toBe('OK');
  });
});
