import React from "react";
import { View, Button, StyleSheet } from "react-native";

import * as design from "../design";

function PlayerControls(props) {
  const {
    status,
    activePost,
    handlePrev,
    handlePlay,
    handlePause,
    handleSkip
  } = props;

  return (
    <View style={styles.player}>
      <View style={styles.controls}>
        <View style={styles.controlButton}>
          <Button onPress={handlePrev} title="Prev" disabled={!activePost} />
        </View>

        <View style={styles.controlButton}>
          <Button
            onPress={handlePlay}
            title="Play"
            disabled={status === "PLAYING" || !activePost}
          />
        </View>

        <View style={styles.controlButton}>
          <Button
            onPress={handlePause}
            title="Pause"
            disabled={status === "PAUSED" || !activePost}
          />
        </View>

        <View style={styles.controlButton}>
          <Button onPress={handleSkip} title="Skip" disabled={!activePost} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  player: {
    display: "flex",
    alignItems: "center",
    borderColor: "#ddd",
    borderTopWidth: 1,
    padding: design.spacing.base
  },
  controls: {
    flexDirection: "row"
  },
  controlButton: {
    marginLeft: design.spacing.smaller1,
    marginRight: design.spacing.smaller1
  }
});

export default PlayerControls;
