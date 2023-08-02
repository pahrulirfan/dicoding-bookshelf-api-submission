module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true
    },
    extends: [
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 12
    },
    rules: {
        'eslint-disable': [
            'eol-last',
            'indent',
            'space-before-function-parent'
        ]
    }
}