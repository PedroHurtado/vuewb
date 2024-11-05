!function(){
  document.addEventListener('click', async (ev)=>{
    ev.preventDefault()
    ev.stopPropagation()
    const node =ev.composedPath().find(n=>n.dataset && 'page' in n.dataset)
    if(node){
        const {page}  = node.dataset
        const url = `./${page}.js`
        const component = await import(url)
        component.default()
    }
  })      
}()   //autoejecutable