import React from "react";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [pacar, setPacar] = useState(0);
  const [warna, setWarna] = useState("white");

  const tambahPacar = () => {
    setPacar(pacar + 1);
    if (pacar >= 0) {
      setWarna("green");
    } else  {
      setWarna("white");
    }
  };

  const kurangiPacar = () => {
    setPacar(pacar - 1);
    if (pacar < 1) {
      setPacar(0);
    }
    if(pacar <= 1) {
      setWarna("white");
    }
  };

  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "gray",
          flex: 1,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, color: warna }}>jumlah pacar saya : {pacar}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={kurangiPacar}
            style={{ marginRight: 10, backgroundColor: "red" }}
          >
            <Text style={{ color: "white", padding: 10 }}>Kurangi Pacar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={tambahPacar}
            style={{ marginLeft: 10, backgroundColor: "green" }}
          >
            <Text style={{ color: "white", padding: 10 }}>Tambah Pacar</Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </View>
    </>
  );
}
