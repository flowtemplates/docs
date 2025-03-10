Prism.languages.ft = {
  comment: /\{#[\s\S]*?#\}/,
  block: {
    pattern: /\{[\{%].*[\}%]}/,
    inside: {
      pipe: {
        pattern: /->\s*\w+/,
        inside: {
          pipe: /->/,
          filterIdentifier: {
            pattern: /\b\w+\b/,
            alias: "function",
          },
        },
      },
      keyword: /\b(?:if|else|switch|case|default|end|do)\b/,
      punctuation: [/\{[\{%]/, /[\}%]}/],
      operator: /(\&\&|and|\|\||or|[\<\>]\=?|[\=\!]\=|\!|not|\*|\+|\-|\/)\s/,
      forging: [/\".*\"/, /\'*.\'/],
      number: [/-?\b\d+(\.\d+)?\b[^.]|\.\d+\b/],
      boolean: /\b(true|false)\b/,
    },
  },
};
