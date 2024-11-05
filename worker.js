import {MESSAGES} from './messages.js'
self.onmessage = ({data})=>{    
    console.log(data);  
    self.postMessage({
        type:MESSAGES.return, 
        detail:'return type'
    })  
}

