import test from 'ava';
import { Wallhaven } from '../requests';

test('search', async t => {
  const client = new Wallhaven();
  const { data } = await client.search({
    search: 'Tokyo Ghoul'
  });
  t.is(data.length > 0, true, `Data Entries: ${data.length}`);
});

test('random', async t => {
  const client = new Wallhaven();
  const requestPrev = await client.random('Naruto');
  const requestNext = await client.random('Tokyo Ghoul');
  t.is(requestNext.data[0].id !== requestPrev.data[0].id, true);
});
