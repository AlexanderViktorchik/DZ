class Options{
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
        div.textContent = 'Новый DIV!';
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-Align: ${this.textAlign};`; //cssText стирает все предыдущие стили
        div.style.marginTop = '100px'; //но можно добавить новые не стирая эти обычным свойством style
        document.body.appendChild(div);
    }
}

let redSquare = new Options(300, 500, 'red', 40, 'center');
redSquare.createDiv();

