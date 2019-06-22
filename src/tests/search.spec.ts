import test from 'ava';
import { Wallhaven } from '../requests';

test('search', async t => {
  const client = new Wallhaven();
  const { data } = await client.search({
    search: 'Tokyo Ghoul'
  });
  t.is(data.length > 0, true, `Data Entries: ${data.length}`);
});
