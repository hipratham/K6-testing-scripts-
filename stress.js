import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 100 },   // Ramp-up to 100 users
    { duration: '30s', target: 200 },  // Push harder
    { duration: '30s', target: 300 },  // Max load
    { duration: '30s', target: 0 },    // Ramp-down
  ],
};

export default function () {
  http.get('https://www.daraz.com.np');
  sleep(1);
}
