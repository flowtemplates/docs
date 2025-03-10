---
sidebar_position: 4
sidebar_label: Statement blocks
title: Statement blocks
---

## Few rules of statement blocks

- Always uses `{% ... %}` (Percentage) tags.
- It always ends by `{% end %}` tag.

:::note About «HTML» moment
The documentation in the examples will use HTML because it is hardcore simple to illustrate, though Templtes Flow templates are used for code generation rather than dynamic page templates.
:::

## If condition

The basic constructs of the language are in statement blocks. Here is a simple example of an if-condition.

```ft title="some.html.ft"
<nav>
  {% if some_flag == "foo" and greeting %}
    <h1>Hello world!</h1>
  {% else %}
    <p>...</p>
  {% end %}
</nav>
```

```ft title="berries.html.ft"
<nav>
  {% if berry_flag == "strawberry" %}
    <a>Strawberry</a>
  {% else if berry_flag == "black" %}
    <a>Blackberry</a>
  {% else %}
    <p>Ooops...</p>
  {% end %}
</nav>
```

It is fair to say that we have not written the most optimal code, so there is a simple switch-case construction in the language.

## Switch construction

This is much better, the switch construct replaces several ifs at once. It provides a more visual way to compare an expression to several variants at once.
A `{% switch %}` construct has one or more `{% case %}` blocks and an optional `{% default %}` block.

```ft title="refactorBerries.html.ft"
<nav>
  {% switch berry_flag %}
    <a class="navbar__item">Strawberry</a>
  {% case "black" %}
    <a class="navbar__item">Blackberry</a>
  {% default %}
    <p>Ooops...</p>
  {% end %}
</nav>
```

The switch operator sequentially compares the berry_flag with the values in the case. As soon as the first match is found, further checks are stopped.
