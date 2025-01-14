import { PublicKey } from '@near-js/crypto';
import { Assignable } from '@near-js/types';
import BN from 'bn.js';

import { IAction } from './actions';

export class DelegateAction extends Assignable {
    senderId: string;
    receiverId: string;
    actions: Array<IAction>;
    nonce: BN;
    maxBlockHeight: BN;
    publicKey: PublicKey;
}

/**
 * Compose a delegate action for inclusion with a meta transaction signed on the sender's behalf
 * @params.actions The set of actions to be included in the meta transaction
 * @params.maxBlockHeight The maximum block height for which this action can be executed as part of a transaction
 * @params.nonce Current nonce on the access key used to sign the delegate action
 * @params.publicKey Public key for the access key used to sign the delegate action
 * @params.receiverId Account ID for the intended receiver of the meta transaction
 * @params.senderId Account ID for the intended signer of the delegate action
 */
export function buildDelegateAction({
    actions,
    maxBlockHeight,
    nonce,
    publicKey,
    receiverId,
    senderId,
}: DelegateAction): DelegateAction {
    return new DelegateAction({
        senderId,
        receiverId,
        actions,
        nonce,
        maxBlockHeight,
        publicKey,
    });
}
