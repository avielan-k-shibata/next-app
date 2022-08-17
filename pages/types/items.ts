export type Item ={
    
    id: number,
    attributes: {
        name: string,
    }
}
export type ItemData ={
    item:{
        data:{
            id: number,
            attributes: {
                name: string,
            }
        }
    }
}

export type ItemsData ={
    items:{
        data:[
            id: number,
            attributes: {
                name: string,
            }
        ]
    }
}