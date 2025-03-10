---
sidebar_position: 2
sidebar_label: Logical operators
title: Logical operators
---

The expression block supports various logical and arithmetic operators:

- Arithmetic: `+`, `-`, `*`, `/`
- Comparison and logical: `||`, `&&`, `>`, `=>`, `<`, `<=`, `==`, `!=`, `!`
- Ternary operators: `? .. : ..`, `do .. else ..`
- Alternative keywords: `or`, `and`, `not`, `is`,

```ft title="candies.html.ft"
<nav>
  {% if candies > 100 %}
    <p>{{ candies }} - too sweet...</p>
  {% else if candies < 10 and berries > 100 %}
    <a>Good for your health</a>
  {% else %}
    <p>Ooops...</p>
  {% end %}
</nav>
```

:::note About duplication
Since the template language is designed to support multiple programming languages, some operators have duplicate representations.
For example, logical "and" can be written as both `&&` and `and`.
:::
