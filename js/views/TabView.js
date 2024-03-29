import View from './View.js'

const TabView = Object.create(View)

TabView.tabNames = {
    recommand: 'Todo',
    recent: 'Calendar',
}

TabView.setup = function (el) {
    this.init(el)
    this.bindClick()
    return this
}

TabView.bindClick = function() {
    Array.from(this.el.children).forEach(li => {
        li.addEventListener('click', e => this.onClick(li.innerHTML))
    })
}

TabView.onClick = function (tabName) {
    this.setActiveTab(tabName)
    this.emit('@change', { tabName })
}

TabView.setActiveTab = function (tabName) {
    Array.from(this.el.children).forEach(li => {
      li.className = li.innerHTML === tabName ? 'active' : ''
    })
    this.show()
}

export default TabView