import { useState } from "react";
import { View, Image, TouchableOpacity, Text, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";

import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { ItemStorage } from "@/storage/itemsStorage";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]


export function Home() {
  const [filter, setFilter] = useState<FilterStatus>()
  const [description, setDescription] = useState<string>()
  const [items, setItems] = useState<ItemStorage[]>([])

  function toggleFilter(status: FilterStatus) {
    setFilter(status)
  }

  function handleInputText(value: string) {
    setDescription(value)
  }

  function handleAddItem() {
    if(!description?.trim()) {
      return Alert.alert("Añadir", "Ingrese una descripción para agregar")
    }

    const newItem: ItemStorage = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING
    }

    setItems((previousItems) => [newItem, ...previousItems ])
  }

  function handleRemoveItem() {
    console.log('Remove item')
  }

  function handleStatusChange() {
    console.log('Cambia status')
  }
  
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo}/>
      
      <View style={styles.form}>
        <Input 
          placeholder="¿Que necesitas comprar?"
          onChangeText={(value) => handleInputText(value)}
          />
        <Button 
          title="Añadir"
          onPress={handleAddItem}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => {
              return (
                <Filter 
                  key={status} 
                  status={status} 
                  isActive={status === filter}
                  onPress={() => toggleFilter(status)}
                />
              )
            })
          }

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpiar</Text>
          </TouchableOpacity>
        </View>

        <FlatList 
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Item
                data={item}
                onStatusChange={() => handleStatusChange()}
                onRemove={() => handleRemoveItem()}
              />
            )
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.emptyList}>No hay ningún articulo aquí.</Text>}
        />
        
      </View>
    </View>
  )
}