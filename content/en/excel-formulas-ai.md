---
id: excel
slug: excel-formulas-ai
cat: work
title: How to create Excel and Google Sheets formulas with AI
desc: Ask for formulas in plain words, understand the ones you inherit and clean up messy data without coding. With XLOOKUP, SUMIFS and more.
date: 2026-09-18
updated: 2026-10-06
level: intermediate
prompt: Write an Excel formula that sums sales in column D only when the region in column B is "North".
---
Spreadsheets are one of the most powerful tools in everyday work, but many people never go beyond adding numbers because formulas look like a foreign language. With artificial intelligence you can describe what you want in plain words and get the exact formula, with an explanation of how it works. In this guide you'll learn to ask for formulas that work the first time, understand the ones you inherit from others and clean up messy data.

## The key: describe your sheet

The AI can't see your file, so you have to describe it. A good description includes:

- **The program:** Excel or Google Sheets, and the version if you know it. Some functions only exist in recent versions.
- **The program's language and region.** Function names and separators change by language: an English Excel uses SUM and commas, while other languages translate the names and may use semicolons. Say so to get a formula that works as pasted.
- **What's in each column** and which row the data starts on.
- **What you want to get** and in which cell.

## Template for asking for a formula

```prompt
I use Excel in English (Microsoft 365). My sheet has this data starting in row 2:
- Column A: order date
- Column B: region (North, South, East, West)
- Column C: salesperson
- Column D: amount in euros
In cell G2 I want [what you want to calculate].
Give me the exact formula, explain what each part does and tell me what happens if there are empty cells.
```

## Examples of formulas you can ask for

### Summing with conditions

"I want to add up amounts for the North region in September." The AI will suggest something like:

`=SUMIFS(D:D, B:B, "North", A:A, ">="&DATE(2026,9,1), A:A, "<"&DATE(2026,10,1))`

And it will explain that it sums column D when all conditions are met: North region and a date within September.

### Looking up a value in another table

"On another sheet I have a table with the product code in column A and the price in column C. I want to bring in the price based on the code."

`=XLOOKUP(A2, Products!A:A, Products!C:C, "Not found")`

If your version of Excel doesn't have XLOOKUP, ask for the VLOOKUP or INDEX and MATCH alternative.

### Categorising with conditions

"If the amount is over 1,000, show 'Large'; if it's between 300 and 1,000, 'Medium'; otherwise 'Small'."

`=IF(D2>1000, "Large", IF(D2>=300, "Medium", "Small"))`

### Counting unique values, dates, percentages

You can also ask how many distinct customers there are, how many days passed between two dates, what percentage of the total each row represents or the month name from a date. Describe the result and the AI will choose the function.

> **Tip:** try each formula first in a copy of the file or in one row, and check the result against a couple of cases you can work out by hand. If the result looks wrong, copy the exact error Excel shows and paste it to the AI.

## Understanding a formula that isn't yours

Inheriting a sheet with very long formulas is common. Paste the formula and ask for an explanation:

```prompt
Explain step by step what this Excel formula does, as if I knew nothing about formulas. Then tell me whether it can be simplified and whether it could fail in any case.

=IFERROR(INDEX(Sales!$D:$D, MATCH(1, (Sales!$A:$A=A2)*(Sales!$B:$B=B2), 0)), 0)
```

## Fixing errors

Errors like #N/A, #VALUE!, #REF! or #DIV/0! have specific causes. When they appear:

```prompt
This formula gives me a [error] error in Excel: [paste the formula]. The cells it uses contain [describe the data, for example: numbers with a € sign stored as text]. Why does it fail and how do I fix it?
```

A very common cause: numbers that are actually stored as text (for example, imported from another program). The AI will tell you how to convert them.

## Cleaning up messy data

AI also helps tidy data before you analyse it:

- Splitting first and last names that are in the same cell.
- Removing extra spaces or odd characters.
- Standardising date formats.
- Capitalising the first letter.

```prompt
Column A has full names like "smith, ANNA". I want the first name ("Anna") in column B and the surname ("Smith") in column C, with initial capitals. Give me the formulas for Excel in English.
```

>! **Careful:** don't paste sheets with personal data about customers or employees, or confidential figures, into an AI. To help with the formula, it's enough to describe the columns or make up two or three rows of fake example data.

## Going further

Once you're comfortable with formulas, you can ask AI about:

- **Pivot tables:** "explain how to create a pivot table showing sales by salesperson and month".
- **Charts:** "which chart type best shows sales over time by region".
- **Conditional formatting:** "how do I highlight overdue invoices in red".
- **Automation:** macros in Excel or scripts in Google Sheets. Review these more carefully: a buggy script can change a lot of data at once. Always make a copy before running it.

If you work with long documents as well as spreadsheets, you'll find [how to summarise documents with AI](guia:summarize) useful.

## FAQ

### Why doesn't the formula the AI gave me work?

The most common causes are: the formula uses function names or separators for a different language, it uses a function your version doesn't have, or the columns don't match your sheet. Tell the AI, including the exact error.

### Does it work the same for Google Sheets?

Yes. Most functions are identical or very similar. Always say which program you use, because some functions exist in only one of them.

### Do I need a paid AI plan?

No. For asking for and explaining formulas, the free plans of the main assistants work well. Some paid versions can analyse whole files, which saves you describing the sheet.
