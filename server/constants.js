const CONSTANTS = {};

CONSTANTS.PORT = process.env.PORT || "3000";
CONSTANTS.WEIGHT_TYPE={
    PERKG:'perkg',
    PIECE:'piece',
    MANUAL:'manual',
    FIXED:'fixed'
}

module.exports = CONSTANTS;
