import { Document } from 'mongoose';
export type ProductDocument = Product & Document;
export declare class Product {
    id: number;
    name?: string;
    slug?: string;
    productImage?: string;
    productTitle?: string;
    productPrice?: number;
    category?: string;
    brand?: string;
    stock?: number;
    isAvailable?: boolean;
    ratings?: number;
    tags?: string[];
    colors?: string[];
    material?: string;
    shipping?: {
        weight?: number;
        dimensions?: {
            width?: number;
            height?: number;
            depth?: number;
        };
    };
    productDescription?: {
        main?: string;
        descOne?: string;
        descTwo?: string;
        descThree?: string;
    };
    productDimensions?: {
        height?: string;
        weight?: string;
        depth?: string;
    };
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product, any, import("mongoose").DefaultSchemaOptions> & Product & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, Product>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, {
    id?: import("mongoose").SchemaDefinitionProperty<number, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    name?: import("mongoose").SchemaDefinitionProperty<string, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    slug?: import("mongoose").SchemaDefinitionProperty<string, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    productImage?: import("mongoose").SchemaDefinitionProperty<string, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    productTitle?: import("mongoose").SchemaDefinitionProperty<string, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    productPrice?: import("mongoose").SchemaDefinitionProperty<number, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    category?: import("mongoose").SchemaDefinitionProperty<string, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    brand?: import("mongoose").SchemaDefinitionProperty<string, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    stock?: import("mongoose").SchemaDefinitionProperty<number, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    isAvailable?: import("mongoose").SchemaDefinitionProperty<boolean, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    ratings?: import("mongoose").SchemaDefinitionProperty<number, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    tags?: import("mongoose").SchemaDefinitionProperty<string[], Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    colors?: import("mongoose").SchemaDefinitionProperty<string[], Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    material?: import("mongoose").SchemaDefinitionProperty<string, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    shipping?: import("mongoose").SchemaDefinitionProperty<{
        weight?: number;
        dimensions?: {
            width?: number;
            height?: number;
            depth?: number;
        };
    }, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    productDescription?: import("mongoose").SchemaDefinitionProperty<{
        main?: string;
        descOne?: string;
        descTwo?: string;
        descThree?: string;
    }, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    productDimensions?: import("mongoose").SchemaDefinitionProperty<{
        height?: string;
        weight?: string;
        depth?: string;
    }, Product, Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}, Product>;
