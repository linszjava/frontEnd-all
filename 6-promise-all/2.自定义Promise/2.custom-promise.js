function Promise(executor) {
    // console.log('我是自定义 Promise')
    // 修改 promiseState  pending => resolved
    this.PromiseState = 'pending'
    // 修改 promiseResult  undefined => value
    this.PromiseResult = null
    // 回调函数
    this.callbacks = []

    const self = this
    function resolve(data) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'fulfilled'
        self.PromiseResult = data
        if (self.callback.onResolved) {
            self.callback.forEach(item => {
                item.onResolved(data)
            })
        }
    }
    function reject(data) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'rejected'
        self.PromiseResult = data
        if (self.callback.onRejected) {
            self.callback.forEach(item => {
                item.onRejected(data)
            })
        }

    }
    try {
        executor(resolve, reject)
    }catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onResolved, onRejected) {
    return new Promise((resolve,reject) =>{
        if (this.PromiseState === 'fulfilled') {
            try {
                let result = onResolved(this.PromiseResult);
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v)
                    }, r => {
                        reject(r)
                    })
                }else {
                    resolve(result)
                }
            }catch (e) {
                reject(e)
            }
        }
        if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult)
        }
        if (this.PromiseState === 'pending') {
            this.callbacks.push({
                onResolved,
                onRejected
            })
        }

    })
}

//实现至 异步实现then方法 P34