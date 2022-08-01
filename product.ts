export class Product {
    constructor(public productID : number,
        public productName : string,
        public productDescription: String,
        public unitPrice : number,
        public imageURL : string,
        public activeBit : number,
        public unitsInStock : number,
        public dateCreated : string,
        public lastUpdated : string,
        public categoryID : number,
        public sku : string ){}
}
