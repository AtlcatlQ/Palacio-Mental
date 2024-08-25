---
icon: '🔦'
tags: ["⚙️/🔌"]
status: '✔️'
aliases:
  - Corrector de Estilo
  - Linter
publish: true
created: 2023-05-01T00:00:00
modified: 2024-02-28T10:54:35
---

< (previas:: [[Tidy Footnotes]]) | (siguientes::) >

---

**description**:: Permite dar formato automáticamente a las notas, permitiendo una gran configuración

**comentario**:: Resuelve perfectamente lo que ofrece, evitando que te preocupes por el formato, aunque la cantidad de opciones puede resultar algo abrumadora.

[enlace:: [Linter (Repositorio de GitHub)](https://github.com/platers/obsidian-linter)]

%% Le vendría bien una corrección del lenguaje de su interfaz para hacerlo más similar al de Obsidian. #🔔 %%

# ⚙️ Configuración

## General

- Lint on Save: `TRUE`
- Display message on lint: `TRUE` *(Default)*
- Lint on File Change `FALSE` *(Default)*
- Display Lint on File Change Message: `TRUE` *(Default)*
- Override Locale: `Same as system` *(Default)*
- YAML aliases section style: `multi-line`
- YAML tags section style: `single-line` *(Default)*
- Default Escape Character: `'`
- Remove Unnecesary Escape Characters when in Multi-Line Array Format: `TRUE`
- Number of Dollar Sings to Indicate Math Block: *2* *(Default)*
- Folders to ignore
  - "A. Utilidades/2. Plantillas"
  - "A. Utilidades/1. Clases"

## YAML

### Add Blank Line After YAML

- Adds a blank line after the YAML block if it does not end the current file or it is not already followed by at least 1 blank line: `TRUE`

### Dedupe YAML Array Values

- Removes duplicate array values in a case sensitive manner: `FALSE` (Default)
- Redupe YAML aliases section: `TRUE` (Default)
- Redupe YAML tags section: `TRUE` (Default)
- Redupe YAML array section: `TRUE` (Default)
- YAML Keys to Ignore: "" (Default)

### Escape YAML Special Characters

- Escapes colons with a space after them (:), single quotes ('), and double quotes (") in YAML: `TRUE`
- Try to Escape Single Line Arrays: Tries to escape array values assuming that an array starts with "[", ends with "]", and has items that are delimited by ", ": `TRUE`

### Force YAML Escape

- Escapes the values for the specified YAML keys: `true`
- Force YAML Escape on keys: "icon \n status " #🔔

### Format Tags in YAML

- Remove Hashtags from tags in the YAML frontmatter, as they make the tags there invalid: `TRUE`

### Format YAML Array

- Allows for the formatting of regular yaml arrays as either multi-line or single-line and `tags` and `aliases` are allowed to have some Obsidian specific yaml formats. Note that single string to single-line goes from a single string entry to a single-line array if more than 1 entry is present. The same is true for single string to multi-line except it becomes a multi-line array: `TRUE`
- Format yaml aliases section: `TRUE` (Default)
- Format yaml tags section: `TRUE` (Default)
- Default yaml array section style: `single-line` (Default)
- Format yaml array sections: `TRUE` (Default)
- Force key values to be single-line arrays: ""
- Force key values to be multi-line arrays: ""

### Insert YAML Atributes

- Inserts the given YAML attributes into the YAML frontmatter. Put each attribute on a single line: `TRUE`
  - "aliases: "
  - "publish: false"

### Move Tags to YAML

- Move all tags to Yaml frontmatter of the document: `FALSE` (Default)
- Body tag operation: `nothing` (Default)
- Tags to ignore: "" (Default)

### Remove YAML Keys

- Removes the YAML keys specified: `TRUE`
- YAML Keys to Remove:
    - private
    - id
    - activo
    - sincronizar
    - favorite
    - favorito

### Sort YAML Array Values

- Sort the YAML array values based on the specified sort order: `TRUE`
- Sort YAML aliases section: `TRUE`
- Sort YAML tags section: `TRUE`
- Sort YAML array sections: `TRUE`
- YAML Keys to Ignore: ""
- Sort Order: `Ascending Alphabetical` (Default)

### YAML Key Sort

- Sorts the YAML keys based on the order and priority specified: `TRUE`
- YAML Key Priority Sort Order:
    - icon
    - tags
    - status
    - aliases
    - publish
    - cssclass
- Priority Keys at Start of YAML: `TRUE` (Default)
- YAML Sort Order for Other Keys: `Ascending Alphabetical`

### YAML Timestamp

- Keep track of the date the file was last edited in the YAML front matter. Gets dates from file metadata: `TRUE`
- Date Created: `TRUE`
- Force Date Created Key Value Retention: `TRUE`
- Date Created Key: "created"
- Date Modified: `TRUE`
- Date Modified Key: "modified"
- Format: "YYYY-MM-DD[T]HH: mm: ss"

### YAML Title Alias

- Inserts the title of the file into the YAML frontmatter's aliases section. Gets the title from the first H1 or filename: `FALSE` (Default)
- Preserve existing aliases section style: `TRUE` (Default)
- Keep alias that matches the filename: `FALSE` (Default)
- Use the YAML key `linter-yaml-title-alias` to help with filename and heading changes: `FALSE`

### YAML Title

- Inserts the title of the file into the YAML frontmatter. Gets the title from the first H1 or filename if there is no H1: `FALSE` (Default)
- Title Key: ""

## Heading

### Capitalize Headings

- Headings should be formatted with capitalization: `TRUE`
- Style: `Title Case`
- Ignore Words: macOS, iOS, iPhone, iPad, JavaScript, TypeScript, AppleScript, I,
- Lowercase Words: al, de, por, que, a, an, the, aboard, about, abt., above, abreast, absent, across, after, against, along, aloft, alongside, amid, amidst, mid, midst, among, amongst, anti, apropos, around, round, as, aslant, astride, at, atop, ontop, bar, barring, before, B4, behind, below, beneath, neath, beside, besides, between, 'tween, beyond, but, by, chez, circa, c., ca., come, concerning, contra, counting, cum, despite, spite, down, during, effective, ere, except, excepting, excluding, failing, following, for, from, in, including, inside, into, less, like, minus, modulo, mod, near, nearer, nearest, next, notwithstanding, of, o', off, offshore, on, onto, opposite, out, outside, over, o'er, pace, past, pending, per, plus, post, pre, pro, qua, re, regarding, respecting, sans, save, saving, short, since, sub, than, through, thru, throughout, thruout, till, times, to, t', touching, toward, towards, under, underneath, unlike, until, unto, up, upon, versus, vs., v., via, vice, vis-à-vis, wanting, with, w/, w., c̄, within, w/i, without, 'thout, w/o, abroad, adrift, aft, afterward, afterwards, ahead, apart, ashore, aside, away, back, backward, backwards, beforehand, downhill, downstage, downstairs, downstream, downward, downwards, downwind, east, eastward, eastwards, forth, forward, forwards, heavenward, heavenwards, hence, henceforth, here, hereby, herein, hereof, hereto, herewith, home, homeward, homewards, indoors, inward, inwards, leftward, leftwards, north, northeast, northward, northwards, northwest, now, onward, onwards, outdoors, outward, outwards, overboard, overhead, overland, overseas, rightward, rightwards, seaward, seawards, skywards, skyward, south, southeast, southwards, southward, southwest, then, thence, thenceforth, there, thereby, therein, thereof, thereto, therewith, together, underfoot, underground, uphill, upstage, upstairs, upstream, upward, upwards, upwind, west, westward, westwards, when, whence, where, whereby, wherein, whereto, wherewith, although, because, considering, given, granted, if, lest, once, provided, providing, seeing, so, supposing, though, unless, whenever, whereas, wherever, while, whilst, ago, according to, as regards, counter to, instead of, owing to, pertaining to, at the behest of, at the expense of, at the hands of, at risk of, at the risk of, at variance with, by dint of, by means of, by virtue of, by way of, for the sake of, for sake of, for lack of, for want of, from want of, in accordance with, in addition to, in case of, in charge of, in compliance with, in conformity with, in contact with, in exchange for, in favor of, in front of, in lieu of, in light of, in the light of, in line with, in place of, in point of, in quest of, in relation to, in regard to, with regard to, in respect to, with respect to, in return for, in search of, in step with, in touch with, in terms of, in the name of, in view of, on account of, on behalf of, on grounds of, on the grounds of, on the part of, on top of, with a view to, with the exception of, à la, a la, as soon as, as well as, close to, due to, far from, in case, other than, prior to, pursuant to, regardless of, subsequent to, as long as, as much as, as far as, by the time, in as much as, inasmuch, in order to, in order that, even, provide that, if only, whether, whose, whoever, why, how, or not, whatever, what, both, and, or, not only, but also, either, neither, nor, just, rather, no sooner, such, that, yet, is, it #🔔

### File Name Heading

- Inserts the file name as H1 if no H1 heading Exists: `FALSE` (Default)

### Header Increment

- Heading levels should only increment by one level at a time: `TRUE`
- Start Header Increment at Heading Level 2: `FALSE` (Default)

### Heading Start Line

- Headings that do not start a line will have their preceding whitespace removed to make sure they get recognized as headers: `TRUE` (Default)

### Remove Trailing Punctuation in Heading

- Removes the specified punctuation from the end of headings making sure to ignore the semicolon at the end of [HTML entity references](https: //www.wikiwand.com/en/List_of_XML_and_HTML_character_entity_references): `TRUE`
- Trailing Punctuation: ".,;:!"

## Footnote

### Footnote After Punctuation

- Ensures that footnote refernces are placed after punctuation, not before: `TRUE`

### Move Footnotes to the Bottom a

- Move all footnotes to the bottom of the document: `TRUE`

### Re-Index Footnotes

- Re-indexes footnote keys and footnote, based on the order ocurrence: `TRUE`

## Content

### Auto-correct Common Misspellings

- Uses a dictionary of common misspellings to automatically convert them to their proper spellings. See [auto-correct map](https: //github.com/platers/obsidian-linter/tree/master/src/utils/auto-correct-misspellings.ts) for the full list of auto-corrected words: `FALSE` (Default)
- Ignore Words

### Blockquote Style

- Makes sure the blockquote style is consistent: `TRUE`
- Style: `space` (Default)

### Convert Bullet List Markers

- Converts common bullet list marker symbols to markdown list markers: `TRUE`

### Emphasis Style

- Makes sure the emphasis style is consistent: `TRUE`
- Style: `asterisk`

### No Bare Urls

- Encloses bare URLs with angle brackets except when enclosed in back ticks, square braces, or single or double quotes: `FALSE` (Default)

### Ordered List Style

- Makes sure that ordered lists follow the style specified: `TRUE`
- Number Style: `ascending` (Default)
- Ordered List Indicator End Style: `.` (Default)

### Proper Ellipsis

- Replaces three consecutive dots with an ellipsis: `FALSE` (Default)

### Quote Style

- Updates the quotes in the body content to be updated to the specified single and double quote styles: `TRUE`
- Enable `Single Quote Style`: `TRUE` (Default)
- Single Quote Style: `''` (Default)
- Enable `Double Quote Style`: `TRUE` (Default)
- Double Quote Style: `""` (Default)

### Remove Consecutive List Markers

- Removes consecutive list markers: `TRUE`

### Remove Empty List Markers

- Removes empty list markers (Items without content): `TRUE`

### Remove Hyphenated Line Breaks

- Removes hyphenated line breaks. Useful when pasting text from textbooks: `TRUE`

### Remove Multiple Spaces

- Removes two or more consecutive spaces: `TRUE`

### Strong Style

- Makes sure the strong style is consistent: `TRUE`
- Style: `asterisk`

### Two Spaces Betwen Lines With Content

- Makes sure that two spaces are added to the ends of lines with content continued on the next line for paragraphs, blockquotes, and list items: `TRUE`

### Unordered List Style

- Makes sure that unordered lists follow the style specified: `TRUE`
- Style: `-`

## Spacing

### Compact YAML

- Removes leading and trailing blank lines in the YAML front matter: `TRUE`
- Inner New Lines: `TRUE` (Default)

### Consecutive Blank Lines

- There should be at most one consective blank line: `TRUE`

### Convert Spaces To Tabs

- Convert leading spaces to tabs: `FALSE`
- Tabsize:

### Empty Line Around Blockquotes

- Ensures that there is an empty line around blockquotes unles they start or end a document: `TRUE`

### Empty Line Around Code Fences

- Ensures that there is an empty line around blockquotes unles they start or end a document: `TRUE`

### Empty Line Around Math Blocks

- Ensures that there is an empty line around math blocks%% using `Number of Dollar Signs to Indicate a Math Block` to determine how many dollar how many dollar signs indicates a math block for single-line math. %%: `TRUE`

### Empty Line Around Tables

- Ensures that there is an empty line around GitHub flavores tables unles they start or end a document: `TRUE`

### Heading Blank Lines

- All headings have blank line both, before and after: `TRUE`
- Bottom: `TRUE`
- Empty Line Between YAML and Header: `TRUE`

### Line Break at Document End

- Ensures that there is exaxtly one line break at the end of a document: `TRUE`

### Move Math Block Indicators to Their Own

- Move all starting and ending math blocks indicators to their own lines: `FALSE`

### Paragraph Blank Lines

- All paragraphs should have exactly one line both before and after: `TRUE`

### Remove Empty Lines Between List Markers and Checklists

- There should not be any empty lines between list markers and checklists: `TRUE`

### Remove Link Spacing

- Removes spacing around link text: `TRUE`

### Remove Space around Characters

- Ensures taht certain characters are not surrounde by whitespace: `FALSE` (Default)
- Include Fullwith forms: `FALSE`
- Include CJK Symbols and Punctuation: `FALSE`
- Include Dashes: `FALSE`
- Other symbols:

### Remove Space before or After Characters

- Removes space before the specified characters and after the specified characters. Note that this may causes issues with markdown format in some cases: `TRUE`
- Remove Space Before Characters: ",;.:!?)]"
- Remove Space After Characters: "¡¿(["

### Space after List Markers

- There should be a single space after list markers and checkboxes: `TRUE`

### Space between Chinese Japanese or Korean and English or Numbers

- Ensures that Chinese, Japanese, or Korean and English or numbers are separated by a single space. Follows these [guidelines](https: //github.com/sparanoid/chinese-copywriting-guidelines): `FALSE` (Default)

### Trailing Spaces

- Removes extra spaces after everyline: `TRUE`
- Two Space Linebreak: `TRUE`

## Paste

### Add Blockquote Indentation on Paste

- Adds blockquotes to all but the first line, when the cursor is in a blockquote/callout line during pasting: `TRUE`

### Prevent Double Checklist Indicator on Paste

- Removes starting checklist indicator from the text to paste if the line the cursor is on in the file has a checklist indicator: `TRUE`

### Prevent Double List Item Indicator on Paste

- Removes starting list indicator from the text to paste if the line the cursor is on in the file has a list indicator: `TRUE`

### Proper Ellipsis on Paste

- Replaces three consecutive dots with an ellipsis even if they have a space between them in the text to paste: `FALSE`

### Remove Hyphens on Paste

- Removes hyphens from the text to paste: `TRUE`

### Remove Leading or Trailing Whitespace on Paste

- Removes any leading non-tab whitespace and all trailing whitespace for the text to paste: `TRUE`

### Remove Leftover Footnotes from Quote on Paste

- Removes any leftover footnote references for the text to paste: `TRUE`

### Remove Multiple Blank Lines on Paste

- Condenses multiple blank lines down into one blank line for the text to paste: `TRUE`

## Custom

> [!fail] No tengo experiencia y creo que con lo que ofrece el plugin es suficiente para mí.

### Custom Commands

### Custom Regex Replacement

## Debug

- Log Level: `trace`
  - Collect logs when linting on save and linting the current file: `TRUE`
