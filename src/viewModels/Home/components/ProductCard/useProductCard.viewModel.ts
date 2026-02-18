import { ProductInterface } from "../../../../shared/interfaces/product"

interface useProductCardViewModelParams {
  product: ProductInterface
}


export const useProductCardViewModel = ({
  product
}: useProductCardViewModelParams) => {
  return {
    product
  }
}