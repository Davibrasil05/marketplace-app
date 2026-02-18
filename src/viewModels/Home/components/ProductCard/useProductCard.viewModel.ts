import { ProductInterface } from "../../../../shared/interfaces/http/product"

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