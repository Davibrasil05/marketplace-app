import { useBottomSheet } from "@gorhom/bottom-sheet"
import { useGetProductCategoriesQuery } from "../../../../shared/queries/product/use-get-product-categories"
import { useUserFilterStore } from "../../../../shared/store/use-filter-store"
import { useBottomSheetStore } from "../../../../shared/store/bottomsheet-store"

export const useFilterViewModel = () => {
  const {data: ProductCategory,
    isLoading,
  } = useGetProductCategoriesQuery()

  const {updateFilter, filterState, applyFilters, appliedFilterState, resetFilter} = useUserFilterStore()
  const {close} = useBottomSheetStore()
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

  const handleApplyFilters = () => {
    applyFilters()
    close()
  }

  const handleResetFilter =() => {
    close()
    resetFilter()
  }

  
  return {
    productsCategory: ProductCategory,
    isLoading,
    handleCategoryToggle,
    handleValueMaxChange,
    handleValueMinChange,
    handleApplyFilters,
    handleResetFilter,
    selectedCategories: filterState.selectedCategories
    }
}