/**
 * @fileoverview custom-line-breaking-in-method-chain
 * @author Tim Cho
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'layout', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'Require line breaking after the second method in a chain',
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: 'whitespace', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    let chainDepth = 0;
    
    return {
      CallExpression: function (node) {
        if (node.parent && node.parent.type === 'CallExpression') {
          chainDepth++;
          
          if (chainDepth === 2) {
            context.report({
              node: node,
              message: 'Expected a line break after the second method in a chain.',
              fix: function (fixer) {
                return fixer.insertTextAfter(node, '\n');
              },
            });
          }
        }
      },
    };
  },
};
