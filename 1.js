function name(params) {
    console.log('ad')
    console.log(12366)
    console.log(`   if (code === 200) {
        if (data && data.length > 0) {
          if (btn === 'street') {
            const list = []
            const as = data.filter(item => {
              return item.officeType === '31'
            })
            if (as.length > 0) {
              as.map(item => {
                list.push({ key: list.length + 1, ...item })
              })
            }
            this.setState({
              dataList: list
            })
          } else if (btn === 'part') {
            const list = []
            const as = data.filter(item => {
              return item.officeType === '32'
            })
            if (as.length > 0) {
              as.map(item => {
                list.push({ key: list.length + 1, ...item })
              })
            }`)
}
