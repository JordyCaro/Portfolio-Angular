import { PositionInterface } from '../models/interfaces/position.interface';
import { Multip } from './positions/multip';
import { infoJr } from './positions/freeJr';
import { MetNet } from './positions/metnet';
import { Belcorp } from './positions/belcorp';
import { CreativeInnovation } from './positions/creativeInnovation';
import { Good } from './positions/good';
import { MetNetLead } from './positions/metnetLead';
import { Innclod } from './positions/innclod';

export const positions: PositionInterface[] = [
  Innclod,
  MetNetLead,
  Good,
  CreativeInnovation,
  Belcorp,
  MetNet,
  infoJr,
  Multip
];

export const positionsSorted: PositionInterface[] = positions.sort((p1, p2) => p1.position >= p2.position ? 1 : -1);

export const listPositions: PositionInterface[] = positionsSorted.filter(p => p.isActive);
