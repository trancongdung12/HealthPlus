import React, {useState} from 'react';
import { RSA } from 'react-native-rsa-native';
import base64 from 'react-native-base64';

export default function* formartData () {
    [hashConvert, setHashConvert] = useState('');
    let publicKey = "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA0Sq91hV6abrihhZoqXq3jSt2lk/cW/HefVuG4dnF7wAV98rDu5tMSuqT+jKzlgfV8geePao57pKGQq18IGRDpEiC7LRqT88o2evnnU93KvnV6ZNFtANPxCIMmXCbFCMoQbnoI1OTDoIrYY6pdCbXxu31la5wlbE4T/eX8YUhim80wsHl2Am48q5vTbO5KNakdfLhbzZ7Q0/XM56A/UckSpNwRK0ewlC6GPvo3d/fYO5vtzLPgqfjJDzIkVstXKSAp/kP8FHOVBE3lXE7Y4vKARnYAAP6C1BybukI8BpBPRECqD6jaM7/nOkmLl2TYgBTXJ0R4X9mLou9c+26SU2m5y9B5jdBFpYV67/Y+tanV0FoZcM56qlFGqc3hyfz9cTW9FbDbh9pofo0eSrOvyM9ndjm0DOkiSxlISp5zFfANOxcX1kSNldlkGBiKp9eBGiccDoDNXKRVlRMBRDVTH2lYt15SJOCYEhlzqf+xzgByhTX0Khfvol2yVEvIXkIovJQhWJ648KFTD4oiY7lIKqHXQ9YqZoSIfdn+DLQ6FCuK1Y74Tn0UqTtXvRBCz1Kc6cko56quvWEKCesz03bQ1RuEUiqOiA0CQ3rUWIayG67UiW3/9gWiyB62RX9gpXjIy+PVjh5sSEMmU9YQ5Q45cYHtr/z2Ym3XWko5fQ8+Lsz2ocCAwEAAQ==";
    RSA.generateKeys(4096) // set key size
    .then(keys => {
        // console.log('4096 private:', keys.private); // the private key
        // console.log('4096 public:', keys.public); // the public key
        RSA.encrypt(publicKey, keys.public)
        .then(encodedMessage => {
            setHashConvert(encodedMessage);
        });
    });

    console.log("data %%%%%%%%% " + JSON.stringify(hashConvert));
    return hashConvert;
}
