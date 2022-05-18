'use strict';

/*
1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.
 */

// ES 6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}


let instance_class = new AttachedPost('i\'m?', 'lorem', '2021-09-24');
console.log(`${instance_class.author}\n${instance_class.text}\n${instance_class.date}\n${instance_class.highlighted}`);
instance_class.edit('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi culpa...');
instance_class.makeTextHighlighted();
console.log(`${instance_class.author}\n${instance_class.text}\n${instance_class.date}\n${instance_class.highlighted}`);
