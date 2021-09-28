class MainHome {
   
    createMain() {
        this.element = document.createElement('div');
        this.element.classList.add('mainHome');
    }

    render() {
        this.createMain();

        this.element.innerHTML = `
        <p>«Всевозможные волшебные вредилки» (англ. «Weasleys' Wizard Wheezes») — магазин близнецов Уизли, который они открыли в начале 1996 года по адресу Косой переулок, 93.</p>
        <p>Основная специализация магазина — волшебные шутки и приколы. Однако этим он не ограничивается. Во «Всевозможных вредилках» можно купить и любовные напитки, и «Патентованные чары», и даже карликовых пушистиков. Есть тут и вполне серьёзный отдел, продающий вещи, наделённые защитной магией: шляпы, мантии и перчатки-щиты, Порошок мгновенной тьмы, Отвлекающие обманки...</p>
        <p>Единственное, что объединяет все эти разнообразные товары — неизменно высокое качество и потрясающий уровень магии. К тому же, многие вещи — эксклюзивные разработки Фреда и Джорджа, нигде больше вы не купите ничего подобного. И ещё одна отличительная черта товаров «от Уизли»: даже к самым, казалось бы, страшным вещам они подходят с юмором. Чего стоят, например, некоторые названия: «Съедобные Чёрные метки — всякого стошнит!» или «Висельник многоразового использования». А уж спародировать плакат Министерства магии, который висел во всех витринах Косого переулка летом 1996 года — было не только смелым озорным поступком, но и прекрасным пиар-ходом. Неудивительно, что «Всевозможные волшебные вредилки» — прибыльное заведение.</p>
        `;

        return this.element;
    }
}

const mainHome = new MainHome().render();
export default mainHome;