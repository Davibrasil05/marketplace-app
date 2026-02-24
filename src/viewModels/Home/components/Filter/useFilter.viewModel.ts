import { useGetProductCategoriesQuery } from "../../../../shared/queries/product/use-get-product-categories"
import { useUserFilterStore } from "../../../../shared/store/use-filter-store"

export const useFilterViewModel = () => {
  const {data: ProductCategory,
    isLoading,
  } = useGetProductCategoriesQuery()

  const {updateFilter, filterState} = useUserFilterStore()

  const handleValueMaxChange = (value: number) => {
    updateFilter({key: "valueMax", value})
  }

  const handleValueMinChange = (value: number) => {
    updateFilter({key: "valueMin", value})
  }

  const handleCategoryToggle = (categoryId: number) => {
    const categoryAlreadyInArray =
      filterState.selectedCategories.includes(categoryId)

      if(categoryAlreadyInArray){
        updateFilter({
          key: "selectedCategories", 
          value: filterState.selectedCategories.filter((id) => id !== categoryId)})
      } else {
        updateFilter({
          key: "selectedCategories", 
          value: [...filterState.selectedCategories , categoryId]
          })
      }
  }


  
  return {
    productsCategory: ProductCategory,
    isLoading,
    handleCategoryToggle,
    handleValueMaxChange,
    handleValueMinChange,
    selectedCategories: filterState.selectedCategories
    }
}