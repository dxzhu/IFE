class Dialog {
    constructor(config) {

        this.defaultConfig = {
            width: 400,
            height: 240,
            title: 'Warning',
            description: '这是一个弹出层',
            button: 2,
            input: false,
            isMask: true,
            isMove: true
        }
        this.domeMap = {}
        this.config = Object.assign({}, this.defaultConfig, config)
        this.initHtml()
        this.bindEvent()
        this.top = (window.innerHeight - this.domeMap.height) / 2
        this.left = (window.innerWidth - this.domeMap.width) / 2
    }
    initHtml() {

        let mask = document.createElement('div')
        mask.className = 'mask'
        this.domeMap.mask = mask

        let container = document.createElement('div')
        container.className = 'dialog'
        container.style.height = this.config.height + 'px'
        container.style.width = this.config.width + 'px'
        container.style.top = window.innerHeight / 2 + 'px'
        container.style.left = window.innerWidth / 2 + 'px'

        let title = document.createElement('div')
        title.className = 'dialog-title'
        this.config.title
        this.domeMap.title = title

        let h4 = document.createElement('h4')
        h4.class = 'dialog-title-content'
        h4.innerHTML = this.config.title

        let closeBtn = document.createElement('i')
        closeBtn.className = 'dialog-title-close'
        this.domeMap.closeBtn = closeBtn

        let content = document.createElement('div')
        content.className = 'dialog-content'

        let description = document.createElement('p')
        description.className = 'dialog-description'
        description.innerHTML = this.config.description

        let input = document.createElement('inout')
        input.className = 'dialog-input'

        let enBtn = document.createElement('button')
        enBtn.class = 'dia-en-btn'
        enBtn.innerHTML = '确定'
        this.domeMap.enBtn = enBtn

        let escBtn = document.createElement('button')
        escBtn.class = 'dia-esc-btn'
        escBtn.innerHTML = '取消'
        this.domeMap.escBtn = escBtn
        let btn = document.createElement('div')
        btn.className = 'dialog-btn'

        if (this.config.isMask) {
            document.body.appendChild(mask)
        }
        title.appendChild(h4)
        title.appendChild(closeBtn)

        content.appendChild(description)
        if (this.config.input) {
            content.appendChild(input)
        }
        if (this.config.button === 1) {
            enBtn.className = 'dia-en-btn-only'
            btn.appendChild(enBtn)
        } else {
            btn.appendChild(enBtn)
            btn.appendChild(escBtn)
        }

        container.appendChild(title)
        container.appendChild(content)
        container.appendChild(btn)
        this.domeMap.container = container

        document.body.appendChild(container)
    }
    bindEvent() {
        const _this_ = this
        this.domeMap.closeBtn.addEventListener('click', () => {
            console.log(111)
            this.removeDialog()
            return false
        }, false)
        this.domeMap.enBtn.addEventListener('click', () => {
            this.removeDialog()
            return true
        }, false)
        this.domeMap.escBtn.addEventListener('click', () => {
            this.removeDialog()
            return false
        }, false)
        this.domeMap.mask.addEventListener('click', () => {
            this.removeDialog()
        }, false)
        if (this.config.isMove) {
            this.domeMap.title.addEventListener('mousedown', e => {
                document.onmousemove = function(event) {
                    _this_.domeMap.container.style.left = event.clientX - e.clientX + _this_.left + 'px'
                    _this_.domeMap.container.style.top = event.clientY - e.clientY + _this_.top + 'px'
                }
                document.onmouseup = function() {
                    _this_.top = parseInt(_this_.domeMap.container.style.top)
                    _this_.left = parseInt(_this_.domeMap.container.style.left)
                    document.onmousemove = null;
                }
            }, false)
        }
    }
    removeDialog() {
        document.body.removeChild(document.body.lastChild)
        document.body.removeChild(document.body.lastChild)
    }
}
