---
sidebar_position: 1
sidebar_label: Quick start
title: Quick start
---

# Quick start

:::note About this page
This article will help you quickly learn the basics of the language. However, if you prefer, you can skip this section and go straight to the language references that begin in the next document.
:::

## Tags

There are three types of tags used in the Templates Flow language:

- Hash tag `{# ... #}`.
- Percentage tag `{% ... %}`.
- Bracket tag `{{ ... }}`.

They are used to form all blocks in templates, no new tags are expected to be added. We'll discuss their application a little bit, but you can read more about them in the following articles. Let's go!

### Hash tag

Used for comments **only**, can be multi-line, always looks the same.

```ft title="comments.html.ft"
{# We talk about berries in html, wow! #}
{#
  Multi-line berries list
  - Blueberries 🫐
  //TODO: Add strawberry
#}
```

### Percentage tag

Used only for statement blocks (more on that later), always single line.

```ft title="statements.html.ft"
{# Stupid if-condition #}
{% if 1 > 0 %}
  <p>Hello world, berries!</p>
{% end %}

{# Switch-case condition #}
{% switch strawberry_flag %}
  {% case "small" %}
    <h2>Small berry</h2>
  {% case "huge" %}
    <h1>Huge berry</h1>
  {% default %}
    <a>No berries...</a>
{% end %}
```

Statement blocks always closed by `{% end %}` tag, The word end is a service word and cannot be used in any other sense.

### Bracket tag

Used for expressions blocks, always single line.

```ft title="foo.html.ft"
{# Expression block #}
{{ blackberry_flag }}
{{ blackberry_flag -> upper }}
{# Most often, variables are output, but they hide something interesting 🤫 #}
```

Congratulations, now you know all kinds of tags and have even seen a couple of templates flow language constructs, you are ready to learn more, good luck ❤️
