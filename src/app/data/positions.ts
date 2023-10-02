//#region Imports

import { PositionInterface } from '../models/interfaces/position.interface';
import { infoJr } from './positions/freeJr';
import { MetNet } from './positions/metnet';

//#endregion

export const positions: PositionInterface[] = [
  infoJr,
  MetNet,
];

export const positionsSorted: PositionInterface[] = positions.sort((p1, p2) => p1.position >= p2.position ? 1 : -1);

export const listPositions: PositionInterface[] = positionsSorted.filter(p => p.isActive);
