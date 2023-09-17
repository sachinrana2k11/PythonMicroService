import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://192.168.xx.xxx/news?country=us');
  sleep(1);
}
