export interface SimpleComic {
    id: number;
    title: string;
    issueNumber: number;
    thumbnail: string;
    price: number;
    description: string;
  
}

interface textObjects{}
interface urls{
    type: string;
    url: string;
}
interface series{
    resourceURI: string;
    name: string;
}
interface variants{}
interface collections{}
interface collectedIssues{}
interface dates{
    type: string;
    date: string;
}
interface prices{
    type: string;
    price: number;
}
interface thumbnail{
    path: string;
    extension: string;
}
interface images{
    path: string;
    extension: string;
}
interface items{
    resourceURI: string;
    name: string;
    type: string; 
}
interface creators{
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}

interface characters{
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
}
interface stories{
    available: number;
    collectionURI: string;
    items: items[];
    returned: number;
}
interface events{
    available: number;
    collectionURI: string;
    items: items[];
    returned: number;
}

export interface Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber:number;
    variantDescription: string;
    description: any;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: textObjects;
    resourceURI: string;
    urls: urls[];
    series: series;
    variants: variants;
    collections: collections;
    collectedIssues: collectedIssues;
    dates: dates[];
    prices: prices[];
    thumbnail: thumbnail;
    images: images[];
    creators: creators;
    characters: characters;
    stories: stories;
    events: events;
}