import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class Knight extends BasePetType {
    label = 'knight';
    static possibleColors = [PetColor.white];
    sequence = {
        startingState: States.sitIdle,
        sequenceStates: [
            {
                state: States.sitIdle,
                possibleNextStates: [
                    States.walkRight,
                    States.walkLeft,
                    States.runRight,
                    States.runLeft,
                ],
            },
            {
                state: States.walkRight,
                possibleNextStates: [
                    States.walkLeft,
                    States.runRight,
                    States.runLeft,
                    States.sitIdle,
                ],
            },
            {
                state: States.runRight,
                possibleNextStates: [
                    States.runLeft,
                    States.runRight,
                    States.sitIdle,
                ],
            },
            {
                state: States.walkLeft,
                possibleNextStates: [
                    States.walkRight,
                    States.runRight,
                    States.runLeft,
                    States.sitIdle,
                ],
            },
            {
                state: States.runLeft,
                possibleNextStates: [
                    States.runLeft,
                    States.runRight,
                    States.sitIdle,
                ],
            },
            {
                state: States.chase,
                possibleNextStates: [States.idleWithBall],
            },
            {
                state: States.idleWithBall,
                possibleNextStates: [
                    States.walkRight,
                    States.walkLeft,
                    States.runLeft,
                    States.runRight,
                ],
            },
        ],
    };
    get emoji(): string {
        return '🐜';
    }
    get hello(): string {
        return ` ...`;
    }
}

export const KNIGHT_NAMES: ReadonlyArray<string> = ['Hollow', 'White Knight'];
