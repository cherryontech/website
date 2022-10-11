# Contribute to Cherry on Tech website

This is an open source website, currently licensed under the MIT license. While most of the website is a chance for squad members to learn together and show our skills, we welcome certain contributions. You can contribute to our dictionary, or by making a bug report. For installation instructions, see our [README.md file](README.md).

## Contribute to bug reports

We always welcome you to [submit a bug report](https://github.com/cherryontech/website/issues/new?assignees=&labels=bug&template=bug_report.md&title=) if you see something wrong or confusing on the website.

## Contribute to our Tech Dictionary

We also welcome contributions to our [tech dictionary](https://cherryon.tech/dictionary).

### What is the Tech Dictionary?

We have created a dictionary of tech terms that we think will help squad members and community members alike. We know that tech terms can have many meanings, depending on your point of view. In response, our tech dictionary explains terms from different _perspectives_.

### How do I contribute?

Video Tutorial:
https://www.youtube.com/watch?v=I7WsK5amUTA 


1. Navigate to the [Dictionary page](https://cherryon.tech/dictionary/) of our website, and find an entry you would like contribute to.
1. If you see a dictionary entry on our site that does not yet have a definition, you may submit a pull request to address it. Here's how we think about the dictionary entries:

- If a term probably only has one meaning, then we give it a _definition_.
- If a term could mean different things to different roles, then we give it one or more _perspectives_.

All entries must be written in the following format, so that they can be processed properly. Please note that admins may edit the entry for clarity and/or formatting.

**Note:** You do not need to be assigned an issue in order to contribute a dictionary definition. You can make a PR for any term you like!
### Tech Dictionary example

```
---
title: naptime
definition: A nap is a short period of sleep.
sources:
- sourceurl: https://example.com/things-i-need/naptime
perspectives:
- meaning: a terrible time when I can't play anymore
  role: child
- meaning: a wonderful time when I get a break
  role: parent

---
```
**Note:** Write the perspective's `meaning` with no puncuation or capitalization. The strings will be compiled to make a sentence that looks like this: `As a <role>, <term> means <meaning>.`

### How do I test my contribution?

#### Check the deploy preview build on Netlify
One way to test your contribution is to make a PR and then check your deploy preview build. To do this:
- Make a PR with your fabulous changes! ([Github documentation on how to make a PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request))
- Go to the Github page of your PR (Note: you may have to wait a few minutes for the deploy preview to be ready!)
- In the checks table, click on the "details" link to the right of the "netlify/cherryontech/deploy-preview — Deploy Preview ready!"
- Navigate to the page where your contribution will live (likely the /dictionary page)

### Serve locally
If you are interested in learning more about web development, serving locally is a great way to experiment with your contribution before you make a PR. To do this:
- Follow the installation steps on our [README.md file](README.md)
- Make your fabulous changes!
- Go to the URL you got when you ran the serve command
- Navigate to the page where your contribution will live (likely the /dictionary page)
