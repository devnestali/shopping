import { View, Image } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />
      <Button title="Criar conta" activeOpacity={0.6} onPress={() => console.log("Criar conta")}/>
      <Button title="Adicionar" activeOpacity={0.5} onPress={() => console.log("Adicionar")}/>
      <Button title="Salvar" activeOpacity={0.8} onPress={() => console.log("Salvar")}/>
      <Button title="Voltar" activeOpacity={0.2} onPress={() => console.log("Voltar")}/>
    </View>
  )
}
