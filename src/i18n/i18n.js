var keysets = {};

module.exports = keyset => {
    Object.assign(keysets, keyset);
    return (keyset, key) => Object(keysets[keyset])[key];
}
