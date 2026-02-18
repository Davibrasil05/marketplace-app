import { FlatList, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { HomeHeader } from "./components/Header"
import { SearchInput } from "./components/SearchInput"
import { ProductInterface } from "../../shared/interfaces/http/product"
import { ProductCard } from "./components/ProductCard"

export const HomeView = () => {

  const productsList: ProductInterface[] = [
      {
        id: 1,
        value: "oi",
        name: "Davi",
        description: "descrição",
        photo: "foto",
        height: "34",
        width: "20",
        weight: "20",
        averageRating: 9,
        views: 10,
        ratingCount: 1,
        categoryId: 1,
        category: {
          id: 1,
          name: "DAvizao"
        },
        createdAt: "string",
        updatedAt: "string",
        deletedAt: "string"
    },
  ]
  return (
    <SafeAreaView edges={['top']} className="flex-1">
       <FlatList 
        data={productsList}
        renderItem={({item}) => <ProductCard product={item}/>}
        keyExtractor={(id) => `product-list-item-${id}`}
        ListHeaderComponent={() => (
            <>
                <HomeHeader/>
                <SearchInput/>
            </>
        )}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
    
    )
}