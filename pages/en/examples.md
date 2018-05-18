---
layout: default
title: Content examples
sitemap: false
---

# H1 title example
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit.

## H2 title example
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit.

### H3 title example
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit.

#### H4 title example
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit.

---

#### Text styles
*italic*, **bold**, **_bold italic_**, ~~scratch~~

#### Liss
1. Numeric
2. Lorem ipsum dolor
3. Lorem ipsum dolor sit amet

* Unordered
- Lorem ipsum dolor
+ Lorem ipsum dolor sit amet

#### Links
Absolute link with [Jekyll properties]({{ "/some_page" | absolute_url }}). Simple [link](/ "Hint for link") in current window or [in new window](https://www.google.com){:target="_blank"}. [Links][lateinit] with late init.

[lateinit]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

#### Pictures
Simple picture:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Hint for picture")

Lateinit picture (links same):
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Second hint for picture"

#### HTML and markdown
<div markdown="1" style="color: red">
*Usual* markdown text in DIV tag with styles <span style="color: black">when used attribute markdown="1"</span>
</div>

#### Some blocks
Inline `blocks`, usefull `for highlits` in the sentience or code `<div>Hello world</div>` like PRE tag

Code block
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

**Blockquotes**
{:.mt-4}
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
> Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit.

I like it ~_~
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc

#### Tables
Please, don't use tables. They are killing this beatiful world.

Title 1 | Title2 2 | Title3 3
- | - | -
1 | 2 | 3
4 | `5` | 5
{:.table}

#### How to use css classes with markdown
*.text-primary*{:.text-primary}, *.text-secondary*{:.text-secondary}, *.text-success*{:.text-success},

[.text-danger link](/){:.text-danger}

.text-warning for paragraph
{:.text-warning}

Background color .bg-info with other classes
{:.bg-info .p-3 .text-white}