import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '5s',
};

export default function () {
  http.get('https://www.daraz.com.np'); // Only if you have permission
  sleep(1);
}
