import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const categories = [
  { id: 1, name: "Pizza", image: "https://tse2.mm.bing.net/th?id=OIP.oWI38yAzSDcjDvT8xVFlcwHaFb&pid=Api&P=0&h=180" },
  { id: 2, name: "Burgers", image: "https://tse4.mm.bing.net/th?id=OIP.OvLU3z2b6vcj7AQ3fNm4wAHaE8&pid=Api&P=0&h=180" },
  { id: 3, name: "Steak", image: "https://tse4.mm.bing.net/th?id=OIP.KfHhc89xIFhQAQ8YLrAm_wHaFj&pid=Api&P=0&h=180" },
  { id: 4, name: "Chicken", image: "https://tse1.mm.bing.net/th?id=OIP.tvf872gsUCz1lAELF36H3gHaE7&pid=Api&P=0&h=180" },
  { id: 5, name: "Salad", image: "https://tse1.mm.bing.net/th?id=OIP.vpr9QcvUK7d2VxFKj3UnHgHaE8&pid=Api&P=0&h=180" },
];

const popularItems = [
  { id: 1, name: "Bún chả", price: "$1", image: "https://tse3.mm.bing.net/th?id=OIP.Mppi9TQGlQYoLREKlzU_mAHaE6&pid=Api&P=0&h=180", seller: "By Viet Nam", discount: "10% OFF" },
  { id: 2, name: "Phở", price: "$3", image: "https://tse4.mm.bing.net/th?id=OIP.RpfFIt80acn5wcnBfbv38wHaE7&pid=Api&P=0&h=180", seller: "By Viet Nam" },
  { id: 3, name: "Sushi", price: "$5", image: "https://tse4.mm.bing.net/th?id=OIP.zV06qVQPW6tYs40GiNTrvQHaE7&pid=Api&P=0&h=180", seller: "By Nhat Ban", discount : "20% OFF" },
  { id: 4, name: "Ramen", price: "$10", image: "https://tse2.mm.bing.net/th?id=OIP.w_Gi7SJWWr3oSnFQ_gdZ2AHaE8&pid=Api&P=0&h=180", seller: "By Nhat Ban" },
];

const popularfood = [
  { id: 1, name: "Bún chả", price: "$1", image: "https://tse3.mm.bing.net/th?id=OIP.Mppi9TQGlQYoLREKlzU_mAHaE6&pid=Api&P=0&h=180", seller: "By Viet Nam", discount: "10% OFF" },
  { id: 2, name: "Phở", price: "$3", image: "https://tse4.mm.bing.net/th?id=OIP.RpfFIt80acn5wcnBfbv38wHaE7&pid=Api&P=0&h=180", seller: "By Viet Nam" },
  { id: 3, name: "Sushi", price: "$10", image: "https://tse4.mm.bing.net/th?id=OIP.zV06qVQPW6tYs40GiNTrvQHaE7&pid=Api&P=0&h=180", seller: "By Nhat Ban", discount : "20% OFF" },
  { id: 44, name: "Ramen", price: "$5", image: "https://tse2.mm.bing.net/th?id=OIP.w_Gi7SJWWr3oSnFQ_gdZ2AHaE8&pid=Api&P=0&h=180", seller: "By Nhat Ban" },
];
const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <Ionicons name="location-outline" size={24} color="gray" />
        <TextInput placeholder="Search for meals or area" style={styles.searchInput} />
        <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
      </View>

      {/* Danh mục món ăn */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <MaterialIcons name="filter-list" size={24} color="orange" />
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryCard}>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
      />

      {/* Sản phẩm phổ biến */}
      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={popularItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.popularCard}>
            <Image source={{ uri: item.image }} style={styles.popularImage} />
            {item.discount && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{item.discount}</Text>
              </View>
            )}
            <Text style={styles.popularName}>{item.name}</Text>
            <Text style={styles.popularSeller}>{item.seller}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  searchContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#f1f1f1", padding: 12, borderRadius: 10, marginBottom: 15 },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16 },
  searchIcon: { marginLeft: "auto" },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  categoryCard: { alignItems: "center", marginRight: 15 },
  categoryImage: { width: 80, height: 80, borderRadius: 10 },
  categoryText: { marginTop: 5, fontSize: 14, fontWeight: "bold" },
  viewAll: { color: "orange", fontSize: 14, fontWeight: "bold" },
  popularCard: { width: 150, backgroundColor: "#fff", borderRadius: 10, padding: 10, marginRight: 10, elevation: 3 },
  popularImage: { width: "100%", height: 100, borderRadius: 10 },
  discountBadge: { position: "absolute", top: 10, left: 10, backgroundColor: "red", paddingHorizontal: 5, borderRadius: 5 },
  discountText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
  popularName: { fontSize: 14, fontWeight: "bold", marginTop: 5 },
  popularSeller: { fontSize: 12, color: "gray" },
  popularPrice: { fontSize: 14, color: "green", fontWeight: "bold", marginTop: 2 },
});

export default ExplorerScreen;
