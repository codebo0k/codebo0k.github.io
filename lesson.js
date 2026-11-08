const courses = {
    html: {
        name: "HTML",
        lessons: [
            ["html-intro.html", "Вступ до HTML"], ["html-text.html", "Заголовки та абзаци"],
            ["html-links.html", "Посилання"], ["html-images.html", "Зображення"],
            ["html-lists.html", "Списки"], ["html-buttons.html", "Кнопки"],
            ["html-forms.html", "Форми"], ["html-tables.html", "Таблиці"],
            ["html-div-span.html", "Div та Span"], ["html-semantic.html", "Семантика"]
        ],
        topics: {
            "html-text.html": ["Урок 2: Заголовки та абзаци", "Заголовки й абзаци організовують текст сторінки та допомагають читачам і пошуковим системам зрозуміти його структуру.", [
                ["Ієрархія заголовків", "Використовуйте h1 для головної теми, а h2–h6 — для вкладених розділів. Не обирайте рівень лише за розміром шрифту.", `<h1>Мандрівка Карпатами</h1>\n<h2>Маршрут</h2>\n<h3>День перший</h3>`],
                ["Абзаци та виділення", "Тег p створює абзац. Для змістового наголосу підходить strong, для інтонаційного — em.", `<p>Підйом починається на світанку.</p>\n<p><strong>Візьміть воду</strong> та <em>зручне взуття</em>.</p>`]
            ], "Створіть заголовок статті, два підзаголовки та абзаци під кожним. Виділіть важливе попередження тегом strong."],
            "html-links.html": ["Урок 3: Посилання", "Посилання з’єднують сторінки, файли та окремі місця документа. Для цього використовується тег a з адресою в атрибуті href.", [
                ["Зовнішні та внутрішні адреси", "Повна адреса веде на інший сайт, а відносний шлях — до сторінки проєкту. Текст посилання має описувати його призначення.", `<a href="https://example.com">Відвідати сайт</a>\n<a href="contacts.html">Контакти</a>`],
                ["Якір і нова вкладка", "Додайте id потрібному елементу, а в href вкажіть його з символом #. Для зовнішнього посилання в новій вкладці задайте target і rel.", `<a href="#schedule">До розкладу</a>\n<h2 id="schedule">Розклад</h2>\n<a href="https://example.com" target="_blank" rel="noopener">Відкрити окремо</a>`]
            ], "Додайте посилання на іншу сторінку, зовнішній ресурс і розділ нижче на цій самій сторінці."],
            "html-images.html": ["Урок 4: Зображення", "Зображення додають тегом img. Шлях до файла задає src, а короткий текстовий опис — alt.", [
                ["Шлях і альтернативний текст", "Для змістового зображення alt описує, що саме на ньому зображено. Для декоративного залиште alt порожнім. Перевірте правильність шляху.", `<img src="images/mountains.jpg" alt="Гірська стежка на світанку">`],
                ["Зображення з підписом", "figure групує зображення з підписом figcaption. Розміри краще задавати CSS, зберігаючи пропорції.", `<figure>\n  <img src="lake.jpg" alt="Озеро серед гір">\n  <figcaption>Ранок біля озера</figcaption>\n</figure>`]
            ], "Додайте зображення до статті, опишіть його в alt і додайте короткий підпис."],
            "html-lists.html": ["Урок 5: Списки", "Списки групують пов’язані пункти. Обирайте нумерований список для послідовності, а маркований — коли порядок не має значення.", [
                ["Маркований і нумерований список", "ul створює список із маркерами, ol — з номерами. Кожен пункт загортають у li.", `<ul>\n  <li>Карта</li><li>Вода</li>\n</ul>\n<ol>\n  <li>Підготуйте маршрут</li><li>Перевірте погоду</li>\n</ol>`],
                ["Вкладені списки", "Список можна розмістити всередині li, щоб показати підпункти. Не вкладайте один список в інший без li між ними.", `<ul>\n  <li>Спорядження\n    <ul><li>Ліхтарик</li></ul>\n  </li>\n</ul>`]
            ], "Створіть список покупок і нумерований план із трьох кроків. Додайте один підпункт."],
            "html-buttons.html": ["Урок 6: Кнопки", "Кнопка виконує дію на сторінці або надсилає форму. Тег button дає змогу створити її з доступною назвою та визначеним типом.", [
                ["Типи кнопок", "У формі submit надсилає її, reset очищує поля. Для інших дій вкажіть type=button.", `<button type="button">Показати деталі</button>\n<button type="submit">Надіслати</button>\n<button type="reset">Очистити</button>`],
                ["Назва та поведінка", "Текст кнопки має пояснювати дію. Для переходу між сторінками використовуйте посилання a.", `<button type="button" aria-label="Додати до обраного">Додати до обраного</button>`]
            ], "Створіть кнопку перегляду деталей і три кнопки для форми: надсилання, очищення та звичайну дію."],
            "html-forms.html": ["Урок 7: Форми", "Форми збирають дані від користувача. Поля пов’язують із підписами, а кнопка надсилання передає введені значення.", [
                ["Поля та підписи", "Значення for у label має збігатися з id поля. Атрибут name задає назву даних, які надсилаються.", `<label for="email">Електронна пошта</label>\n<input id="email" name="email" type="email" required>`],
                ["Групування і перевірка", "Використовуйте відповідний тип поля. required вимагає заповнення, а fieldset і legend групують споріднені поля.", `<form>\n  <fieldset><legend>Підписка</legend>\n    <label><input type="checkbox" name="news"> Отримувати новини</label>\n  </fieldset>\n  <button type="submit">Підписатися</button>\n</form>`]
            ], "Зробіть форму з ім’ям, електронною поштою та прапорцем згоди. Додайте підписи й кнопку надсилання."],
            "html-tables.html": ["Урок 8: Таблиці", "Таблиці призначені для даних, які природно порівнювати за рядками та стовпцями.", [
                ["Рядки та комірки", "table містить рядки tr. Заголовки позначають th, звичайні значення — td.", `<table>\n  <tr><th>Місто</th><th>День</th></tr>\n  <tr><td>Львів</td><td>Понеділок</td></tr>\n</table>`],
                ["Заголовок і доступність", "thead, tbody і tfoot відокремлюють частини таблиці. scope визначає, до якого стовпця або рядка належить заголовок.", `<table>\n  <caption>Розклад занять</caption>\n  <thead><tr><th scope="col">День</th><th scope="col">Тема</th></tr></thead>\n  <tbody><tr><td>Вівторок</td><td>HTML</td></tr></tbody>\n</table>`]
            ], "Створіть таблицю розкладу з підписом, двома заголовками та трьома рядками даних."],
            "html-div-span.html": ["Урок 9: Div та Span", "div і span — нейтральні контейнери без власного змістового значення. Вони групують елементи, коли для цього не підходить семантичний тег.", [
                ["Блоковий контейнер div", "div зазвичай починається з нового рядка та охоплює ширину області. Групуйте ним елементи, які оформлюються разом.", `<div class="card">\n  <h2>Курс HTML</h2><p>Початковий рівень</p>\n</div>`],
                ["Рядковий контейнер span", "span використовується всередині тексту для оформлення його частини. Якщо елемент має власний сенс, розгляньте strong або em.", `<p>Ціна: <span class="price">250 грн</span></p>`]
            ], "Згрупуйте картку товару в div і виділіть частину речення span. Додайте клас кожному контейнеру."],
            "html-semantic.html": ["Урок 10: Семантична розмітка", "Семантичні елементи описують призначення вмісту та роблять структуру зрозумілішою для допоміжних технологій, розробників і пошукових систем.", [
                ["Структура сторінки", "header містить шапку, nav — основні посилання, main — головний вміст, footer — завершальну інформацію.", `<header><h1>Міський сад</h1></header>\n<nav><a href="#about">Про сад</a></nav>\n<main><section id="about"><h2>Наша мета</h2><p>Більше зелені.</p></section></main>\n<footer>Контакти</footer>`],
                ["Стаття та розділ", "article підходить для самостійного матеріалу. section групує тематичний розділ, aside містить додаткову інформацію.", `<article><h2>Як виростити базилік</h2><p>Поставте горщик на сонце.</p></article>\n<aside>Порада: поливайте помірно.</aside>`]
            ], "Побудуйте сторінку з шапкою, навігацією, головним розділом, окремою статтею та підвалом."]
        }
    },
    css: {
        name: "CSS",
        lessons: [
            ["css-intro.html", "Вступ до CSS"], ["css-selctors.html", "Селектори"],
            ["css-colors.html", "Кольори та фон"], ["css-fonts.html", "Шрифти та текст"],
            ["css-boxmodel.html", "Блочна модель"], ["css-display.html", "Display"],
            ["flexbox.html", "Flexbox"], ["css-grid.html", "CSS Grid"],
            ["css-position.html", "Позиціонування"], ["css-media.html", "Медіа-запити"]
        ],
        topics: {
            "css-selctors.html": ["Урок 2: Селектори CSS", "Селектор визначає, до яких HTML-елементів застосуються CSS-правила. Комбінуючи селектори, можна точно описати потрібну частину сторінки.", [
                ["Тег, клас та ідентифікатор", "Селектор тега обирає елементи цього типу. Клас починається з крапки й може повторюватися; id починається з # та має бути унікальним.", `p { color: #334155; }\n.card { padding: 16px; }\n#main-title { font-size: 2rem; }`],
                ["Комбінування селекторів", "Пробіл означає вкладений елемент, кома об’єднує цілі. Псевдоклас :hover задає стан наведення курсора.", `.card p { margin: 0; }\nh1, h2 { color: #1e293b; }\na:hover { text-decoration: underline; }`]
            ], "Задайте різний колір усім абзацам, оформіть картку через клас і додайте стиль посилання при наведенні."],
            "css-colors.html": ["Урок 3: Кольори та фон", "CSS підтримує кілька форматів кольору та властивості фону. Обирайте контрастні передній і задній кольори для читабельного тексту.", [
                ["Формати кольорів", "Кольори можна записати шістнадцятковим кодом, функціями rgb() та hsl() або назвою. Альфа-канал задає прозорість.", `h1 { color: #0f766e; }\n.notice { color: rgb(30 41 59); }\n.overlay { background: rgba(15, 23, 42, .6); }`],
                ["Колір і фон", "color задає колір тексту, background-color — тло. Для фонового зображення налаштуйте розмір і позицію.", `body { background-color: #f4f6f9; }\n.hero { background-image: url("cover.jpg"); background-size: cover; background-position: center; }`]
            ], "Зробіть кольоровий блок з контрастним текстом і фоновим зображенням, яке заповнює блок."],
            "css-fonts.html": ["Урок 4: Шрифти та текст", "Властивості тексту керують шрифтом, розміром, товщиною, міжрядковим інтервалом і вирівнюванням.", [
                ["Шрифт і розмір", "font-family задає шрифт і резервні варіанти. font-size можна вказувати у rem, line-height — числом.", `body { font-family: Arial, sans-serif; font-size: 1rem; line-height: 1.6; }`],
                ["Оформлення тексту", "font-weight керує товщиною, text-align — вирівнюванням, text-decoration — підкресленням. Для довгих рядків задайте максимальну ширину.", `h1 { font-weight: 700; }\n.article { max-width: 65ch; }\n.caption { text-align: center; }\na { text-decoration: none; }`]
            ], "Задайте сторінці шрифт, міжрядковий інтервал, ширину текстового блоку й оформлення заголовка."],
            "css-boxmodel.html": ["Урок 5: Блочна модель", "Кожен елемент має коробку: вміст, внутрішній відступ, рамку та зовнішній відступ. Це допомагає керувати розмірами й відстанями.", [
                ["Відступи та рамка", "padding створює простір усередині рамки, margin — зовні. border задає лінію навколо елемента.", `.card { padding: 16px 24px; margin: 12px 0; border: 1px solid #cbd5e1; }`],
                ["Розрахунок ширини", "За замовчуванням width не враховує padding і border. box-sizing: border-box включає їх у задану ширину.", `* { box-sizing: border-box; }\n.panel { width: 320px; padding: 20px; border: 2px solid #10b981; }`]
            ], "Задайте картці ширину, padding, margin і рамку. Увімкніть border-box та перевірте її розмір."],
            "css-display.html": ["Урок 6: Властивість Display", "Властивість display визначає, як елемент бере участь у розкладці: у потоці, у рядку, у гнучкому контейнері або прихованим.", [
                ["Block та inline", "block починається з нового рядка й зазвичай займає доступну ширину. inline залишається в рядку.", `.notice { display: block; }\n.badge { display: inline; }\n.hidden { display: none; }`],
                ["Inline-block та flex", "inline-block поєднує розміщення в рядку з керуванням розмірами. Для гнучкого вирівнювання створіть flex-контейнер.", `.tag { display: inline-block; }\n.toolbar { display: flex; align-items: center; gap: 12px; }`]
            ], "Перетворіть список посилань на горизонтальну панель, додайте проміжки й приховуйте неактивний елемент класом."],
            "flexbox.html": ["Урок 7: Flexbox", "Flexbox призначений для розкладки елементів в одному напрямку: рядком або стовпцем. Контейнер керує вирівнюванням і вільним місцем.", [
                ["Напрямок і проміжки", "display: flex вмикає гнучкий контейнер. flex-direction задає напрямок, а gap — відстань між елементами.", `.toolbar { display: flex; flex-direction: row; gap: 16px; }`],
                ["Вирівнювання", "justify-content працює вздовж головної осі, align-items — уздовж поперечної. flex-wrap дозволяє переносити елементи.", `.cards { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }`]
            ], "Розмістіть три картки в рядок, вирівняйте їх по центру й дозвольте переноситися на вузькому екрані."],
            "css-grid.html": ["Урок 8: CSS Grid", "CSS Grid створює двовимірні макети з рядками та стовпцями. Він підходить для сіток карток і структур сторінки.", [
                ["Стовпці та проміжки", "Встановіть display: grid та опишіть стовпці через grid-template-columns. repeat() і minmax() створюють адаптивні колонки.", `.cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }`],
                ["Розміщення елементів", "Елемент може займати кілька колонок. auto-fit разом із minmax() заповнює доступний простір.", `.cards { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }\n.featured { grid-column: span 2; }`]
            ], "Створіть адаптивну сітку карток із мінімальною шириною колонки 220px."],
            "css-position.html": ["Урок 9: Позиціонування", "Властивість position змінює спосіб розміщення елемента. Вона дає змогу створювати наліпки, фіксовану шапку та контрольовані накладання.", [
                ["Relative та absolute", "relative залишається у потоці та створює точку відліку для absolute-нащадків. absolute вилучається зі звичайного потоку.", `.card { position: relative; }\n.badge { position: absolute; top: 8px; right: 8px; }`],
                ["Fixed та sticky", "fixed закріплює елемент відносно вікна браузера. sticky поводиться як звичайний елемент до порогу прокручування.", `.top-button { position: fixed; right: 20px; bottom: 20px; }\nheader { position: sticky; top: 0; }`]
            ], "Додайте мітку в правий верхній кут картки та зробіть шапку сторінки липкою."],
            "css-media.html": ["Урок 10: Медіа-запити", "Медіа-запити змінюють стилі залежно від ширини екрана та інших умов. Це основа адаптивного дизайну.", [
                ["Контрольна точка", "@media (max-width: ...) застосовує правила на вказаній ширині та менше. Спершу задайте базовий макет, потім — потрібні зміни.", `.cards { display: grid; grid-template-columns: repeat(3, 1fr); }\n@media (max-width: 700px) { .cards { grid-template-columns: 1fr; } }`],
                ["Адаптивні розміри", "Відсотки та minmax() дають макету гнучкість. Для медіафайлів задайте максимальну ширину 100%.", `img { max-width: 100%; height: auto; }\n.wrapper { width: min(100% - 32px, 1100px); margin-inline: auto; }`]
            ], "Зробіть сітку з трьох стовпців на широкому екрані та одного стовпця на вузькому."]
        }
    },
    js: {
        name: "JavaScript",
        lessons: [
            ["js-intro.html", "Вступ до JS"], ["js-variables.html", "Змінні"],
            ["js-datatypes.html", "Типи даних"], ["js-operators.html", "Оператори"],
            ["js-functions.html", "Функції"], ["js-conditions.html", "Умови (If/Else)"],
            ["js-dom-find.html", "Пошук в DOM"], ["js-events.html", "Події (Events)"],
            ["js-dom-change.html", "Зміна елементів"], ["js-arrays.html", "Масиви"]
        ],
        topics: {
            "js-variables.html": ["Урок 2: Змінні", "Змінна зберігає значення, до якого програма звертається за назвою. Використовуйте const для сталого посилання, let — коли значення переприсвоюватиметься.", [
                ["Оголошення та присвоєння", "const потрібно одразу ініціалізувати, а let можна спершу оголосити. Називайте змінні зрозуміло й у стилі camelCase.", `const userName = "Олена";\nlet score = 0;\nscore += 10;`],
                ["Область видимості", "let і const мають блочну область видимості. Уникайте var у новому коді через його відмінну поведінку.", `if (true) {\n  const message = "Готово";\n  console.log(message);\n}`]
            ], "Створіть змінні для назви товару, ціни та кількості. Обчисліть загальну вартість і виведіть її в консоль."],
            "js-datatypes.html": ["Урок 3: Типи даних", "Тип даних визначає, які значення зберігаються у змінній і які операції над ними доступні. JavaScript має примітивні типи та об’єкти.", [
                ["Примітивні значення", "До базових типів належать string, number, boolean, undefined, null, bigint та symbol. typeof допомагає перевірити тип більшості значень.", `const city = "Київ";\nconst temperature = 18;\nconst isSunny = true;\nconsole.log(typeof temperature);`],
                ["Масиви та об’єкти", "Об’єкти об’єднують властивості, масиви зберігають упорядкований список. Обидва значення належать до об’єктного типу.", `const user = { name: "Олег", age: 24 };\nconst colors = ["синій", "зелений"];\nconsole.log(user.name, colors[0]);`]
            ], "Створіть рядок, число, логічне значення, масив і об’єкт. Виведіть їхні типи та властивості в консоль."],
            "js-operators.html": ["Урок 4: Оператори", "Оператори обчислюють значення, порівнюють дані та об’єднують логічні умови. Використовуйте суворе порівняння, щоб уникати неочікуваного перетворення типів.", [
                ["Арифметика та присвоєння", "Оператори +, -, *, / і % виконують арифметичні дії. Скорочений запис += додає значення до змінної.", `let total = 12 + 8;\ntotal += 5;\nconst remainder = total % 3;\nconsole.log(total, remainder);`],
                ["Порівняння та логіка", "=== і !== порівнюють без примусового приведення типів. &&, || та ! поєднують або змінюють логічні умови.", `const hasTicket = true;\nconst age = 20;\nconst canEnter = hasTicket && age >= 18;\nconsole.log(canEnter);`]
            ], "Обчисліть остачу від ділення числа на 2 та перевірте суворою рівністю, чи число парне."],
            "js-functions.html": ["Урок 5: Функції", "Функція об’єднує команди, які можна викликати повторно. Вона може отримувати параметри та повертати результат.", [
                ["Оголошення та повернення", "return повертає значення з функції й завершує її виконання. Аргументи передають під час виклику.", `function greet(name) {\n  return "Привіт, " + name + "!";\n}\nconsole.log(greet("Ірина"));`],
                ["Стрілкова функція", "Стрілкові функції мають компактний синтаксис і часто використовуються для коротких обчислень.", `const double = (number) => number * 2;\nconsole.log(double(6));`]
            ], "Напишіть функцію, що приймає ціну й кількість товарів та повертає суму. Перевірте її з різними аргументами."],
            "js-conditions.html": ["Урок 6: Умови if та else", "Умовні конструкції дають змогу виконувати різні команди залежно від значення виразу. Умова в дужках перетворюється на true або false.", [
                ["if та else", "Блок if виконується, коли умова істинна. else задає альтернативу, а else if дає змогу перевірити кілька умов.", `const temperature = 12;\nif (temperature > 20) {\n  console.log("Тепло");\n} else {\n  console.log("Прохолодно");\n}`],
                ["Тернарний оператор", "Коротку умову з двома результатами можна записати як умова ? значення1 : значення2. Для складної логіки краще використовуйте if.", `const isMember = true;\nconst price = isMember ? 80 : 100;\nconsole.log(price);`]
            ], "Перевірте, чи число більше нуля, дорівнює нулю або менше нуля. Для кожного випадку виведіть повідомлення."],
            "js-dom-find.html": ["Урок 7: Пошук елементів у DOM", "DOM — це об’єктне представлення HTML-документа. JavaScript знаходить елементи за id, CSS-селектором або назвою класу.", [
                ["Пошук за id та селектором", "getElementById знаходить елемент за унікальним id. querySelector повертає перший елемент, що відповідає CSS-селектору.", `const heading = document.getElementById("title");\nconst card = document.querySelector(".card");\nconsole.log(heading, card);`],
                ["Пошук групи елементів", "querySelectorAll повертає список усіх відповідних елементів, який можна перебрати forEach.", `const items = document.querySelectorAll(".item");\nitems.forEach((item) => console.log(item.textContent));`]
            ], "Створіть HTML-заголовок і список із трьох пунктів. Знайдіть їх у DOM та виведіть текст пунктів у консоль."],
            "js-events.html": ["Урок 8: Події", "Подія повідомляє програму про дію користувача або браузера: клік, введення тексту чи надсилання форми. Обробники подій пов’язують дію з кодом.", [
                ["Обробник кліку", "addEventListener додає обробник і не замінює інші обробники елемента. Передайте назву події та функцію.", `const button = document.querySelector("button");\nbutton.addEventListener("click", () => {\n  console.log("Кнопку натиснуто");\n});`],
                ["Введення та подія форми", "input спрацьовує під час зміни тексту. Для перехоплення надсилання форми слухайте submit і викликайте preventDefault(), якщо обробляєте дані на клієнті.", `const form = document.querySelector("form");\nform.addEventListener("submit", (event) => {\n  event.preventDefault();\n  console.log("Форму оброблено");\n});`]
            ], "Додайте кнопку, яка змінює повідомлення при кліку, і поле, яке виводить введений текст під час набору."],
            "js-dom-change.html": ["Урок 9: Зміна елементів сторінки", "JavaScript може змінювати текст, атрибути та класи знайденого елемента. Змінюйте лише потрібну властивість, щоб не затирати інший вміст.", [
                ["Текст і вміст", "textContent встановлює звичайний текст без інтерпретації HTML. Нові елементи створюйте через createElement і додавайте append.", `const message = document.querySelector("#message");\nmessage.textContent = "Зміни збережено";\nconst item = document.createElement("li");\nitem.textContent = "Новий пункт";`],
                ["Класи та атрибути", "classList.add, remove і toggle керують класами елемента. setAttribute змінює атрибут, наприклад стан доступності.", `const panel = document.querySelector(".panel");\npanel.classList.toggle("is-open");\npanel.setAttribute("aria-expanded", "true");`]
            ], "Створіть кнопку, яка перемикає клас is-open у панелі та оновлює текст кнопки відповідно до стану."],
            "js-arrays.html": ["Урок 10: Масиви", "Масив зберігає впорядкований набір значень. Індекси починаються з нуля, а властивість length показує кількість елементів.", [
                ["Створення та зміна масиву", "Додайте елемент у кінець через push(), отримайте його за індексом або переберіть список методом forEach().", `const fruits = ["яблуко", "груша"];\nfruits.push("слива");\nconsole.log(fruits[0], fruits.length);\nfruits.forEach((fruit) => console.log(fruit));`],
                ["Перетворення та пошук", "map створює новий масив перетворених значень, filter відбирає елементи, find повертає перший відповідний.", `const prices = [10, 25, 40];\nconst withTax = prices.map((price) => price * 1.2);\nconst affordable = prices.filter((price) => price < 30);`]
            ], "Створіть масив оцінок, збільште кожну на один бал і знайдіть ті, що не нижчі за 7."]
        }
    }
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);

const course = courses[document.body.dataset.course];
const filename = document.body.dataset.lesson;
const lesson = course?.topics[filename];
const app = document.getElementById("app");
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%231e293b%22/><text y=%22.9em%22 font-size=%2270%22 x=%2215%22>💻</text></svg>";
document.head.append(favicon);

if (!course || !lesson || !app) {
    document.title = "Урок не знайдено — CodeBook.ua";
    if (app) app.textContent = "Не вдалося завантажити урок.";
} else {
    const index = course.lessons.findIndex(([file]) => file === filename);
    const previous = course.lessons[index - 1];
    const next = course.lessons[index + 1];
    const courseHref = course.name === "HTML" ? "../html/html-intro.html"
        : course.name === "CSS" ? "../css/css-intro.html" : "../js/js-intro.html";
    document.title = `${lesson[0]} — CodeBook.ua`;
    app.innerHTML = `
        <header class="header"><div class="logo">CodeBook<span>.ua</span></div>
            <nav class="top-nav"><a href="../index.html">Головна</a>
                <a href="../html/html-intro.html" ${course.name === "HTML" ? 'class="active"' : ""}>HTML</a>
                <a href="../css/css-intro.html" ${course.name === "CSS" ? 'class="active"' : ""}>CSS</a>
                <a href="../js/js-intro.html" ${course.name === "JavaScript" ? 'class="active"' : ""}>JavaScript</a>
                <a href="../redact/index.html" target="_blank" rel="noopener" style="color: #10b981;">Редактор ⚡</a>
            </nav>
        </header>
        <div class="main-container"><aside class="sidebar"><h3>${course.name} Уроки</h3><ul>
            ${course.lessons.map(([file, title], lessonIndex) => `<li><a href="${escapeHtml(file)}" ${file === filename ? 'class="active" aria-current="page"' : ""}>${lessonIndex + 1}. ${escapeHtml(title)}</a></li>`).join("")}
        </ul></aside><main class="content">
            <h1>${escapeHtml(lesson[0])}</h1><p>${escapeHtml(lesson[1])}</p>
            <div class="ad-banner"><p>[ Реклама Google AdSense ]</p></div>
            ${lesson[2].map(([title, text, code]) => `<h2>${escapeHtml(title)}</h2><p>${escapeHtml(text)}</p><div class="example-box"><div class="code-box"><pre><code>${escapeHtml(code)}</code></pre></div></div>`).join("")}
            <div class="ad-banner"><p>[ Реклама Google AdSense ]</p></div>
            <div class="example-box"><h2>Практичне завдання</h2><p>${escapeHtml(lesson[3])}</p><a href="../redact/index.html" target="_blank" rel="noopener" class="try-btn">Спробувати в редакторі »</a></div>
            <p class="lesson-navigation">${previous ? `<a href="${escapeHtml(previous[0])}">« ${escapeHtml(previous[1])}</a>` : `<a href="${escapeHtml(courseHref)}">До вступного уроку</a>`} ${next ? `<a href="${escapeHtml(next[0])}">${escapeHtml(next[1])} »</a>` : ""}</p>
        </main></div>`;
}