import { PositionInterface } from '../models/interfaces/position.interface';
import { Multip } from './positions/multip';
import { infoJr } from './positions/freeJr';
import { MetNet } from './positions/metnet';
import { Belcorp } from './positions/belcorp';

export const positions: PositionInterface[] = [
  Multip,
  infoJr,
  MetNet,
  Belcorp,
];

export const positionsSorted: PositionInterface[] = positions.sort((p1, p2) => p1.position >= p2.position ? 1 : -1);

export const listPositions: PositionInterface[] = positionsSorted.filter(p => p.isActive);
