# Contribute to Cherry on Tech website

This is an open source website, currently licensed under the MIT license. While most of the website is a chance for squad members to learn together and show our skills, we welcome certain contributions. You can contribute to our dictionary, or by making a bug report. For installation instructions, see our [README.md file](README.md).

## Contribute to bug reports

We always welcome you to [submit a bug report](https://github.com/cherryontech/website/issues/new?assignees=&labels=bug&template=bug_report.md&title=) if you see something wrong or confusing on the website.

## Contribute to our Tech Dictionary

We also welcome contributions to our [tech dictionary](https://cherryon.tech/dictionary).

### What is the Tech Dictionary?

We have created a dictionary of tech terms that we think will help squad members and community members alike. We know that tech terms can have many meanings, depending on your point of view. In response, our tech dictionary explains terms from different _perspectives_.

### How do I contribute?

1. Navigate to the [Dictionary page](https://cherryon.tech/dictionary/) of our website, and find an entry you would like contribute to.
1. If you see a dictionary entry on our site that does not yet have a definition, you may submit a pull request to address it. Here's how we think about the dictionary entries:

- If a term probably only has one meaning, then we give it a _definition_.
- If a term could mean different things to different roles, then we give it one or more _perspectives_.

All entries must be written in the following format, so that they can be processed properly. Please note that admins may edit the entry for clarity and/or formatting.

### Tech Dictionary example

Here is an example that uses perspectives:

```
---
title: div
definition:
sources:
- sourceurl: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
perspectives:
- meaning: a div is a container that holds content
  role: Web Developer

---
```

Here is an example that uses a definition instead of perspectives:

```
---
title: command line application
sources:
- sourceurl: https://example.com/example-link-here
definition: Computer programs with a text interface, which you usually run directly
  from your terminal.
perspectives:

---
```
