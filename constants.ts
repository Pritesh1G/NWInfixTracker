import type { ChestRun } from './types';

// The 'completed' property will be added dynamically in the App component.
type ChestRunData = Omit<ChestRun, 'completed'>;

export const CHEST_RUN_LOCATIONS: ChestRunData[] = [
  { id: 'myrk', name: 'MYRK', subtitle: 'Myrkgard Cathedral', zone: 'Shattered Mountain (N ⬆️)', shrine: 'War Camp Shrine (Center )' },
  { id: 'mines', name: 'MINES', subtitle: 'Odeum of Aeternum', zone: 'Shattered Mountain (N ⬆️)', shrine: 'Alazar\'s Recall (Outpost)' },
  { id: 'imp', name: 'IMP', subtitle: 'Imperial Palace', zone: 'Ebonscale (West ⬅️)', shrine: 'Imperial Shrine (SW ↙️)' },
  { id: 'atta', name: 'ATTA', subtitle: 'Attalus\'s Foundry', zone: 'Ebonscale (W ⬅️)', shrine: 'Tiaowen Shan Shrine (N⬆️)' },
  { id: 'ck', name: 'CK', subtitle: 'Cayo de la Muerte', zone: 'Cutlass Keys (S ⬇️)', shrine: 'Admirals Shrine (SE ↘️)' },
  { id: 'siren', name: 'SIREN', subtitle: 'Siren\'s Stand', zone: 'Reekwater (SE↘️)', shrine: 'Farharbor City (Outpost)' },
  { id: 'scorpius', name: 'SCORPIUS', subtitle: 'Scorpius', zone: 'Mourningdale (NE↗️)', shrine: 'Shrine of Orion (NE ↗️)' },
  { id: 'passage', name: 'PASSAGE', subtitle: 'Archivum Passage', zone: 'Nighthaven (NW ↖️)', shrine: 'Church of Courts (S ⬇️)' },
  { id: 'lib', name: 'LIB', subtitle: 'Varleam Library', zone: 'Nighthaven (NW ↖️)', shrine: 'Church of Courts (S ⬇️)' },
  { id: 'roost', name: 'ROOST', subtitle: 'Nightbreak Roost', zone: 'Nighthaven (NW ↖️)', shrine: 'Church of last Days (Center)' },
  { id: 'pool', name: 'POOL', subtitle: 'Eternal Pool', zone: 'Reekwater (SE↘️)', shrine: 'Edgeflow Shrine (NW ↖️)' },
  { id: 'tor', name: 'TOR', subtitle: 'Tor To-Riven', zone: 'Edengrove (NE ↗️)', shrine: 'Elysian Shrine (E ➡️)' },
  { id: 'eri', name: 'ERI', subtitle: 'Eridanus', zone: 'Restless Shore (E ➡️)', shrine: 'Shrine Of Sisyphos (E ➡️)' },
  { id: 'arc', name: 'ARC', subtitle: 'Arcanist\'s Hold', zone: 'Nighthaven (W ⬅️)', shrine: 'Church of Fates (W ⬅️)' },
];