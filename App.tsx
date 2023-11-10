import React, { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

const App = () => {
  const [popUpModal, setPopUpModal] = useState(false);

  const [modalSelector, setModalSelector] = useState(1);

  function renderModal() {
    if (modalSelector === 1) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/fun-3d-cartoon-casual-character_183364-80985.jpg?w=740&t=st=1699614822~exp=1699615422~hmac=869bb56406da580f312d91055d6db4013a2cd5ab6b30d46bcdd237fbdfc6a1c2",
              }}
              style={{ width: 100, height: 100 }}
            />
            <Text>Si Tamvans</Text>
          </View>
        </View>
      );
    } else if (modalSelector === 2) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/fun-cartoon-kid-with-rain-gear_183364-81176.jpg?t=st=1699613788~exp=1699614388~hmac=17b93e71ce9f6d1090b6e7b234efefd52cae22592ab476ac7252824c8c6c4647",
              }}
              style={{ width: 100, height: 100 }}
            />
            <Text>Si Om Oms</Text>
          </View>
        </View>
      );
    } else if (modalSelector === 3) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/fun-3d-cartoon-casual-character-woman_183364-80070.jpg?w=740&t=st=1699614783~exp=1699615383~hmac=92e3df8014915ec3df69cc0e263e92e4501f4a0651b20a1ebb634e2516e498dd",
              }}
              style={{ width: 100, height: 100 }}
            />
            <Text>Si Cantik</Text>
          </View>
        </View>
      );
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Modal isVisible={popUpModal}>
        <View
          style={{
            backgroundColor: "white",
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 10,
          }}
        >
          {renderModal()}
          <TouchableOpacity
            onPress={() => setPopUpModal(false)}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginLeft: "auto",
              backgroundColor: "blue",
              padding: 5,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>Tutup Content</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              padding: 15,
              borderRadius: 10,
              marginTop: 10,
              marginRight: 10,
            }}
            onPress={() => setModalSelector(1)}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>👦</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              padding: 15,
              borderRadius: 10,
              marginTop: 10,
              marginRight: 10,
            }}
            onPress={() => setModalSelector(2)}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>👨‍🦰</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              padding: 15,
              borderRadius: 10,
              marginTop: 10,
            }}
            onPress={() => setModalSelector(3)}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>👧</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setPopUpModal(true)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          backgroundColor: "blue",
          padding: 5,
          borderRadius: 10,
          marginHorizontal: 100,
        }}
      >
        <Text style={{ color: "white" }}>Buka Content</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
