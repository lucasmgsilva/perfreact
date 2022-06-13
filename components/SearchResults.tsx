import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: number;
        price: number;
        title: string;
    }>
}

export function SearchResults({results}: SearchResultsProps) {
    return (
        <div>
            {
                results.map((product, i) => {
                    return (
                        <ProductItem product={product} key={i}/>
                    )
                })
            }
        </div>
    )
}

/**
 * 1. Criar uma nova versão do componente
 * 2. Comparar com a versão anterior
 * 3. Se houverem alterações, vai atualizar o que alterou
 */

/**
 * 1. Pure Function Components
 * 2. Renders too often
 * 3. Re-renders with same props
 * 4. Medium to big size
 */

/**
 * useMemo / useCallback
 * 
 * 1. Calculos pesados
 * 2. Igualdade referencial (quando a gente repassa aquela informacao a um componente filho)
 */