---
id: privacy
slug: ai-privacy
cat: start
title: What you should never share with an AI
desc: A clear list of what not to paste into ChatGPT, Gemini or Claude, how to anonymise documents and which privacy settings to check.
date: 2026-08-27
updated: 2026-10-11
level: beginner
prompt: Anonymise this text: replace names, addresses, phone numbers and ID numbers with generic labels.
---
AI assistants are convenient precisely because you can paste anything into them: a contract, an email, a spreadsheet. That convenience comes with a risk. What you type leaves your computer and is processed on the servers of the company running the service. In this guide you'll see what never to share, how to use AI with sensitive documents without exposing yourself, and which settings are worth reviewing.

## What happens to what you type

Every tool has its own policy, and policies change over time. In general, keep three things in mind:

- **Your conversations are stored** in your history, at least for a while, so you can come back to them.
- **Some tools may use conversations to improve their models** unless you switch it off in the settings or use a business version with different terms.
- **People may review conversations** in certain cases, for example to detect abuse or improve quality.

This isn't about being afraid. It's about acting as you would with any online service: some things just don't go through a channel you don't control.

## What you should never paste

1. **Passwords, verification codes and access keys.** No task needs your real password.
2. **Bank details:** card numbers, full account numbers, screenshots of your online banking.
3. **ID documents:** ID card, passport, social security or national insurance number.
4. **Identifiable medical information:** reports with your name or someone else's, diagnoses, prescriptions.
5. **Other people's data without their permission:** clients, students, patients, employees, relatives.
6. **Confidential company information:** unsigned contracts, unpublished figures, strategy plans, private code, unless your company uses an approved version for this.
7. **Anything you wouldn't want made public.** If a leak would embarrass you or cause problems, don't paste it.

>! **Careful:** if you work with client or patient data, sharing it with an external tool may break data protection rules such as the GDPR. Check with your company or the person responsible for privacy first.

## How to use AI with sensitive documents: anonymise

The good news is that most tasks don't need the real data. The AI doesn't need to know your client is called Laura Smith and lives on High Street to help you reply to her. Replace details with labels before pasting:

| Real data | Replace with |
|---|---|
| Full names | Client A, Employee B, Patient 1 |
| Addresses | [ADDRESS] |
| Phone numbers and emails | [PHONE], [EMAIL] |
| ID and account numbers | [ID], [ACCOUNT] |
| Company name | The company, Supplier X |
| Confidential exact figures | Approximate values or percentages |

For long documents, use your word processor's find-and-replace to swap names and numbers before uploading. If the text isn't sensitive any more (for example, an email with no personal data), you can use this prompt to clean up remaining details:

```prompt
Anonymise the following text. Replace people's names with "Person A", "Person B"…, companies with "Company 1"…, and any address, phone number, email, ID or account number with a label in square brackets. Don't change anything else. At the end, list the replacements you made.

[paste the text]
```

Once you have the answer, put the real details back in your own document.

## Settings worth checking today

Names vary between tools, but look for these options in your account settings:

- **Using your data to train or improve the model.** Many tools let you switch this off.
- **Chat history.** Check whether you can delete old conversations or use a temporary mode that doesn't save them.
- **Memory or personalisation.** Some tools remember things about you across conversations. Review what's been saved and delete what you don't want.
- **Connected apps.** If you've connected your email, calendar or cloud storage, review what permissions they have.

> **Tip:** spend five minutes once a month reviewing these settings and deleting conversations that contain information you no longer need. It's the same digital hygiene you'd apply to your inbox.

## At work: ask before you use it

Many companies already have rules about which AI tools can be used and with what information. Some offer business versions with stricter privacy terms. Before pasting any work document, check:

- Whether your company allows that tool.
- Whether there's an approved version (for example, built into the office suite you already use).
- What kind of information is off-limits.

If there are no rules, suggest creating some. It's better than everyone deciding on their own.

## Watch out for what the "AI" asks of you

Some websites and browser extensions pose as AI tools to steal data. Be suspicious if:

- An "AI" asks for the password to another account, your bank details or to install unknown software.
- You get an email or message claiming to be from an AI tool asking you to verify your account through a link.
- A browser extension wants permission to read every site you visit.

Always go to the official address by typing it yourself, or use the official app from your phone's app store.

## FAQ

### Do AI companies read my conversations?

It depends on the tool and your settings. Conversations are generally processed automatically, but some may be reviewed by people in specific cases. Read the tool's privacy policy and switch off the options you don't want.

### Can I upload a PDF with personal data if I delete the chat afterwards?

Deleting the conversation reduces the risk but doesn't guarantee the data wasn't processed or temporarily stored. The safest approach is to anonymise the document before uploading it.

### Is it safe to use AI to write to a client?

Yes, as long as you don't include their personal details. Describe the situation with labels ("a client is complaining about a five-day delay") and add the name and details yourself at the end.
