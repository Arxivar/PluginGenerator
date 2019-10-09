module.exports = {
    "env": {
        "browser": true,
        "jquery": true,
        "es6": false
    },

    "globals": {
        "global": true,
        "angular": true,
        "module": true,
        "kendo": true,
        "confirm": true,
        "alert": true,
        "JL": true,
        "Dropzone": true,
        "sinon": true,
        "describe": true,
        "beforeEach": true,
        "inject": true,
        "it": true,
        "expect": true,
        "assert": true,
        "require": true,
        "Modernizr": true,
        "moment": true,
        "UUID": true,
        "exports": true,
        "test": true,
        "jest": true,
        "afterEach": true,
        "process": true,
        "__dirname": true,
        "__webpack_public_path__": true

    },
    "rules": {
        "no-bitwise": [
            2,
            {
                "int32Hint": true
            }
        ],
        "camelcase": [
            1,
            {
                "properties": "always"
            }
        ],
        "curly": [
            2,
            "all"
        ],
        "eqeqeq": 2,
        "wrap-iife": [
            2,
            "any"
        ],
        "no-use-before-define": 1,
        "new-cap": [2, {
            "newIsCapExceptions": ["moment"],
            "capIsNewExceptions": ["JL"]
        }],
        "no-caller": 2,
        "quotes": [
            2,
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "no-undef": 2,
        "no-unused-vars": [1, {
            "args": "after-used"
        }],
        "strict": 0,
        "dot-notation": 0,
        "operator-linebreak": [
            1,
            "after"
        ],
        "max-len": [
            1,
            700
        ],
        "no-multi-str": 2,
        "no-mixed-spaces-and-tabs": 1,
        "space-unary-ops": 0,
        "one-var": [
            2,
            "never"
        ],
        "brace-style": [2, "1tbs", {
            "allowSingleLine": true
        }],
        "space-return-throw-case": 0,
        "keyword-spacing": [
            1,
            {
                "after": true
            }
        ],
        "space-infix-ops": 1,
        "space-before-blocks": [
            1,
            "always"
        ],
        "eol-last": 1,
        "space-in-parens": [
            1,
            "never"
        ],
        "no-multiple-empty-lines": 1,
        "no-with": 2,
        "space-before-function-paren": [
            1,
            "never"
        ],
        "no-spaced-func": 2,
        "key-spacing": [
            1,
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "semi": [
            2,
            "always"
        ],
        "valid-jsdoc": 1
    }
}