import { View, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";

import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

function handleRemoveItem() {
  console.log('Remove item')
}

function handleStatusChange() {
  console.log('Cambia status')
}

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo}/>
      
      <View style={styles.form}>
        <Input placeholder="¿Que necesitas comprar?" />
        <Button title="Añadir"/>
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => {
              return <Filter key={status} status={status} isActive />
            })
          }

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpiar</Text>
          </TouchableOpacity>
        </View>

        <Item 
          data={{ status: FilterStatus.DONE, description: 'Comprar moto' }}
          onStatusChange={() => handleStatusChange()}
          onRemove={() => handleRemoveItem()}
        />
        
      </View>
    </View>
  )
}
