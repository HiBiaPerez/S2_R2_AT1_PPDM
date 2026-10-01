export interface Product{
    id?: number | string;
    nome: string;
    descricao: string;
    categoria?: string;
    preco: number;
    quantidade_estoque?: number;
    quantidade?: number;
    categoria_id?: number;
    status?: number;
    destaque?: boolean;
    marca?: string;
    modelo?: string;
    garantia_meses?: number
}

// Tipar a criação do produto:
// DTO --> Data transfer Object de Transferência de Dados
// Definindo quais os dados nós vamos enviar wm um aoperação específica
export interface CreateProductDTO {
    nome: string;
    descricao: string;
    categoria?: string;
    preco: number;
    quantidade_estoque?: number;
    quantidade?: number;
    categoria_id?: number;
    status?: number;
    destaque?: boolean;
}

export interface UpdateProductDTO {
    id?: number | string
    nome: string;
    descricao: string;
    categoria?: string;
    preco: number;
    quantidade_estoque?: number;
    quantidade?: number;
    categoria_id?: number;
    status?: number;
    destaque?: boolean;
}