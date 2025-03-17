Prism.languages.json = {
  property: {
    pattern: /"(?:\\.|[^"])*"(?=\s*:)/,
    greedy: true,
    inside: {
      quote: /"/,
    },
  },
  meaning: {
    pattern: /"(?:\\.|[^"])*"(?!\s*:)/,
    greedy: true,
    inside: {
      quote: /"/,
    },
  },
  number: /-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/,
  punctuation: /[{}\[\],]/,
  operator: /:/,
  boolean: /\b(?:true|false)\b/,
  null: /\bnull\b/,
};
