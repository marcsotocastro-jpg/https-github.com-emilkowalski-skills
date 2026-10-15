---
id: summarize
slug: summarize-documents-ai
cat: work
title: How to summarise documents, PDFs and meetings with AI
desc: Useful summaries of reports, contracts, articles and meeting notes in minutes. What to ask for, how to stop the AI making things up, and prompts for each case.
date: 2026-09-15
updated: 2026-10-07
level: beginner
prompt: Summarise this document in 5 key points and list the pending decisions. Cite the page for each fact.
---
Summarising is one of the things artificial intelligence does best. A forty-page report, a long contract or messy meeting notes can become a clear summary in a minute. But a summary is only useful if it's faithful to the original and made for what you need. In this guide you'll see how to ask for useful summaries and how to check nothing is missing or added.

## How to give the document to the AI

You have three options, depending on the tool and the document:

- **Upload the file.** Many assistants let you attach PDFs, text documents or spreadsheets.
- **Paste the text.** Works with any tool. If the document is very long, paste it in parts.
- **Share a link.** Some tools can read web pages, but they don't always access all the content. If the summary looks incomplete, paste the text instead.

>! **Careful:** before uploading a document, consider whether it contains personal data or confidential information. If so, anonymise it or check whether your company allows that tool. We explain how in [what not to share with an AI](guia:privacy).

## The golden rule: say what the summary is for

"Summarise this document" gives you a generic summary. What makes a summary useful is knowing who will read it and why. Compare:

- A summary to decide whether to read the whole document.
- A summary to brief your manager in two minutes.
- A summary to study a topic.
- A summary to know what you personally need to do.

Each one highlights different things. Always tell the AI.

## Prompts for each type of document

### Reports and work documents

```prompt
Summarise the attached document for someone who has 2 minutes. Structure:
1. The main conclusion in one sentence.
2. The 5 key points, with the important figures.
3. Risks or problems it mentions.
4. Pending decisions or actions.
Give the page or section each fact comes from. If something in the document is unclear, say so instead of assuming.
```

Asking for the page or section of each fact is the best way to check the summary afterwards.

### Contracts and legal documents

AI helps you understand a contract, but it doesn't replace a professional when a lot is at stake.

```prompt
Explain this contract in plain language. I want to know: what I'm committing to, what the other party is committing to, the duration and how to cancel, penalties, payments and deadlines, and any clauses that are often problematic or unusual. Quote the clause number for each point. Don't give me legal advice: just explain what it says.
```

### Long articles and news

```prompt
Summarise this article in 5 lines. Then clearly separate: what are verifiable facts, what are the author's opinions and which data come from sources. Finish with 2 questions I should ask myself to understand the topic better.
```

### Meetings and notes

If you have a transcript or your notes, AI can turn them into clear minutes.

```prompt
Turn these meeting notes into minutes with: attendees, topics discussed (a short paragraph each), decisions made and a table of tasks with owner and deadline. If a task has no owner or deadline, mark it "unassigned". Don't add anything that isn't in the notes.

[paste your notes or the transcript]
```

> **Tip:** before recording or transcribing a meeting, tell attendees and ask for their permission. Besides being the right thing to do, it's often legally required.

## How to check the summary is reliable

AI summaries are usually good, but they can leave out important nuances or, occasionally, include something that isn't in the original. For important documents:

1. **Check the figures and names** against the original, using the page references you asked for.
2. **Ask what's missing:**

```prompt
What important information from the document did you leave out of the summary? Is there any exception, condition or fine print that could change the conclusion?
```

3. **Ask specific questions** about the document, as you would a colleague who has read it: "What exactly does it say about payment terms?"

## Very long documents

If the document is so long the tool won't take it all, or the summary feels shallow, split the work:

1. Summarise each chapter or section separately.
2. Paste all the partial summaries into a new conversation.
3. Ask for a final summary based on them.

That way the middle sections aren't lost, which is what often happens with very long documents.

## Beyond summaries

Once the AI has read a document, you can ask for much more than a summary:

- "Create 10 exam questions on this topic." Useful for studying; more ideas in [how to study with AI](guia:study).
- "Write an email to my team with what they need to know from this report."
- "Compare these two documents and list the differences."
- "Turn the figures in this report into a table."

## FAQ

### Can AI summarise a scanned PDF?

It depends on the tool. Some recognise text in images and scans, but quality drops if the scan is poor. If the result looks odd, run the PDF through a text recognition (OCR) tool first.

### Is it reliable to summarise important documents with AI?

It's very useful as a first step, but for documents with legal, medical or financial consequences, always review the original and consult a professional.

### How long should a good summary be?

It depends on the purpose, but a good rule of thumb is 5% to 10% of the original, or whatever can be read in two minutes. Say so in the prompt: "maximum 150 words" or "5 points".
