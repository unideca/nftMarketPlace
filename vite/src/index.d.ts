interface Window {
    ethereum: any;
}

interface NftMetadata {
    name: string;
    description: string;
    image: string;
    attributes? :{
        trait_type: string;
        value: string;
    }[]
}

interface SaleNftMetadata extends NftMetadata {
    price : bigint;
    tokenOwner : string;
}

// type a = 
// {name : string; }

// type b = 
// {age : number; }

// type c = a & b;


//number랑 string 둘다 가진 타입이 됨
//attributes는 없을 수도 있으니까 optional로 ? 표시