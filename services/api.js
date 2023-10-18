import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mkcltiphlgeyruxlgjzf.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rY2x0aXBobGdleXJ1eGxnanpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MzM2MDcsImV4cCI6MjAxMzIwOTYwN30.nTBZU_K37dx2lZYOG0XlG2W15jSPW24NAzWxfrvGJSA',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rY2x0aXBobGdleXJ1eGxnanpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2MzM2MDcsImV4cCI6MjAxMzIwOTYwN30.nTBZU_K37dx2lZYOG0XlG2W15jSPW24NAzWxfrvGJSA',
  },
});
