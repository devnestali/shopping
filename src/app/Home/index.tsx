import { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, Text, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";

import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { ItemStorageProps, ItemStorage } from "@/storage/itemsStorage";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]


export function Home() {
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.PENDING)
  const [description, setDescription] = useState<string>()
  const [items, setItems] = useState<ItemStorageProps[]>([])

  function toggleFilter(status: FilterStatus) {
    setFilter(status)
  }

  function handleInputText(value: string) {
    setDescription(value)
  }

  async function handleAddItem() {
    if(!description?.trim()) {
      return Alert.alert("Añadir", "Ingrese una descripción para agregar.")
    }

    const newItem: ItemStorageProps = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING
    }

    await ItemStorage.add(newItem)
    await itemsByStatus()
    
    setFilter(FilterStatus.PENDING)
    setDescription("")
  }

  async function handleRemoveItem(id: string) {
    try {
      await ItemStorage.remove(id)
      await itemsByStatus()
    
    } catch (error) {
      console.error(error)
      Alert.alert("Eliminar", "No fue posible eliminar el artículo.")
    }
  }

  async function handleStatusChange(id: string) {
    try {
      await ItemStorage.toggleStatus(id)
      await itemsByStatus()
    
    } catch (error) {
      console.error(error)
      Alert.alert("Estado", "No fue posible actualizar el estado actual.")
    }
  }

  async function itemsByStatus() {
    try {
      const response = await ItemStorage.getByStatus(filter)
      setItems(response)
    
    } catch (error) {
      console.error(error)
      Alert.alert("Error", "No fue posible filtrar por los artículos.")
    }
  }

  function handleClear() {
    Alert.alert("Limpiar", "¿Quieres eliminar todos?", [
      { text: "No", style: "cancel"},
      { text: "Sí", onPress: () => onClear() }
    ])
  }

  async function onClear() {
    try {
      await ItemStorage.clear()
      setItems([])
    
    } catch (error) {
      console.error(error)
      Alert.alert("Limpiar", "No fue posible eliminar todos los artículos.")
    }
  }
  
 
  useEffect(() => {
    itemsByStatus()
  }, [filter])
  
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo}/>
      
      <View style={styles.form}>
        <Input 
          placeholder="¿Que necesitas comprar?"
          onChangeText={(value) => handleInputText(value)}
          value={description}
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

          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
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
                onStatusChange={() => handleStatusChange(item.id)}
                onRemove={() => handleRemoveItem(item.id)}
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