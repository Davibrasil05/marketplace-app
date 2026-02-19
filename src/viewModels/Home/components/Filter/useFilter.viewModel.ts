import { useGetProductCategoriesQuery } from "../../../../shared/queries/product/use-get-product-categories"

export const useFilterViewModel = () => {

    const {data: ProductCategory,
        isLoading,
        error,
        refetch,
    } = useGetProductCategoriesQuery()
    return {
        productsCategory: ProductCategory,
        isLoading,

    }
}