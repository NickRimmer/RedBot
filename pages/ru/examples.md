---
title: Заголовок
#breadcrumb: Пример разметки
submenu:
    - name: "Подраздел 1"
      url: "#1"

    - name: "Подраздел 2"
      url: "#2"

sitemap: false
---

# Пример H1 заголовка
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit.

## Пример H2 заголовка
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit.

### Пример H3 заголовка
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit.

#### Пример H4 заголовка
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit.

---

#### Стили текста
*курсив*, **жирный**, **_жирный курсив_**, ~~перечеркнутый~~

#### Списки
1. Цифровой
2. Lorem ipsum dolor
3. Lorem ipsum dolor sit amet

* Без порядка
- Lorem ipsum dolor
+ Lorem ipsum dolor sit amet

#### Ссылки
Асболютная ссылка с [настройками Jekyll]({{ "/some_page" | absolute_url }}). Обычная [ссылка](/ "Подсказка для ссылки") или [в новом окне](https://www.google.com){:target="_blank"}. [Ссылки][lateinit] которые задаются позже, в конце.

[lateinit]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

#### Картинки
Обычная картинка:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Подсказка")

С объявлением в конце (как ссылки ранее):
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Подсказка 2"

#### Комбинирование HTML и markdown
<div markdown="1" style="color: red">
*например* обынчй markdown в DIV блоке со стилями <span style="color: black">используя аттрибут markdown="1"</span>
</div>

#### Разные блоки
Отдельные `блоки` в строке, позволяют `подсветить текст` в любом месте или например показать код `<div>Hello world</div>`, аналог тэга PRE

Вывод кода, с подсветкой синтаксиса
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

**Пример цитирования**
{:.mt-4}
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
> Fusce bibendum neque eget nunc mattis eu sollicitudin enim tincidunt. Vestibulum lacus tortor, ultricies id dignissim ac, bibendum in velit.

Как то так (=
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum neque eget nunc

#### Таблицы
Лучше конечно без таблиц обходиться, они не очень адаптивные. Но вот пример их использования :Р

Заголовок 1 | Заголовок 2 | Заголовк 3
- | - | -
1 | 2 | 3
4 | `5` | 5
{:.table}

#### Применение классов к блокам
*.text-primary*{:.text-primary}, *.text-secondary*{:.text-secondary}, *.text-success*{:.text-success},

[.text-danger на ссылкe](/){:.text-danger}

.text-warning для параграфа
{:.text-warning}

Цвет фона .bg-info и комбинирование классов
{:.bg-info .p-3 .text-white}