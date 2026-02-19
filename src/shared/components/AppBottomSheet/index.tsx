import { View } from "react-native"
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView, BottomSheetBackdropProps, useBottomSheet } from "@gorhom/bottom-sheet"
import { useBottomSheetStore } from "../../store/bottomsheet-store"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { colors } from "../../../styles/colors"
import { boolean } from "yup"


export const AppBottomSheet = () => {
  const { content, close, isOpen, config } = useBottomSheetStore()

  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = useMemo(() => config?.snapPoints || ["80%", "90%"],
    [config?.snapPoints]
  )

  useEffect(() => {
    if (isOpen && content) {
      bottomSheetRef.current?.snapToIndex(0)
    } else {
      bottomSheetRef.current?.close()
    }
  }, [isOpen, content])

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      close()
    }
  }, [close])

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) =>
      <BottomSheetBackdrop {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.7}
        pressBehavior={"close"}
      />
    , [])
  return (
    <BottomSheet
      ref={bottomSheetRef}
      backgroundStyle={{
        backgroundColor: colors.background,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={config?.enablePanDownToCLose ?? true}
      index={-1}
      animateOnMount
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <BottomSheetScrollView>
        {content}
      </BottomSheetScrollView>
    </BottomSheet>
  )
}