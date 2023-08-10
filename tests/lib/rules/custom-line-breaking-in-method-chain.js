/**
 * @fileoverview custom-line-breaking-in-method-chain
 * @author Tim Cho
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/custom-line-breaking-in-method-chain"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("custom-line-breaking-in-method-chain", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "Make sure to break your line ",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
