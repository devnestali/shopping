import { StatusIcon } from "../StatusIcon";

import { View, Text, TouchableOpacity } from "react-native";
import { Trash2 } from "lucide-react-native";
import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";

type ItemData = {
  status: FilterStatus
  description: string
}

type ItemProps = {
  data: ItemData
  onRemove: () => void
  onStatusChange: () => void
}

export function Item({ data, onStatusChange, onRemove }: ItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onStatusChange}>
        <StatusIcon status={data.status}/>
      </TouchableOpacity>

      <Text style={styles.description}>{data.description}</Text>
      
      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  )
}